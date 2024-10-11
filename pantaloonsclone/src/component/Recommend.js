import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/cardcollectionnew.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../store/Cartslice";
import { Link } from "react-router-dom";
const Recommend = () => {
  const [bundleProduct, setBundle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getwomen`)
      .then(res => res.json())
      .then(data => setBundle(data.product))
  })
  const product = useSelector(state =>
    state.cart.cartItems
  );
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item))
  }
  const deleteFromCart = (item) => {
    dispatch(deleteCart(item))
  }
  return (
    <div className="card_collection_one mt-4 mb-3 pt-5 pb-2">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Styles Recommended for You</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
        >
          {bundleProduct.map((item) => (
            <SwiperSlide>
              <div class="card border-0 card-product" key={item.id}>
                <div className="product-image">
                  <img src={(item.productImg.startsWith('http')) ? item.productImg : `http://localhost:5000${item.productImg}`} alt="image" />
                  <div className="add-to-cart-button">
                    {product.find((items) => items.id === item.id) ? (
                      <div className="add">
                        <Link
                          to="/cart"
                          className="view-cart text-center text-decoration-none text-white text-capitalize"
                        >
                          view cart
                        </Link>
                        <div
                          className="delete-cart text-center text-white text-capitalize"
                          onClick={() => deleteFromCart(item)}
                        >
                          delete cart <MdDeleteForever />
                        </div>{" "}
                      </div>
                    ) : (
                      <div
                        className="add-to-cart text-center text-decoration-none text-white text-capitalize shine-effect"
                        onClick={() => addCart(item)}
                      >
                        add to cart
                      </div>
                    )}
                  </div>
                </div>
                <div class="card-body">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recommend;
