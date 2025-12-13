import React , { Fragment, useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext.js';
import CartItem from '../CartItem/CartItem.jsx';
import './Cart.css'
import Loading from '../Loading/Loading.jsx';
import { useState } from 'react';






export default function Cart() {

   const {cart , display , setDisplay , loading} = useContext(CartContext) ;
	const[discount , setDiscount] = useState(false) ;
	const[delivery , setDelivery] = useState(false) ;


	useEffect(() => {
		if(cart.total_Price_After_Discount?.Total > 1000 && cart.total_Price_After_Discount?.Total < 5000){
			setDelivery(true)
		}else if(cart.total_Price_After_Discount?.Total > 5000 ){
			setDiscount(true)
		}
	}, [])

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
										<h6 className='text-start fw-bold m-0 p-0' dir='rtl'>{cart.total_Price_After_Discount?.total_before_discount},00 جنيه </h6>
										{cart.total_Price_After_Discount.delivery?<h6 className='text-start fw-bold m-0 p-0 text-success' dir='rtl'>مجانا</h6>:<h6 className='text-start fw-bold m-0 p-0 text-danger' dir='rtl'>60,00 جنيه </h6>}
										{cart.total_Price_After_Discount.discount? <h6 className='text-start fw-bold m-0 p-0 text-success' dir='rtl'>200,00 جنيه </h6> : ""}
										{cart.total_Price_After_Discount?.discount_Amount? <h6 className='text-start fw-bold m-0 p-0 text-success' dir='rtl'>{cart.coupon_id.code}</h6> : ""}
										{cart.total_Price_After_Discount?.discount_Amount? <h6 className='text-start fw-bold m-0 p-0 text-success' dir='rtl'>{cart.total_Price_After_Discount?.discount_Amount},00 جنيه  </h6> : ""}
										<h6 className='text-start fw-bold m-0 p-0' dir='rtl'>{cart.total_Price_After_Discount.delivery ? cart.total_Price_After_Discount?.Total +",00" : cart.total_Price_After_Discount?.Total + 60 +",00"}  جنيه </h6>
										{/* <h6 className='text-start fw-bold m-0 p-0' dir='rtl'>{cart.total_Price_After_Discount?.Total? cart.total_Price_After_Discount?.Total + 60 +",00" : cart.total_Price_After_Discount?.Total}  جنيه </h6> */}
									</div>

									<div className=''>
										<h6 className='text-end fw-bold m-0 p-0'>المجموع</h6>
										<h6 className='text-end fw-bold m-0 p-0 text-danger '>الشحن</h6>
										{cart.total_Price_After_Discount.discount?<h6 className='text-end fw-bold m-0 p-0 text-success '>الخصم لزيادة قيمة الطلب عن 5000</h6>:""}
										{cart.total_Price_After_Discount?.discount_Amount? <h6 className='text-end fw-bold m-0 p-0 text-success '>الكوبون</h6>:""}
										{cart.total_Price_After_Discount?.discount_Amount? <h6 className='text-end fw-bold m-0 p-0 text-success '>قيمة خصم الكوبون</h6>:""}
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

