import React, { useState } from "react";

import "./Dashboard.css";

import AddProduct from "./AddProduct/AddProduct";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import MyOrder from "../MyOrder/MyOrder";
import useAuth from "../../hooks/useAuth";
import Pay from "../Pay/Pay";
import AddReviews from "../AddReview/AddReviews";
import AddServices from "../AddServices/AddServices";
import AllOrders from "../AllOrders/AllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Welcome from "../Welcome/Welcome";

// import AddEvents from "./../../AddEvents/AddEvents";

const Dashboard = () => {
    const [control, setControl] = useState("welcome");

    const {user,admin} = useAuth();

  console.log(control);
  return (
    <div className="container-fluid">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 dash_menu ">
              <div className="admin-area p-1">
                <h3 className="my-5 d-title">Dashboard</h3>
                <div className="all-menu mt-5">
                  <ul>
                  {admin &&<li
                    onClick={() => setControl("addProduct")}
                    className="admin-menu p-2"
                  >
                    Add Product
                  </li>}
                  {admin &&<li
                    onClick={() => setControl("allorders")}
                    className="admin-menu p-2"
                  >
                    Manage Orders
                  </li>}
                  {admin &&<li
                    onClick={() => setControl("manageproduct")}
                    className="admin-menu p-2"
                  >
                    Manage Products
                  </li>}
                  {user?.email && !admin &&  <li
                    onClick={() => setControl("myorder")}
                    className="admin-menu p-2"
                  >
                    My Order
                  </li>}
                  {user?.email && !admin && <li
                    onClick={() => setControl("addreviews")}
                    className="admin-menu p-2"
                  >
                    Add Reviews
                  </li>}
                  {user?.email && !admin && <li
                    onClick={() => setControl("pay")}
                    className="admin-menu p-2"
                  >
                    Pay
                  </li>}
                  {admin &&<li
                    onClick={() => setControl("makeAdmin")}
                    className="admin-menu p-2"
                  >
                    Make Admin
                  </li>}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              {control === "addProduct" && <AddServices></AddServices>}
              {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
              {control === "myorder" && <MyOrder></MyOrder>}
              {control === "pay" && <Pay></Pay>}
              {control === "addreviews" && <AddReviews></AddReviews>}
              {control === "allorders" && <AllOrders></AllOrders>}
              {control === "manageproduct" && <ManageProducts></ManageProducts>}
              {control === "welcome" && <Welcome></Welcome>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;