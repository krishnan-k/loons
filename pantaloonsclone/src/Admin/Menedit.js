import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { IoMdCloudUpload } from "react-icons/io";
import { FaBackspace } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Menedit = () => {
  const {id} = useParams()
  const [productItems, setItems] = useState({
    productTitle: '',
    productPrice:'',
    productImg:'',
    productDesc:''
  })
  useEffect(()=>{
    fetch(`http://localhost:5000/men/${id}`)
    .then((res) => res.json())
    .then((data) => setItems(data))
  })
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const form = e.target
    const productTitle = form.productTitle.value
    const productPrice = form.productPrice.value
    const productImg = form.productImg.value
    const productDesc = form.productDesc.value

    if(productTitle==='' || productPrice==='' || productImg==='' || productDesc===''){
      toast.error("Fill the all fields")
      return
    }

    const productObject = {productTitle,productPrice, productImg, productDesc}
    console.log(productObject);
    fetch(`http://localhost:5000/menupdate/${id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(productObject)
    })
    .then((res) => res.json())
    .then((data) => {
      window.location.href="/admin/mendashboard"
      toast.success('Product updated successfully')
    })

  }
  return (
    <div className="pannel">
      <Admin />
      <div className="form-control-section">
        <form className="editdashboard" onSubmit={handleSubmit}>
          <div className="form_title mb-3">
            <label value="productTitle" className="text-capitalize">Title</label>
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
              <label className="text-capitalize" for="price">
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
          <label value="productImg" className="text-capitalize" for="image">Image url</label>
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
          <label value="productDesc" className="text-capitalize" for="image">Description</label>
            <textarea
            className="text-capitalize"
              id="productDesc"
              name="productDesc"
              placeholder="enter your description"
              defaultValue={productItems.productDesc}
            ></textarea>
          </div>
          <div className="editable-buttons">
            <Link to="/admin/mendashboard" className="text-decoration-none">
            <button id="back-button" className="text-capitalize back-button shine-effect" type="button"> <FaBackspace />back</button></Link>            
            <button className="text-capitalize upload-button shine-effect" type="submit"> <IoMdCloudUpload /> upload</button>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Menedit;
