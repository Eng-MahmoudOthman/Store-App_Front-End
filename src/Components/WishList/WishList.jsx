import React , { Fragment, useContext } from 'react';
import "./wishList.css"
import { WishListContext } from '../../Context/WishListContext.js';
import Loading from '../Loading/Loading.jsx';
import WistListItem from '../WistListItem/WistListItem.jsx';






export default function WishList() {

   const {wishList , displayWishList , setDisplayWishList , loading} = useContext(WishListContext) ;

	return (
		<Fragment>
			<div className='container-wishList '>
				<div className={displayWishList? 'd-none' : 'd-block'}>
					<div className="display" >
						<div className='section-wishList position-relative'>
							<div className='d-flex justify-content-between align-items-center p-2 bg-info '>
								<button className='btn btn-close' onClick={()=>setDisplayWishList(!displayWishList)}></button>
								<h6 className='p-0 m-0'> ({wishList.length})   المنتجات المفضلة </h6>
							</div>

							<div>
								{wishList?.length ? "" : <p className='text-center my-2'>! لا يوجد اى منتجات مفضلة لديك حتى الأن   </p>}
							</div>

							<div className='section-body overflow-y-auto'>
								{wishList.length?wishList.map((ele)=><div key={ele._id}><WistListItem item={ele}/></div>):""}
							</div>

							<div className='text-center mb-2'>
								<button onClick={()=>setDisplayWishList(!displayWishList)} className='btn btn-cart main-btn w-75'>إضافة منتج جديد</button>
							</div>

							{loading ? <Loading/> : ""}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

