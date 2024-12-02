import React , { Fragment , useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem.jsx'
import axios from 'axios';
import { useEffect } from 'react';

export default function Offers() {
   const[pageNumber , setPageNumber] = useState(1);
	const[sort , setSort] = useState("");
	const[data , setData] = useState([]);
	const [loading , setLoading] = useState(true)
	const [message , setMessage] = useState(false)




   const getData = async(query)=>{
		setSort(query) ;
		fetchData(true)
   }



	const fetchData = async(flag) => {
		if(flag) {
			setData([])
		}
		await axios.get(`${process.env.BASE_URL}/api/v1/products/all?sort=${sort}&page=${pageNumber}`) 
		.then((response)=> {
			setData(prev => [...prev , ...response.data.products]) ;
			setLoading(false)
		})
		.catch((error)=>{
			if(error.response.data.message == "Products is Empty"){
				setMessage(true)
			}
			// console.log(error.response.data.message);
			
		})
	}


	const handleScroll = () => {
		if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
			setLoading(true)
			setPageNumber(prev => prev + 1)
		}
		
	}


	useEffect(() => {
		fetchData()
	}, [pageNumber])




	
	useEffect(() => {
		window.addEventListener("scroll" , handleScroll) ;
		return ()=> window.removeEventListener("scroll" , handleScroll); 
	}, [])

	return (
		<Fragment>
			<div className="container-show-items">
				<nav aria-label="breadcrumb" className='d-flex justify-content-center align-items-center my-4 py-4 bg-body-secondary'>
					<ol className="breadcrumb    px-5 py-2 ">
							<li className="breadcrumb-item"><Link className="text-primary mx-2" to="/">الرئيسية</Link></li>
							<li className="breadcrumb-item"><Link className="text-primary" to="/shops">المتجر</Link></li>
							<li className="breadcrumb-item active" aria-current="page">العروض</li>
					</ol>
				</nav>

				<div className="container">
					{/* <div className="alertOffers bg-body-secondary">
							<p className='m-0 p-1' dir='rtl'> لا توجد منتجات تتوافق مع اختيارك .</p>
					</div> */}

					<div className="row justify-content-evenly align-items-center my-5 mx-2">
						<div className="col-6 col-md-4">
							<form action="" dir='rtl' >
								<select onChange={(e)=>getData(e.target.value)} id="selectData">
									<option value="">الترتيب الافتراضي</option>
										<option value="-quantity">ترتيب حسب الشهرة</option>
										<option value="-rateAvg">ترتيب حسب معدل التقييم</option>
										<option value="-createdTimeAt">ترتيب حسب الأحدث</option>
										<option value="priceAfterDiscount">ترتيب حسب: الأدنى سعراً للأعلى</option>
										<option value="-priceAfterDiscount">ترتيب حسب: الأعلى سعراً للأدنى</option>
								</select>
							</form>
						</div>







						<div className="col-6 col-md-8">
							<h6 className='' dir='rtl'>عرض جميع النتائج <span className='main-color fw-bold d-inline-block me-2'>{data.length}</span></h6>
							{/* <h4>عرض النتيجة الوحيدة</h4> */}
						</div>
					</div>


					<div className="row justify-content-end my-5 gy-3" dir='rtl'>
						{data.map((ele)=> <div className="col-lg-3  col-md-4 col-6" key={ele._id} ><ProductItem  product={{...ele}}/></div>)}
						{loading && !message && <h1 className='text-center mt-5'>loading...</h1>}
						{message && <h1 className='text-center mt-5'>End Content</h1>}
					</div>
				</div>
			</div>
		</Fragment>
   )
}
