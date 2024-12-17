import React , { Fragment, useContext } from 'react';
import { CartContext } from '../../Context/CartContext.js';
import CartItem from '../CartItem/CartItem.jsx';
import './Cart.css'
import Loading from '../Loading/Loading.jsx';






export default function Cart() {

   const {cart , display , setDisplay , loading} = useContext(CartContext) ;

	return (
		<Fragment>
			<div className='container-cart '>
				<div className={display? 'd-none' : 'd-block'}>
					<div className="display" >
						<div className='section-cart position-relative'>
							<div className='d-flex justify-content-between align-items-center p-2 bg-info '>
								<button className='btn btn-close' onClick={()=>setDisplay(!display)}></button>
								<h6 className='p-0 m-0'>سلة التسوق ({cart.cartItems?.length})</h6>
							</div>

							<div>
								{cart.cartItems?.length ? "" : <p className='text-center my-2'>! لا يوجد منتجات في سلة التسوق</p>}
							</div>

							<div className='section-body overflow-y-auto'>
								{cart.cartItems?.map((ele)=><div key={ele._id}><CartItem item={ele}/></div>)}
							</div>

							{cart.total_Price_After_Discount?.Total? 
								<div className='d-flex justify-content-between align-items-center px-5 border-top pt-2'>

									<div className=''>
										<h6 className='text-start fw-bold m-0 p-0' dir='rtl'>{cart.total_Price_After_Discount?.Total},00 جنيه </h6>
										<h6 className='text-start fw-bold m-0 p-0 text-danger' dir='rtl'>60,00 جنيه </h6>
										<h6 className='text-start fw-bold m-0 p-0' dir='rtl'>{cart.total_Price_After_Discount?.Total? cart.total_Price_After_Discount?.Total + 60 +",00" : cart.total_Price_After_Discount?.Total}  جنيه </h6>
									</div>
	
									<div className=''>
										<h6 className='text-end fw-bold m-0 p-0'>المجموع</h6>
										<h6 className='text-end fw-bold m-0 p-0 text-danger '>الشحن</h6>
										<h6 className='text-end fw-bold m-0 p-0'>الأجمالى</h6>
									</div>
								</div>
							: 
							<div>
								<p className='text-center text-danger'>الحد الأدنى للطلب هو 100.00 جنيه - برجاء إضافة المزيد من المنتجات للسلة</p>
							</div>
							}


							<div>
								<div className='text-center'>
									<button className='btn btn-cart main-btn w-75'>إتمام الطلب</button>
								</div>

								<div className='text-center mb-2'>
									<button onClick={()=>setDisplay(!display)} className='btn btn-more-shopping'>تابع التسوق</button>
								</div>
							</div>

							{loading ? <Loading/> : ""}
						</div>
					</div>

				</div>
			</div>
		</Fragment>
	)
}

