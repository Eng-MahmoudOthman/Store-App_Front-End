import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import MenSocks from './Components/MenSocks/MenSocks.jsx';
import WomenSocks from './Components/WomenSocks/WomenSocks.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import AnkleMen from './Components/MenSocks/AnkleMen/AnkleMen.jsx';
import LongMen from './Components/MenSocks/LongMen/LongMen.jsx';
import InvisibleMen from './Components/MenSocks/InvisibleMen/InvisibleMen.jsx';
import HalfMen from './Components/MenSocks/HalfMen/HalfMen.jsx';
import AnkleWomen from './Components/WomenSocks/AnkleWomen/AnkleWomen.jsx';
import InvisibleWomen from './Components/WomenSocks/InvisibleWomen/InvisibleWomen.jsx';
import HalfWomen from './Components/WomenSocks/HalfWomen/HalfWomen.jsx';
import LongWomen from './Components/WomenSocks/LongWomen/LongWomen.jsx';
import Shops from './Components/Shops/Shops.jsx';
import Offers from './Components/Offers/Offers.jsx';
import MenShoes from './Components/MenShoes/MenShoes.jsx';






const socket = io(process.env.REACT_APP_BASE_URL) ;



let routers = createHashRouter([
// let routers = createBrowserRouter([
	{path:"" , element:<Layout socket={socket}/> , children:[
		{index:true , element:<Home/>} , 
		{path:"contact" , element:<Contact/>} , 
		{path:"login" , element:<Login />} , 
		{path:"register" , element:<Register/>} , 
		{path:"men-Socks" , element:<MenSocks/>} , 
		{path:"shops" , element:<Shops/>} , 
		{path:"offers" , element:<Offers/>} , 
		{path:"menShoes" , element:<MenShoes/>} , 
			{path:"men-Socks/ankle" , element:<AnkleMen/>} , 
			{path:"men-Socks/long-men" , element:<LongMen />} , 
			{path:"men-Socks/half" , element:<HalfMen/>} ,
			{path:"men-Socks/invisible" , element:<InvisibleMen/>} ,

		{path:"women-Socks" , element:<WomenSocks/>} , 
			{path:"women-Socks/ankle" , element:<AnkleWomen/>} , 
			{path:"women-Socks/long-women" , element:<LongWomen />} , 
			{path:"women-Socks/half" , element:<HalfWomen/>} ,
			{path:"women-Socks/invisible" , element:<InvisibleWomen/>} ,

		{path:"productDetails/:productSlug" , element:<ProductDetails/>} , 
		{path:"discoverOffers" , element:<DiscoverOffers/>} , 
		{path:"forgetPassword/:id" , element:<ForgetPassword/>} , 
		{path:"cart" , element:<Cart/>} , 
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
			<ToastContainer />
		</>
	);
}

export default App;

