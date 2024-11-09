import React, { Fragment, useContext } from 'react' ;
import { Link } from 'react-router-dom' ;
import ProductItem from '../../ProductItem/ProductItem.jsx';
import { ProductContext } from '../../../Context/ProductContext.js';


export default function AnkleWomen() {
   const {products} = useContext(ProductContext) ;


   const getData = (data)=>{
      console.log(data);
   }

   return (
      <Fragment>
         <div className="container_ankleWomen">
            <nav aria-label="breadcrumb" className='d-flex justify-content-center align-items-center my-4 py-4 bg-body-secondary'>
               <ol className="breadcrumb    px-5 py-2 ">
                  <li className="breadcrumb-item"><Link className="text-primary" to="/">الرئيسية</Link></li>
                  <li className="breadcrumb-item"><Link className="text-primary" to="/shops">المتجر</Link></li>
                  <li className="breadcrumb-item"><Link className="text-primary" to="/men-Socks">حريمي</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">شراب انكل حريمي</li>
               </ol>
            </nav>

            <div className="container">

               {/* <div className="alertOffers bg-body-secondary">
                  <p className='m-0 p-1' dir='rtl'> لا توجد منتجات تتوافق مع اختيارك .</p>
               </div> */}

               <div className="row justify-content-between align-items-center my-5 mx-2">
                  <div className="col-6 col-md-3">
                     <form action="" dir='rtl'>
                        <input onChange={(e)=>getData(e.target.value)} className="form-control border-start-0 border-end-0 border-top-0 rounded-0" list="datalistOptions" id="exampleDataList" placeholder="الترتيب الافتراضي" />
                        <datalist id="datalistOptions">
                           <option selected>الترتيب الافتراضي</option>
                           <option value="ترتيب حسب الشهرة">ترتيب حسب الشهرة</option>
                           <option value="ترتيب حسب معدل التقييم">ترتيب حسب معدل التقييم</option>
                           <option value="ترتيب حسب الأحدث">ترتيب حسب الأحدث</option>
                           <option value="ترتيب حسب: الأدنى سعراً للأعلى">ترتيب حسب: الأدنى سعراً للأعلى</option>
                           <option value="ترتيب حسب: الأعلى سعراً للأدنى">ترتيب حسب: الأعلى سعراً للأدنى</option>
                        </datalist>
                     </form>
                  </div>

                  <div className="col-6 col-md-9">
                     <h6 className='' dir='rtl'>عرض جميع النتائج <span className='main-color fw-bold d-inline-block me-2'>{products.length}</span></h6>
                     {/* <h4>عرض النتيجة الوحيدة</h4> */}
                  </div>
               </div>


               <div className="row justify-content-end my-5 gy-3">
                  {products.map((ele)=> <div className="col-lg-3  col-md-4 col-6"><ProductItem product={{...ele}}/></div>)}
               </div>

            </div>
         </div>
      </Fragment>
   )
}
