import React from "react";
  import { Link } from "react-router-dom";
import Admin from "./Admin";
import { FaBackspace } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Womenadd = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const productTitle = form.productTitle.value
    const productPrice = form.productPrice.value
    const productImg = form.productImg.value
    const productDesc = form.productDesc.value
    const quantity = 1

    if(productTitle ==="" || productPrice === "" || productImg === "" || productDesc === ""){
      toast.error("Fill the all fields");
      return
    }

    const productObject ={productTitle, productPrice, productImg, productDesc, quantity}
    console.log(productObject);

    fetch("http://localhost:5000/women",{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(productObject)
    })
    .then((res) => res.json())
    .then((data) =>{
      toast.success('Product added successfully')
      form.reset();
    })
  }
  return (
    <div className="pannel">
      <Admin />
      <div className="form-control-section">
        <form className="editdashboard" onSubmit={handleSubmit}>
          <div className="form_title mb-3">
            <label value="productTitle" className="text-capitalize">
              Title
            </label>
            <input
              className="text-capitalize"
              type="text"
              id="productTitle"
              name="productTitle"
              placeholder="add your title here" 
            />
          </div>
          <div className="form_price mb-3">
            <div className="original_price">
              <label value="productPrice" className="text-capitalize">
                price
              </label>
              <input
                className="text-capitalize"
                type="text"
                id="productPrice"
                name="productPrice"
                placeholder="price"
                
              />
            </div>
            <div className="compare_price">
              <label className="text-capitalize">
                compare price
              </label>
              <input
                className="text-capitalize"
                type="text"
                id="price"
                name="price"
                placeholder="compare price"
        
              />
            </div>
          </div>
          <div className="form_image mb-3">
            <label value="productImg" className="text-capitalize">
              Image url
            </label>
            <input
              className="text-capitalize"
              type="text"
              id="productImg"
              name="productImg"
              placeholder="add your Img url here"
              
            />
          </div>
          <div className="form_description mb-3">
            <label value="productDesc" className="text-capitalize">
              Description
            </label>
            <textarea
              className="text-capitalize"
              id="productDesc"
              name="productDesc"
              placeholder="enter your description"
              
            ></textarea>
          </div>
          <div className="editable-buttons">
            <Link to="/admin/womendashboard" className="text-decoration-none">
              <button
                id="back-button"
                className="text-capitalize back-button shine-effect"
                type="button"
              >
                <FaBackspace />
                back
              </button>
            </Link>
              <button
                id="upload"
                className="text-capitalize upload-button shine-effect"
                type="submit"
                
              >
              <IoMdCloudUpload /> upload
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Womenadd;
