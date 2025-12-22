
import React, { useContext, useEffect, useRef } from 'react'
import { CartContext } from '../../Context/CartContext.js';

export default function Order() {
   const {getLoggedOrders , order} = useContext(CartContext) ;
   const printRef = useRef();
   const handlePrint = () => {
      const printContents = printRef.current.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
   };

   // const order = {
   //    id: 101,
   //    customer: "Mahmoud Amin",
   //    status: "Delivered",
   //    date: "2025-12-20",
   //    products: [
   //       { name: "Product A", quantity: 2, price: 20 },
   //       { name: "Product B", quantity: 1, price: 15 },
   //       { name: "Product C", quantity: 3, price: 10 },
   //    ],
   //    total: 85,
   // };


   useEffect(() => {
      getLoggedOrders() ;
   }, [])

   return (
      <div className="container my-5">
         {console.log(order)
         }
         <div ref={printRef} className="card shadow">
               {/* Header */}
               <div className="card-header bg-main text-white d-flex justify-content-between align-items-center">
                  <h3 className="mb-0">Order</h3>
                  <span className={`badge ${
                     order.orderStatus === "pending" ? "bg-warning text-dark" : "bg-success"
                  }`}>
                     {order.orderStatus}
                  </span>
               </div>

               {/* Customer Info */}
               <div className="card-body">
                  <div className="row mb-4">
                     <div className="col-md-4">
                        <h6 className="text-muted">Customer</h6>
                        <p>{order.name}</p>
                     </div>
                     <div className="col-md-4">
                        <h6 className="text-muted">Date</h6>
                        <p>{order.createdAt}</p>
                     </div>
                     <div className="col-md-4 text-md-end">
                        <h6 className="text-muted">Total</h6>
                        <p className="fw-bold">${order.total_Price_After_Discount?.Total}</p>
                     </div>
                  </div>

                  {/* Products */}
                  <div className="table-responsive">
                     <table className="table table-hover align-middle">
                     <thead className="table-light">
                        <tr>
                           <th>Product</th>
                           <th>Quantity</th>
                           <th>Price</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        {order.orderItems?.map((ele , index) => (
                           <tr key={index}>
                              <td>{ele.product.name}</td>
                              <td>{ele.quantity}</td>
                              <td>${ele.product.priceAfterDiscount}</td>
                              <td>${(ele.quantity * ele.product.priceAfterDiscount)}</td>
                           </tr>
                        ))}
                     </tbody>
                     </table>
                  </div>
               </div>

               {/* Print Button */}
               <div className="card-footer text-center">
                  <button
                     className="btn bg-main"
                     onClick={handlePrint}
                  >
                     Print Order
                  </button>
               </div>
         </div>
      </div>
   );
}