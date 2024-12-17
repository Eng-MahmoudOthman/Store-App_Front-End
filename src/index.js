import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/socket.io/client-dist/socket.io.min.js';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './Context/UserContext.js';
import ProductsContextProvider from './Context/ProductContext.js';
import CartContextProvider from './Context/CartContext.js';
import { QueryClient, QueryClientProvider } from 'react-query';



const root = ReactDOM.createRoot(document.getElementById('root')) ;
const queryClient = new QueryClient () ;

root.render(
  // <React.StrictMode>  
		<QueryClientProvider client={queryClient}>
			<UserContextProvider>
				<ProductsContextProvider>
					<CartContextProvider>
						<App />
					</CartContextProvider>
				</ProductsContextProvider>
			</UserContextProvider>
		</QueryClientProvider> 
  // </React.StrictMode>
);

reportWebVitals();



