import React, { Fragment,  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterProductDetails from '../FooterProductDetails/FooterProductDetails.jsx';
import ReviewProductDetails from '../ReviewProductDetails/ReviewProductDetails.jsx';
import ProductInformation from "../ProductInformation/ProductInformation.jsx"
import ProductItem from '../ProductItem/ProductItem.jsx';
import axios from 'axios';
import "./productDetails.css";
import { toast } from 'react-toastify';





export default function ProductDetails() {
   const {productSlug} = useParams() ;

   const[productInfo , setProductInfo] = useState({});
   const[products , setProducts] = useState([]);
   const[productCategory , setProductCategory] = useState("init");


	const getSpecificProduct = async() => {
		await axios.get(`http://localhost:5000/api/v1/products/${productSlug}`) 
		.then((response)=> {
         if(response?.data.message == "success"){
            setProductInfo(response?.data.product) ;
            setProductCategory(response?.data.product.category.slug)
         }
		})
		.catch((error)=>{
         toast.error(error.response?.data.message , {
            position: "top-right"
         });
		})
	}

   
	const getProductsByCategories = async() => {
		await axios.get(`${process.env.BASE_URL}/api/v1/categories/${productCategory}/products`) 
		.then((response)=> {
			setProducts(response?.data.products) ;
		})
		.catch((error)=>{
         toast.error(error.response.data.message , {
            position: "top-right"
         });
		})
	}

   useEffect(() => {
      getSpecificProduct()
   }, [productSlug])

   
   useEffect(() => {
      if(productCategory !== "init"){
         getProductsByCategories()
      }
   }, [productCategory])

   return (
      <Fragment>
         <div className="container_productDetails" dir='rtl'>
            <div className="container">
               <ProductInformation  product={productInfo} />
               <ReviewProductDetails  product={productInfo}/>
               <FooterProductDetails  product={productInfo}/>
            </div>
         </div>
         
         <div  className='related_products border-top border-2 py-3 my-5'>
            <h2 className='text-center mb-5 mt-2'>منتجات ذات صلة</h2>
            <div className='container'>
               <div className="row g-4 px-lg-5">
                  {products.slice(Math.floor(Math.random() * ((products.length - 10 ) - 5) ) + 5).slice(0 , 4).map((ele)=> <div className="col-lg-3 col-md-4 col-6" key={ele._id}><ProductItem product={{...ele}}/></div>)}                  
               </div>
            </div>
         </div>
      </Fragment>
   )
}
