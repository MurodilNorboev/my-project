import { AnimatedButton, BtnWrap, NavbarCon } from '../styles/navbar';
import UNA from '../../assets/Logo.svg';
import user from '../../assets/user.svg'
import Menus_Icon from '../Drawer/menus';
import MultiCarousel from '../Navbar/Cart/lupa';
import BasicMenu from '../Navbar/Cart/cart';
import Tajriba from '../Navbar/dropdownmenus';
import { Navlink } from '../styles/LINK';

const NavbareComponent = () => {
  return (
    <NavbarCon>
      <div className='leftCon_wrap'>

     <div className='menu_icon_wrap'>
      < Menus_Icon />
      </div>

      <Navlink to={"/"}>
      <div>
        <img className='ab' src={UNA} alt="Logo" />
      </div>
      </Navlink>

      <div className="left_menus_wrap">
          <Tajriba />
      </div>

      </div>

      <div></div>

      <div className="right_menus_wrap">
        <h5 className='h5_wrap' style={{paddingBottom:"8px",margin:"0px 0px 0px 0px"}}>(8210) 5714-7887</h5>

           <div style={{width:"30px"}}>
            <MultiCarousel />
           </div>

           <Navlink to={"/profile"}>
           <BtnWrap>
           <AnimatedButton>
           <img src={user} alt="" style={{marginBottom:"10px"}}/>
           </AnimatedButton>
           </BtnWrap>
           </Navlink>

           <Navlink to={"/cart"}>
           <BasicMenu />
           </Navlink>

      </div>
    </NavbarCon>
  );
}
export default NavbareComponent;

// import React from 'react';
// import { motion } from 'framer-motion'; // Framer Motion kutubxonasidan motion komponentini import qilamiz
// import { AnimatedButton, BtnWrap, NavbarCon } from '../styles/navbar';
// import UNA from '../../assets/Logo.svg';
// import user from '../../assets/user.svg';
// import Menus_Icon from '../Drawer/menus';
// import MultiCarousel from '../Navbar/Cart/lupa';
// import BasicMenu from '../Navbar/Cart/cart';
// import Tajriba from '../Navbar/dropdownmenus';
// import { Navlink } from '../styles/LINK';

// const NavbareComponent = () => {
//   return (
//     <NavbarCon>
//       <motion.div
//       className='motionDiv'
//         initial={{ opacity: 0, y: -50 }} 
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }} 
//       >
//         <div className='leftCon_wrap'>
//           <div className='menu_icon_wrap'>
//             <Menus_Icon />
//           </div>

//           <Navlink to={"/"}>
//             <div>
//               <img className='ab' src={UNA} alt="Logo" />
//             </div>
//           </Navlink>

//           <div className="left_menus_wrap">
//             <Tajriba />
//           </div>
//         </div>

//         <div></div>

//         <div className="right_menus_wrap">
//           <h5 className='h5_wrap' style={{ paddingBottom: "8px", margin: "0px 0px 0px 0px" }}>
//             (8210) 5714-7887
//           </h5>

//           <div style={{ width: "30px" }}>
//             <MultiCarousel />
//           </div>

//           <Navlink to={"/profile"}>
//             <BtnWrap>
//               <AnimatedButton>
//                 <img src={user} alt="" style={{ marginBottom: "10px" }} />
//               </AnimatedButton>
//             </BtnWrap>
//           </Navlink>

//           <Navlink to={"/cart"}>
//             <BasicMenu />
//           </Navlink>
//         </div>
//       </motion.div>
//     </NavbarCon>
//   );
// }

// export default NavbareComponent;
