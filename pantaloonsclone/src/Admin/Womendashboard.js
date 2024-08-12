import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { MdAddBox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Womendashboard = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getwomen")
      .then(res => res.json())
      .then((data) => setProductItems(data))
  }, []);
  const deleteItem = (id) => {
    fetch(`http://localhost:5000/update/${id}`, {
      method: "DELETE"
    })
      .then((req) => req.json())
      .then((data) => {
        toast.error('Delete Successfully');
        setProductItems(previousData => previousData.filter(item => item._id !== id));
      })  
  }
  return (
    <div className="pannel">
      <Admin />
      <div className="table_section">
        <div className="add-more-item"><button
          type="button"
          className="button text-capitalize add-item-button mb-3 shine-effect"
        >
          <Link className="text-decoration-none text-white" to="/admin/womenadd"><MdAddBox /> add item </Link>

        </button></div>
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
          {productItems.map((item) =>(
            <tr key={item._id}>
              <td scope="row"><img src={item.productImg.startsWith('http') ? item.productImg : `http://localhost:5000${item.productImg}`} alt={item.productImg}/></td>
              <td>{item.productTitle}</td>
              <td>{item.productPrice}</td>
              <td>
                <Link to={`/admin/womenedit/${item._id}`} className="text-decoration-none"><button
                  type="button"
                  className="button text-capitalize edit-button shine-effect"
                >
                  <MdEdit /> edit
                </button></Link>
              </td>
              <td>
                <button
                  type="button"
                  className="button text-capitalize delete-button shine-effect"
                  onClick={()=> deleteItem(item._id)}
                >
                  <MdDeleteForever /> delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer autoClose={1000}/>
    </div>
  );
};

export default Womendashboard;
