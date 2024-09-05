import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../store/Cartslice";
import { Link } from 'react-router-dom';
import flashImage from "../image/flash.svg";
const Search = () => {
    const [productItems, setProductItems] = useState([]);
    const [searchInput, setSearchInputs] = useState('');
    const product = useSelector(state =>
        state.cart.cartItems
    );

    const dispatch = useDispatch();
    const addCart = (item) => {
        dispatch(addToCart(item));
    }
    const deleteFromCart = (item) => {
        dispatch(deleteCart(item));
    }
    useEffect(() => {
        fetch(`http://localhost:5000/getwomen`)
            .then(res => res.json())
            .then((data) => {
                setProductItems(data.product)
            })
    }, []);
    const filterItems = Array.isArray(productItems) ?
        productItems.filter(item => item.productTitle.toLowerCase().includes(searchInput.toLocaleLowerCase()))
        : [];

    const searchProducts = filterItems.map(item => (
        <div className="card col-3 border-0 card-product" key={item._id}>
            <div className="product-image">
                <Link to={`/women/${item._id}`}>
                    <img src={(item.productImg.startsWith('http')) ? item.productImg : `http://localhost:5000${item.productImg}`} alt={item.productTitle} />
                </Link>
                <div className="add-to-cart-button">
                    {product.find(items => items._id === item._id)
                        ? <div className="add">
                            <Link to="/cart" className="view-cart text-center text-decoration-none text-white text-capitalize">view cart</Link>
                            <div className="delete-cart text-center text-white text-capitalize" onClick={() => deleteFromCart(item)}>delete cart <MdDeleteForever /></div> </div> :
                        <div className="add-to-cart text-center text-decoration-none text-white text-capitalize shine-effect" onClick={() => addCart(item)}>add to cart</div>
                    }
                </div>
            </div>
            <div class="card-body p-0 pt-3 pb-3 mb-3">
                <div className="offer-tag">
                    <div className="offer-percentage ">
                        <span className="offer-text text-uppercase">{item.comparePrice > 0 ?
                            (((item.comparePrice - item.productPrice) / (item.comparePrice)) * 100).toFixed()
                            :
                            ('0')
                        }
                            %off</span>
                    </div>
                    <div className="flash">
                        <img src={flashImage} alt="flash-image" />
                        <span className="flash-text text-capitalize ms-1 me-1">
                            flash deal
                        </span>
                    </div>
                </div>
                <h5 class="card-title text-uppercase mb-1">{item.productTitle}</h5>
                <p class="card-text mb-1">{item.productDesc}</p>
                <p className="product_price mb-0">
                    ₹{item.productPrice}
                    <span className="product_price text-decoration-line-through text-black-50 fw-bolder">
                        ₹{item.comparePrice}
                    </span>
                </p>
            </div>
        </div>
    ))
    return (
        <div className='container pt-4 pb-4 mt-4'>
            <form class="d-flex search-section" role="search">
                <input class="form-control me-2"
                    type="search" placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInputs(e.target.value)}
                />
                {/* <button class="search-button" type="submit">Search</button> */}
            </form>
            <div className='search-product-section row pt-4 mt-4'>
                {searchProducts}
            </div>
        </div>
    )
}

export default Search;
