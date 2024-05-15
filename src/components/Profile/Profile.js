// import React, { useState } from 'react';
// import { Dropdown, DropdownButton, Image } from 'react-bootstrap';

// const Profile = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleClose = () => setShowDropdown(false);
//   const handleShow = () => setShowDropdown(true);

//   return (
//     <div onMouseEnter={handleShow} onMouseLeave={handleClose}>
//       <Image src="user-profile-picture.jpg" alt="user profile" roundedCircle />
//       {showDropdown && (
//         <Dropdown>
//           <DropdownButton
//             variant="link"
//             onClick={handleClose}
//             title="Username"
//           >
//             <Dropdown.Item href="#myCourses">My Courses</Dropdown.Item>
//             <Dropdown.Item href="#myWishlist">My Wishlist</Dropdown.Item>
//             <Dropdown.Item href="#myMessages">My Messages</Dropdown.Item>
//             <Dropdown.Item href="#purchaseHistory">Purchase History</Dropdown.Item>
//             <Dropdown.Item href="#userProfile">User Profile</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#logout">Log Out</Dropdown.Item>
//           </DropdownButton>
//         </Dropdown>
//       )}
//     </div>
//   );
// export default Profile;









// import {React,useState} from "react";
// import { Image, Dropdown, ButtonGroup } from "react-bootstrap";
// import "./profile.css";
// import AbeerHosni from "../../Assets/AbeerHosni.jpg"
// // import "../NavBar/NavBar.css"

// const Profile = () => {
//     const [isHovered, setIsHovered] = useState(false);
  
//     const handleHover = () => {
//       setIsHovered(true);
//     };
  
//     const handleLeave = () => {
//       setIsHovered(false);
//     };
  
//     return (
//       <div className="profile-container">
//         <Image
//           src={AbeerHosni}
//           roundedCircle
//           className="profile-picture"
//         //   onMouseEnter={handleHover}
//         //   onMouseLeave={handleLeave}
//         />
  
//         {/* {isHovered && ( */}
//           <Dropdown as={ButtonGroup} className="profile-options" show>
//             <Dropdown.Item href="/my-courses">My Courses</Dropdown.Item>
//             <Dropdown.Item href="/my-wishlist">My Wishlist</Dropdown.Item>
//             <Dropdown.Item href="/my-messages">My Messages</Dropdown.Item>
//             <Dropdown.Item href="/log-out">Log Out</Dropdown.Item>
//           </Dropdown>
//          {/* )
//         } */}
//       </div>
//     );
//   };
// export default Profile;


import React, { useState } from "react";
import { Image, Dropdown, ButtonGroup } from "react-bootstrap";
import "./profile.css";
import AbeerHosni from "../../Assets/AbeerHosni.jpg";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className="profile-container d-block">
      <Image
        src={AbeerHosni}
        roundedCircle
        className="profile-picture"
        onClick={handleToggle} // Use onClick for better accessibility
      />

      {isOpen && (
        <Dropdown as={ButtonGroup} className="profile-options d-block">
          <Dropdown.Item href="/my-courses">My Courses</Dropdown.Item>
          <Dropdown.Item href="/my-wishlist">My Wishlist</Dropdown.Item>
          <Dropdown.Item href="/my-messages">My Messages</Dropdown.Item>
          <Dropdown.Item href="/log-out">Log Out</Dropdown.Item>
        </Dropdown>
      )}
    </div>
  );
};

export default Profile;



