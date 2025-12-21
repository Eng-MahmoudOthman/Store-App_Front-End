import React, { Fragment } from 'react'


export default function Contact() {
   return (
      <Fragment>
         <div className='container'>
            <section className="container py-5" dir="rtl" style={{ textAlign: 'right' }}>
               <h1 className="fw-bold mb-4 text-center main-color">من نحن</h1>
               <div className="card shadow-sm border-0 rounded-4">
               <div className="card-body">
                  <p className="text-secondary lh-lg">
                     نحن متجر إلكتروني نسعى لتقديم أفضل المنتجات بأعلى جودة وأسعار تنافسية،
                     مع الالتزام بتوفير تجربة تسوق سهلة وآمنة لعملائنا.
                  </p>
                  <p className="text-secondary lh-lg">
                     نؤمن بأن رضا العميل هو أساس نجاحنا، لذلك نحرص على اختيار منتجاتنا بعناية
                     والتعامل بشفافية ومصداقية في جميع مراحل الشراء.
                  </p>
                  <p className="text-secondary lh-lg mb-0">
                     هدفنا هو بناء علاقة طويلة الأمد مع عملائنا قائمة على الثقة والجودة
                     وخدمة ما بعد البيع.
                  </p>
               </div>
               </div>
            </section>

            <section className="container py-5" dir="rtl" style={{ textAlign: 'right' }}>
               <h1 className="fw-bold mb-4 text-center main-color">تواصل معنا</h1>
               <div className="row g-4">
               <div className="col-md-6">
                  <div className="card shadow-sm border-0 rounded-4 h-100">
                     <div className="card-body">
                     <h5 className="mb-3">بيانات التواصل</h5>
                     <p className="text-secondary mb-2">الهاتف: 01126999142</p>
                     <p className="text-secondary mb-2">البريد الإلكتروني: mahmoud.osman440@gmail.com</p>
                     <p className="text-secondary mb-0">العنوان: القاهرة، مصر</p>
                     </div>
                  </div>
               </div>

               <div className="col-md-6">
                  <div className="card shadow-sm border-0 rounded-4 h-100">
                     <div className="card-body">
                     <h5 className="mb-3 main-color"> أرسل رسالة</h5>
                     <form>
                        <div className="mb-3">
                           <label className="form-label">الاسم</label>
                           <input type="text" className="form-control" placeholder="اكتب اسمك" />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">البريد الإلكتروني</label>
                           <input type="email" className="form-control" placeholder="example@email.com" />
                        </div>
                        <div className="mb-3">
                           <label className="form-label">الرسالة</label>
                           <textarea className="form-control" rows="4" placeholder="اكتب رسالتك هنا"></textarea>
                        </div>
                        <button type="submit" className="btn main-btn  w-100">
                           إرسال
                        </button>
                     </form>
                     </div>
                  </div>
               </div>
               </div>
            </section>

         </div>
      </Fragment>
   )
}

