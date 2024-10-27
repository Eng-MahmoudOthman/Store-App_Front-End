import { RouterProvider , createHashRouter } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
// import { jwtDecode } from 'jwt-decode';
import io from "../node_modules/socket.io/client-dist/socket.io.js"

import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Contact from './Components/Contact/Contact.jsx';
import UserProfile from './Components/UserProfile/UserProfile.jsx';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx';
import DiscoverOffers from './Components/DiscoverOffers/DiscoverOffers.jsx';
import ManSocks from './Components/ManSocks/ManSocks.jsx';
import WomenSocks from './Components/WomenSocks/WomenSocks.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import { Switch } from 'antd';





const socket = io(process.env.REACT_APP_BASE_URL) ;



let routers = createHashRouter([
// let routers = createBrowserRouter([
	{path:"" , element:<Layout socket={socket}/> , children:[
		{index:true , element:<Home/>} , 
		{path:"contact" , element:<Contact/>} , 
		{path:"login" , element:<Login />} , 
		{path:"register" , element:<Register/>} , 
		{path:"manSocks" , element:<ManSocks/>} , 
		{path:"womenSocks" , element:<WomenSocks/>} , 
		{path:"productDetails/:id" , element:<ProductDetails/>} , 
		{path:"discoverOffers" , element:<DiscoverOffers/>} , 
		{path:"forgetPassword/:id" , element:<ForgetPassword/>} , 
		{path:"cart" , element:<ProtectedRoute><Cart/></ProtectedRoute>} , 
		{path:"userProfile" , element:<ProtectedRoute><UserProfile/></ProtectedRoute>} , 
		{path:"*" , element:<NotFound/>} , 
	]} ,
])






function App() {

	// const {setUserToken , setLoggedUser , loggedUser , setModerator , setAdmin} = useContext(UserContext)


	// useEffect(() => {

	// 	//& Get Token in Local Storage And Save in Use State :
	// 	if(localStorage.getItem("token") != null){
	// 		setUserToken(localStorage.getItem("token")) ;

	// 		//& Decoded Token :
	// 		function decodedToken(){
	// 			const token =  localStorage.getItem('token'); 
	// 			let decoded = jwtDecode(token);
	// 			return decoded.role
	// 		}
	
	// 		//& Check Admin Or Or Moderator Or User :
	// 		if( decodedToken() === "admin"){
	// 			setAdmin(true)
	// 		}else if (decodedToken() === "moderator"){
	// 			setModerator(true)
	// 		}
	// 	}
	
	
	// 	if(localStorage.getItem("user") != null){
	// 		setLoggedUser(JSON.parse(localStorage.getItem("user")))
	// 	}
	// }, [])

	// useEffect(() => {
   //    socket.emit("newUser" , {email: loggedUser.email , role:loggedUser.role})
   //    socket.emit("all-Notification")
   // }, [loggedUser])

	return (
		<>
			<RouterProvider router={routers} ></RouterProvider>
			<Toaster/>
			<Switch/>
		</>
	);
}

export default App;
