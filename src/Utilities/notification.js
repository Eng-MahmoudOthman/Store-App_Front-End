import toast from 'react-hot-toast';

export default function  notification(icon = 'success', message = 'Successfully Completed ✅'){
   toast[icon](message , {
   position: "top-right"
});
}







// import Swal from 'sweetalert2';

// export default function  notification(icon = 'success', title = 'Successfully Completed ✅'){
//    const Toast = Swal.mixin({
//       toast: true,
//       position: "top-end",
//       showConfirmButton: false ,
//       timer: 5000,
//       timerProgressBar: true ,
//       didOpen: (toast) => {
//          toast.onmouseenter = Swal.stopTimer;
//          toast.onmouseleave = Swal.resumeTimer;
//       }
//    });


   
//    Toast.fire({
//       icon ,
//       title
//    });
// }