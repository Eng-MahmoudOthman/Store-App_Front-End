import React, { Fragment, useContext, useState } from 'react' ;
import { Link } from 'react-router-dom' ;
import ProductItem from '../../ProductItem/ProductItem.jsx';
import axios from 'axios';
import { useQuery } from 'react-query';


export default function AnkleWomen() {
   const[pageNumber , setPageNumber] = useState(1);
   const[sort , setSort] = useState("");


   const getProducts =  (pageNumber , sort)=>{
      return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/subCategories/ankel-women/products?sort=${sort}&page=${pageNumber}`) ;
   }
   

   const { error , data , isError , isLoading  , isFetching} = useQuery(["products" , pageNumber , sort] , ()=>getProducts(pageNumber , sort) , {
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

   const getData = (data)=>{
      setSort(data) ;
   }
	return (
		<Fragment>
			<div className="container-show-items">
				<nav aria-label="breadcrumb" className='d-flex justify-content-center align-items-center my-4 py-4 bg-body-secondary'>
					<ol className="breadcrumb    px-5 py-2 ">
                  <li className="breadcrumb-item"><Link className="text-primary mx-2" to="/">الرئيسية</Link></li>
                  <li className="breadcrumb-item"><Link className="text-primary" to="/shops">المتجر</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">شراب انكل حريمى</li>
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
							{/* <h6 className='' dir='rtl'>عرض جميع النتائج <span className='main-color fw-bold d-inline-block me-2'>{data?.data.products?.length}</span></h6> */}
							<h6 className='' dir='rtl'>  عرض 1 – 40  من أصل  <span className='main-color fw-bold d-inline-block me-2 mx-1'> {data?.data.results}</span>   نتيجة  </h6>

							{/* <h4>عرض النتيجة الوحيدة</h4> */}
						</div>
					</div>


					<div className="row justify-content-end my-5 gy-3" dir='rtl'>
						{/* {isLoading? <h1>Loading...</h1> : data?.data.products.map((ele)=> <div className="col-lg-3  col-md-4 col-6"><ProductItem product={{...ele}}/></div>)} */}
						{data?.data?.products?.map((ele)=> <div className="col-lg-3  col-md-4 col-6" key={ele._id}><ProductItem product={{...ele}}/></div>)}
					</div>
				</div>

				<div className="d-flex justify-content-center align-items-center">
					<nav aria-label="Page navigation example ">
						<ul className="pagination">
							<li className="page-item"><button className="page-link "  onClick={()=>setPageNumber((page)=>page-1)} disabled={pageNumber === 1}>Prev Page</button></li>
							<li className="page-item"><button className="page-link loading" >{isFetching ? <p className='text-danger m-0 p-0'>Loading...</p> : "" }</button></li>
							<li className="page-item"><button className="page-link"  onClick={()=>setPageNumber((page)=>page+1)} disabled={pageNumber === Math.ceil(data?.data.results / 40)}>Next Page</button></li>
						</ul>
					</nav>
				</div>
			</div>
		</Fragment>
	)
}