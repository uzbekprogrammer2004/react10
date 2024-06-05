// import { NavLink, useLocation } from 'react-router-dom'
// import './sidebar.css'
// import routes from "../../../router/routes.jsx"
// NavLink
// const Sidebar = () => {
//    const { pathname } = useLocation();
//   return (
//     <div className='sidebar'>
//         <h1>Sidebar</h1>
//         <NavLink to="/main" className="navlink" >
//               Posts
//         </NavLink>
//         <NavLink to="/main/comments" className="navlink" >
//            Comments
//         </NavLink>
//         <NavLink to="/main/albums" className="navlink" >
//            Albums
//         </NavLink>
//         <NavLink to="/main/photos" className="navlink" >
//            Photos
//         </NavLink>
//         <NavLink to="/main/todos" className="navlink" >
//            Todos
//         </NavLink>
//         <NavLink to="/main/users" className="navlink" >
//            Users
//         </NavLink>
//     </div>
//   )
// }

// export default Sidebar

// import { NavLink, useLocation } from "react-router-dom";
// import './sidebar.css'
// import routes from "../../../router/routes.jsx"
// const Index = () => {
//   const { pathname } = useLocation();
//   console.log(pathname);
//   return (
//     <header>
//       <ul className="header">
//         {routes?.map((item, index) => (
//           <li key={index} className="list-unstyled color">
//             <NavLink
//               to={item.path}
//               className={
//                 item.path === pathname
//                   ? item.active
//                   : "text-success py-2 px-4 fs-3 text-decoration-none"
//               }
//             >
//               {item.content}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </header>
//   );
// };

// export default Index;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className='sidebar'>
      <h1>Sidebar</h1>
      <NavLink to="/main" className="navlink" activeClassName={pathname === "/hjk" ? "active" : ""}>
        Posts
      </NavLink>
      <NavLink to="/main/comments" className="navlink" activeClassName={pathname === "/main/comments" ? "active" : ""}>
        Comments
      </NavLink>
      <NavLink to="/main/albums" className="navlink" activeClassName={pathname === "/main/albums" ? "active" : ""}>
        Albums
      </NavLink>
      <NavLink to="/main/photos" className="navlink" activeClassName={pathname === "/main/photos" ? "active" : ""}>
        Photos
      </NavLink>
      <NavLink to="/main/todos" className="navlink" activeClassName={pathname === "/main/todos" ? "active" : ""}>
        Todos
      </NavLink>
      <NavLink to="/main/users" className="navlink" activeClassName={pathname === "/main/users" ? "active" : ""}>
        Users
      </NavLink>
    </div>
  );
};

export default Sidebar;

