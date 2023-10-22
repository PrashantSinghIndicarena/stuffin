// import React, {useState} from 'react';
// import { useEffect, } from 'react';
// import { useLocation } from 'react-router-dom';



// const ScrollToTop = () => {


//   const [pageReload, setTogglePageReload] = useState(false);

//   const toggleReload = () => {
//     setTogglePageReload(!pageReload);
//   };
//   // Extracts pathname property(key) from an object
//   const { pathname } = useLocation();
//   // let reloaded = false;
//   // Automatically scrolls to top whenever pathname changes
//   useEffect(() => {
//     if(!pageReload){
//       window.location.reload();
//       toggleReload();
//     }
     
//   }, [pathname]);
// }

// export default ScrollToTop;
