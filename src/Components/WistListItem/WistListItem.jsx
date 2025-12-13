import React , { Fragment, useContext } from 'react' ;
import "./wistListItem.css"
import { Link } from 'react-router-dom';
import { WishListContext } from '../../Context/WishListContext.js';


export default function WistListItem({item}) {
   // const [ alert , setAlert] = useState(false) ;
   const {updateWishList} = useContext(WishListContext) ;


   const removeItemFromWishList = (id)=>{
      updateWishList(id);
   }
   
   return (
      <Fragment>
         
         {/* <div>
            {alert ? <p className=' alert alert-danger text-center p-0 m-0 rounded-0'>أنتبه !!  لا يوجد مخزون أكثر من ذلك لهذا المنتج </p> : ""}
         </div> */}

         <Link to={`/productDetails/${item.slug}`} className='text-black'>
            <div className="wishList-item position-relative" >
               <div className='inner-cart-item d-flex justify-content-between align-items-center border-0 m-2 mx-4'>
                  
                  <div className="image-wishList">
                     <img src={item?.imgCover.secure_url} alt="image" className=' w-100' />
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
