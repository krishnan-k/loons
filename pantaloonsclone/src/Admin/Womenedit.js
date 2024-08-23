import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { IoMdCloudUpload } from "react-icons/io";
import { FaBackspace } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const Womenedit = () => {
  const { id } = useParams()
  const [productItems, setItems] = useState(
    {
      productTitle: '',
      productPrice: '',
      comparePrice: '',
      productImg: '',
      productDesc: ''
    });
  //const [file,setFile] = useState(null)
  // const handleFileChange = (e) =>{
  //   setFile(e.target.files[0]);
  // }
  useEffect(() => {
    fetch(`http://localhost:5000/women/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData();
    // const productTitle = form.productTitle.value
    // const productPrice = form.productPrice.value
    // const productImg = form.productImg.value
    // const productDesc = form.productDesc.value
    //const quantity = 1


    // if (productTitle === '' || productPrice === '' || productImg === '' || productDesc === ''){
    //   toast.error("Fill the all fields")
    //   return
    // }

    //const productObject = {productTitle,productPrice, productImg, productDesc, quantity}

    formData.append('productTitle', form.productTitle.value)
    formData.append('productPrice', form.productPrice.value)
    formData.append('comparePrice', form.comparePrice.value)
    formData.append('productDesc', form.productDesc.value)
    // formData.append('productImg', productImg)
    //formData.append('quantity', quantity)
    //formData.append('img', file)

    //check if a new image was uploaded
    if (form.img.files.length > 0) {
      formData.append("img", form.img.files[0]);//file upload
    } else {
      formData.append('productImg', form.productImg.value);//use existing img url
    }

    fetch(`http://localhost:5000/update/${id}`, {
      method: 'PATCH',
      // headers:{
      //   'Content-Type' : 'application/form-data'
      // },
      body: formData//send format object
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Product updated successfully')
        window.location.href = "/admin/womendashboard"
      })
      .catch((error) => {
        console.log('error updating product:', error);
        toast.error('failed to update food')
      })

  }
  return (
    <div className="pannel">
      <Admin />
      <div className="form-control-section">
        <form className="editdashboard" onSubmit={handleSubmit} encType="multipart/form-data">
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
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="price"
                defaultValue={productItems.productPrice}
              />
            </div>
            <div className="compare_price">
              <label value="comparePrice" className="text-capitalize">
                compare price
              </label>
              <input
                className="text-capitalize"
                type="number"
                id="comparePrice"
                name="comparePrice"
                placeholder="compare price"
                defaultValue={productItems.comparePrice}
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
              defaultValue={productItems.productImg}

            />
          </div>
          <div className="multer_img mb-3">
            <label value="img" className="text-capitalize">
              Image url
            </label>
            <input
              className="text-capitalize input-file"
              type="file"
              id="img"
              name="img"
              accept="image/*"
              // onChange={handleFileChange}
              placeholder="add your Img url here"
              defaultValue={productItems.img}

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
            <Link to="/admin/womendashboard" className="text-decoration-none">
              <button
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

export default Womenedit;
