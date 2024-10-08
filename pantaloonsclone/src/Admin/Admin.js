import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import { FaFemale, FaHome } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { MdChildCare } from "react-icons/md";
import { GiAmpleDress } from "react-icons/gi";
const Admin = () => {
  return (
    <div className="admin_pannel_dashboard">
        <div className="admin_pannel_menu">
          <ul className="pt-5 pb-5 ps-0 pe-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-capitalize text-white">
              <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/womendashboard"
                className="nav-link text-capitalize text-white"
              >
                <FaFemale /> women
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/mendashboard"
                className="nav-link text-capitalize text-white"
              >
                <FaMale />men
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/kidsdashboard"
                className="nav-link text-capitalize text-white"
              >
              <MdChildCare />  kids
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/trendingdashboard"
                className="nav-link text-capitalize text-white"
              >
                <GiAmpleDress /> trending now
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/admin/bestsellerdashboard"
                className="nav-link text-capitalize text-white"
              >
                <GiAmpleDress /> best seller
              </Link>
            </li>
          </ul>
        </div>
        <div className="admin_pannel_details"></div>
      </div>
    // <div className="admin-main-pannel">
      
    //   {/* <div className="admin-image">
    //     <img src={adminImage} alt="admin-image" />
    //   </div> */}
    // </div>
  );
};

export default Admin;
