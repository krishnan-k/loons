import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { IoMdCloudUpload } from "react-icons/io";
import { FaBackspace } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const Kidsedit = () => {
  const {id} = useParams();
  const [productItems, setProductItems] = useState({
    productTitle:'',
    productPrice:'',
    productImg:'',
    productDesc:''
  },[])

  useEffect(()=>{
    fetch(`http://localhost:5000/kids/${id}`)
    .then((res) => res.json())
    .then((data) => setProductItems(data))
  })
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target
    const productTitle = form.productTitle.value
    const productPrice = form.productPrice.value
    const productImg = form.productImg.value
    const productDesc = form.productDesc.value
    const quantity = 1

    const productObject = {productTitle,productPrice,productImg,productDesc,quantity}
    
    fetch(`http://localhost:5000/kidsupdate/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(productObject)
    })
    .then((res) => res.json())
    .then((data) =>{
      toast.success('Product updated successfully')
      window.location.href="/admin/kidsdashboard"
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
              defaultValue={productItems.productTitle}
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
                defaultValue={productItems.productPrice}
              />
            </div>
            <div className="compare_price">
              <label className="text-capitalize" >
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
            <label value="productImg" className="text-capitalize" >
              Image url
            </label>
            <input
              className="text-capitalize"
              type="text"
              id="productImg"
              name="productImg"
              placeholder="add your Img url here"
              defaultValue={productItems.productImg}
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
              defaultValue={productItems.productDesc}
            ></textarea>
          </div>
          <div className="editable-buttons">
            <Link to="/admin/kidsdashboard" className="text-decoration-none">
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
              className="text-capitalize upload-button shine-effect"
              type="submit"
            >
              <IoMdCloudUpload /> upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kidsedit;
