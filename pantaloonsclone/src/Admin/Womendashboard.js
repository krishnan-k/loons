import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import { MdAddBox, MdDeleteSweep, MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Womendashboard = () => {
  const [productItems, setProductItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [bulkItems, setBulkItems] = useState([])
  const [TotalItems, setTotalItems] = useState(false)
  const limit = 8;

  useEffect(() => {
    fetch(`http://localhost:5000/getwomen?page=${currentPage}&limit=${limit}`)
      .then(res => res.json())
      .then((data) => {
        setProductItems(data.product)
        setTotalPage(data.totalPage)
      })


  }, [currentPage]);
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
  const bulkDeleteItem = () => {
    fetch(`http://localhost:5000/bulkdelete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ids: bulkItems })
    })
      .then((req) => req.json())
      .then((data) => {
        setProductItems(previousData => previousData.filter(item => !bulkItems.includes(item._id)));
        // setBulkItems([]);
      })
  }
  const handleSelectedItem = (id) => {
    setBulkItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  const handleBulkSelectAll = () => {
    if (TotalItems) {
      setBulkItems([])
    }
    else {
      setBulkItems(productItems.map(item => item._id))
    }
    setTotalItems(!TotalItems)
  }
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((next) => Math.min(next + 1, totalPage));
  }
  return (
    <div className="pannel">
      <Admin />
      <div className="table_section">
        <div className="btn-sec">
          <div className="add-more-item"><button
            type="button"
            className="button text-capitalize add-item-button mb-3 shine-effect"
          >
            <Link className="text-decoration-none text-white" to="/admin/womenadd"><MdAddBox /> add item </Link>

          </button>

          </div>
          {bulkItems.length > 1 ?
            (<div className="bulk-delete">
              <button onClick={bulkDeleteItem} disabled={productItems.length === 0}><MdDeleteSweep />Bulk delete</button>
            </div>)
            :
            ('')
          }
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="bulk-delete text-capitalize">
                <input
                  type="checkbox"
                  onChange={handleBulkSelectAll}
                  checked={TotalItems}
                />
                Select all
              </th>
              <th className="text-capitalize">Image</th>
              <th className="text-capitalize">title</th>
              <th className="text-capitalize">price</th>
              <th className="text-capitalize">compare price</th>
              <th className="text-capitalize">edit</th>
              <th className="text-capitalize">delete</th>
            </tr>
          </thead>
          <tbody>

            {productItems.map((item) => (
              <tr key={item._id}>
                <td>
                  <input type="checkbox"
                    checked={bulkItems.includes(item._id)}
                    onChange={() => handleSelectedItem(item._id)}
                  /></td>
                <td>
                  <img src={(item.productImg.startsWith('http')) ? item.productImg : `http://localhost:5000${item.productImg}`} alt={item.productTitle} />
                </td>
                <td className="product-title">{item.productTitle}</td>
                <td>{item.productPrice}</td>
                <td>{item.comparePrice}</td>
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
                    onClick={() => deleteItem(item._id)}
                  >
                    <MdDeleteForever /> delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="loons-pagination">
          <button className="text-capitalize button-pagination" onClick={handlePreviousPage} disabled={currentPage === 1}><GrFormPrevious /></button>
          <span className="p-2">{currentPage}/{totalPage}</span>
          <button className="text-capitalize button-pagination" onClick={handleNextPage} disabled={currentPage === totalPage}><MdOutlineNavigateNext /></button>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Womendashboard;
