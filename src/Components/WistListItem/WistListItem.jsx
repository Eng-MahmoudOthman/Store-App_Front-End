import React , { Fragment, useContext } from 'react' ;
import "./wistListItem.css"
import { Link } from 'react-router-dom';
import { WishListContext } from '../../Context/WishListContext.js';


export default function WistListItem({item}) {
   const {updateWishList} = useContext(WishListContext) ;


   const removeItemFromWishList = (id)=>{
      updateWishList(id);
   }
   
   return (
      <Fragment>
      
         <Link to={`/productDetails/${item.slug}`} className='text-black'>
            <div className="wishList-item position-relative" >
               <div className='inner-cart-item d-flex justify-content-between align-items-center border-0 m-2 mx-4'>
                  
                  <div className="image-wishList">
                     <img src={item?.imgCover.secure_url} alt="product" className=' w-100' />
                  </div>

                  <div>
                     <p  >{item.name}</p>
                     <h6  className='text-body-emphasis fw-bold text-end'>  {item.priceAfterDiscount} جنيه </h6>
                  </div>


                  <button onClick={()=>removeItemFromWishList(item._id)} className='btn fw-bold text-danger rounded-2 bg-body-secondary d-flex justify-content-center align-items-center'>
                     x
                  </button>

               </div>
            </div>
         </Link>

      </Fragment>
   )
}
