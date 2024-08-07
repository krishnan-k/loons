import React from "react";
import { Link } from "react-router-dom";
import Admin from "./Admin";
import { FaBackspace } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
const Kidsadd = () => {
  return (
    <div className="pannel">
      <Admin />
      <div className="form-control-section">
        <form className="editdashboard">
          <div className="form_title mb-3">
            <label className="text-capitalize" for="title">
              Title
            </label>
            <input
              className="text-capitalize"
              type="text"
              id="title"
              name="title"
              placeholder="add your title here"
            />
          </div>
          <div className="form_price mb-3">
            <div className="original_price">
              <label className="text-capitalize" for="price">
                price
              </label>
              <input
                className="text-capitalize"
                type="text"
                id="price"
                name="price"
                placeholder="price"
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
            <label className="text-capitalize" for="image">
              Image url
            </label>
            <input
              className="text-capitalize"
              type="text"
              id="image"
              name="image"
              placeholder="add your Img url here"
            />
          </div>
          <div className="form_description mb-3">
            <label className="text-capitalize" for="image">
              Description
            </label>
            <textarea
              className="text-capitalize"
              id="title_description"
              placeholder="enter your description"
            ></textarea>
          </div>
          <div className="editable-buttons">
            <Link to="/admin/kidsdashboard" className="text-decoration-none">
              <button
                id="back-button"
                className="text-capitalize back-button shine-effect"
                type="submit"
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
    </div>
  );
};

export default Kidsadd;
