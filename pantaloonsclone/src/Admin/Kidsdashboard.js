import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { MdAddBox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Kidsdashboard = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getkids")
      .then((res) => res.json())
      .then((data) => setProductItems(data));
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/kidsupdate/${id}`,{
      method: 'DELETE',
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then((req) => req.json())
    .then((data) => {
      toast.error("Delete Successfully");
      setProductItems(previousData => previousData.filter(item => item._id !== id));
    })
  };
  return (
    <div className="pannel">
      <Admin />
      <div className="table_section">
        <div className="add-more-item">
          <button
            type="button"
            className="button text-capitalize add-item-button mb-3 shine-effect"
          >
            <Link
              className="text-decoration-none text-white"
              to="/admin/kidsadd"
            >
              <MdAddBox /> add item
            </Link>
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-capitalize">Image</th>
              <th className="text-capitalize">title</th>
              <th className="text-capitalize">price</th>
              <th className="text-capitalize">edit</th>
              <th className="text-capitalize">delete</th>
            </tr>
          </thead>
          <tbody>
            {productItems.map((item) => (
              <tr key={item._id}>
                <td scope="row"><img src={item.productImg}/></td>
                <td>{item.productTitle}</td>
                <td>{item.productPrice}</td>
                <th>
                  <Link to={`/admin/kidsedit/${item._id}`} className="text-decoration-none">
                    <button
                      type="button"
                      className="button text-capitalize edit-button shine-effect"
                    >
                      <MdEdit /> edit
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    type="button"
                    className="button text-capitalize delete-button shine-effect"
                    onClick={() => deleteItem(item._id)}
                  >
                    <MdDeleteForever /> delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Kidsdashboard;
