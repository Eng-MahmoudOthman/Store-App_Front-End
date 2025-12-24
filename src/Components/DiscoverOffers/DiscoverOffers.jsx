import React, { Fragment, useState } from 'react'
import "./discoverOffers.css"
import { Link } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem.jsx'
import axios from 'axios'
import { useQuery } from 'react-query'





export default function DiscoverOffers() {
   const [countProduct , setCountProduct] = useState(Math.floor(Math.random()*5))
   const getProducts =  ()=>{
      return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/products/all`) ;
   }
   const { error , data , isError , isLoading} = useQuery("allProducts" , getProducts , {
      // cacheTime:3000 , // cash Time
      // refetchOnMount:false , // Prevent Refetch
      // staleTime:30000 , // Show Time Old Data 
      // refetchInterval:3000 , // Every  3 seconde Time Request 
      // enabled:true ,
      keepPreviousData:true
   });
   if(isLoading){
      return <h1>Loading...</h1>
   }
   if(isError){
      return <h2>{error.message}</h2>
   }

   return (
      <Fragment>
         <div className="container_discoverOffers">
            <div>
               <nav aria-label="breadcrumb ">
                  <ol className="breadcrumb bg-body-secondary  px-5 py-2 justify-content-center">
                     <li className="breadcrumb-item"><Link className="text-primary mx-2" to="/">الرئيسية</Link></li>
                     <li className="breadcrumb-item"><Link className="text-primary" to="/first_Page">المتجر</Link></li>
                     <li className="breadcrumb-item active" aria-current="page">عروض اليوم</li>
                  </ol>
               </nav>
            </div>

            <div className="container">
               <div className="row justify-content-between align-items-center my-5 mx-2">
                  <div className="col-6 col-md-3"><h1 className='main-color'>عروض اليوم</h1></div>
                  <div className="col-6 col-md-9">
                     <h6 className='' dir='rtl'>عرض جميع النتائج <span className='main-color fw-bold d-inline-block me-2'>{data?.data.products.slice(countProduct , countProduct + 16).length}</span></h6>
                  </div>
               </div>

               <div className="row justify-content-end my-5 gy-3">
                  {data?.data.products.slice(countProduct , countProduct + 16).map((ele)=> <div className="col-lg-3  col-md-4 col-6"><ProductItem product={{...ele}}/></div>)}
               </div>

            </div>
         </div>
      </Fragment>
   )
}


