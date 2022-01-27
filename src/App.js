import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import BlogDetails from './Pages/HomeComponent/Blogs/BlogDetails';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import AddBlog from './Pages/DashBoard/AddBlog/AddBlog';
import CreateAdmin from './Pages/DashBoard/CreateAdmin/CreateAdmin';
import ManagePost from './Pages/DashBoard/ManagePost/ManagePost';
import MyBlog from './Pages/DashBoard/MyBlog/MyBlog';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/UserLogin/Login';
import EditPost from './Pages/DashBoard/MyBlog/EditPost';
import PostAdminBlog from './Pages/DashBoard/PostAdminBlog/PostAdminBlog';
import PrivateRoute from './Pages/UserLogin/PrivateRoute';
import DashBoardHome from './Pages/DashBoard/DashBoardHome/DashBoardHome';
import CompairBlog from './Pages/CompairBlog/CompairBlog';
import Register from './Pages/UserLogin/Register';

function App() {
  return (
    
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/details/:id" element={ <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute> }></Route>
        <Route path="/addBlog" element={<AddBlog></AddBlog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/editPost/:id" element={<EditPost/>}></Route>
        <Route path="/compare" element={<CompairBlog/>}></Route>

        <Route path="/dashboard" element={<DashBoard></DashBoard>}>
          <Route path="addAdmin" element={<CreateAdmin/>}></Route>
          <Route path="managePost" element={<ManagePost/>}></Route>
          <Route path="myBlog" element={<MyBlog/>}></Route>
          <Route path="postBlog" element={<PostAdminBlog/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      
      </AuthProvider>
  );
}

export default App;
