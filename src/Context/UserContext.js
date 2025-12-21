import axios from "axios";
import { createContext, useState  } from "react";
import { toast } from "react-toastify";



export const UserContext = createContext();


export default function UserContextProvider(props){
   const [loggedUser , setLoggedUser] = useState(null) ;
   const [userToken , setUserToken] = useState(null) ;
   const [role , setRole] = useState(null) ;
   const [error , setError] = useState(null) ;
   const [loading , setLoading] = useState(false)




   const [showLogin, setShowLogin] = useState(false);
   const [showRegister, setShowRegister] = useState(false);
   

   function logged(){
      if(userToken && role && loggedUser) {
         return true ;
      }else{
         openLogin()
         return false ;
      };
   }

   function openLogin() {
      setShowLogin(true);
   }

   function openRegister() {
      setShowRegister(true);
   }

   function closeLogin() {
      setShowLogin(false);
   }

   function closeRegister() {
      setShowRegister(false);
   }



   return (
      <>
         <UserContext.Provider value={{
            openLogin ,
            closeLogin ,
            openRegister ,
            closeRegister ,
            logged ,


            showLogin, 
            setShowLogin ,
            showRegister,  
            setShowRegister ,
            role , 
            setRole ,
            userToken , 
            setUserToken ,
            loggedUser , 
            setLoggedUser ,

         }}>
               
            {props.children}
         </UserContext.Provider>
      </>
   )
}