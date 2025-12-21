import React, { Fragment } from 'react'




export default function ShippingPolicy() {
   return (
      <Fragment>
         <section className="container py-5" dir="rtl" style={{ textAlign: 'right' }}>
            <h1 className="text-center fw-bold mb-4 main-color">سياسة الشحن والاستبدال والاسترجاع</h1>
            <p className="text-center text-muted mb-5">
               تم وضع هذه السياسات لتنظيم عملية الشراء والشحن والاستبدال والاسترجاع، وذلك
               حفاظًا على حقوق كلٍ من العميل والمتجر، ولضمان تجربة تسوق آمنة وواضحة.
            </p>

            {/* Shipping Policy */}
            <div className="card shadow-sm border-0 rounded-4 mb-5">
               <div className="card-body">
                  <h3 className="mb-3 main-color"> أولًا: سياسة الشحن</h3>
                  <p className="text-secondary">
                     يلتزم المتجر بشحن الطلبات في أسرع وقت ممكن بعد تأكيد الطلب، مع الحرص على
                     تغليف المنتجات بشكل آمن لضمان وصولها بحالة سليمة.
                  </p>
                  <ul className="text-secondary lh-lg">
                     <li>يتم تأكيد الطلبات عبر الهاتف أو البريد الإلكتروني قبل الشحن.</li>
                     <li>مدة تجهيز الطلب من <strong>1 إلى 3 أيام عمل</strong> من تاريخ التأكيد.</li>
                     <li>مدة الشحن المتوقعة من <strong>2 إلى 5 أيام عمل</strong> وقد تختلف حسب المحافظة.</li>
                     <li>قد تتأثر مواعيد الشحن خلال المواسم والأعياد والعروض الخاصة.</li>
                     <li>يتم احتساب تكلفة الشحن حسب موقع العميل ونوع الطلب.</li>
                     <li>المتجر غير مسؤول عن أي تأخير ناتج عن شركات الشحن الخارجة عن إرادته.</li>
                     <li>في حال إدخال عنوان أو رقم هاتف غير صحيح، يتحمل العميل مسؤولية التأخير.</li>
                  </ul>
               </div>
            </div>

            {/* Exchange Policy */}
            <div className="card shadow-sm border-0 rounded-4 mb-5">
               <div className="card-body">
                  <h3 className="mb-3 main-color"> ثانيًا: سياسة الاستبدال</h3>
                  <p className="text-secondary">
                     يتيح المتجر خدمة الاستبدال في حال رغب العميل بتغيير المنتج، وفق الشروط
                     الموضحة أدناه.
                  </p>
                  <ul className="text-secondary lh-lg">
                     <li>الاستبدال متاح خلال <strong>14 يومًا</strong> من تاريخ الاستلام.</li>
                     <li>يشترط أن يكون المنتج غير مستخدم وبحالته الأصلية.</li>
                     <li>يجب أن يكون المنتج في عبوته الأصلية مع جميع الملحقات.</li>
                     <li>يتحمل العميل تكاليف الشحن الخاصة بعملية الاستبدال.</li>
                     <li>في حال وجود خطأ من المتجر، يتحمل المتجر كامل تكاليف الشحن.</li>
                     <li>بعض المنتجات قد لا تخضع للاستبدال لأسباب صحية أو قانونية.</li>
                  </ul>
               </div>
            </div>

            {/* Return Policy */}
            <div className="card shadow-sm border-0 rounded-4 mb-5">
               <div className="card-body">
                  <h3 className="mb-3 main-color"> ثالثًا: سياسة الاسترجاع</h3>
                  <p className="text-secondary">
                     في حال عدم رضا العميل عن المنتج، يمكنه طلب الاسترجاع وفقًا للشروط
                     التالية.
                  </p>
                  <ul className="text-secondary lh-lg">
                     <li>طلب الاسترجاع خلال <strong>14 يومًا</strong> من تاريخ الاستلام.</li>
                     <li>إرجاع المنتج بنفس حالته الأصلية دون أي تلف أو استخدام.</li>
                     <li>إرفاق فاتورة الشراء أو رقم الطلب.</li>
                     <li>لا يتم استرجاع المنتجات المستخدمة أو التالفة بسوء استخدام.</li>
                     <li>يتم فحص المنتج قبل الموافقة النهائية على الاسترجاع.</li>
                     <li>يتم رد المبلغ خلال <strong>3 إلى 7 أيام عمل</strong> بعد الموافقة.</li>
                  </ul>
               </div>
            </div>

            {/* Refund Policy */}
            <div className="card shadow-sm border-0 rounded-4 mb-5">
               <div className="card-body">
                  <h3 className="mb-3 main-color"> رابعًا: سياسة استرداد المبالغ</h3>
                  <ul className="text-secondary lh-lg">
                     <li>يتم رد المبالغ بنفس وسيلة الدفع المستخدمة.</li>
                     <li>قد يستغرق ظهور المبلغ في حساب العميل عدة أيام حسب البنك.</li>
                     <li>لا تشمل عملية الاسترداد رسوم الشحن إلا في حال وجود خطأ من المتجر.</li>
                     <li>يحق للمتجر خصم أي تكاليف ناتجة عن تلف المنتج.</li>
                  </ul>
               </div>
            </div>

            {/* Final Notes */}
            <div className="alert alert-light shadow-sm rounded-4">
               <h5 className="mb-3 main-color"> ملاحظات وشروط عامة</h5>
               <ul className="mb-0 text-secondary lh-lg">
                  <li>يحتفظ المتجر بحقه في تعديل هذه السياسات في أي وقت.</li>
                  <li>إتمام الطلب يعني موافقة العميل على جميع الشروط.</li>
                  <li>يتم التعامل مع بيانات العملاء بسرية تامة.</li>
                  <li>للاستفسارات، يرجى التواصل مع خدمة العملاء.</li>
               </ul>
            </div>
         </section>
      </Fragment>
   )
}
