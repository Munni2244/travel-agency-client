import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "../Firebase/firebase.init";

Initialization()
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  //google sing
  const SignWithGoogle = (location, navigate) => {
    setIsLoading(true)
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || '/';
        navigate(destination);
      }).catch((error) => {
      }).finally(() => setIsLoading(false));
  }
  

  /// create register app
  const RegisterUser = (email, password, name, navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
         
            window.alert("Varification sent")

          
          }).catch((error)=>{
  window.alert("Error", error.message)
          })
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, 'POST')
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        })


          .catch((error) => {
            // An error occurred
            // ...
          });
          
        navigate('/')


      })
      .catch((error) => {
        console.log(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  }

  /// login user
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        // console.log('history', history,location);
      })
      .catch((error) => {
        console.log(error.message);
      }).finally(() => setIsLoading(false));

  }

  //statechange
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)

      } else {
        setUser({})
      }
      setIsLoading(false)
    });
  }, [auth])

  ///sign out
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      //  setUser({})
    }).catch((error) => {

    })
      .finally(() => setIsLoading(false));

  }

  //save Users
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://desolate-escarpment-83667.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }


  useEffect(() => {
    setIsLoading(true)
    fetch(`https://desolate-escarpment-83667.herokuapp.com/checkAdmin/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.role === 'admin') {
          setAdmin(true);
          setIsLoading(false)
        }
        else {
          setIsLoading(false);
          setAdmin(false);
        }
      })
  }, [user.email])

  return {
    setUser,
    user,
    isLoading,
    SignWithGoogle,
    logOut,
    setIsLoading,
    admin,
    loginUser,
    RegisterUser
  }
}
export default useFirebase;