import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../component-css/cardcollectionnew.css";
import bestSellerProducts from "../collection-products/Bestsellerproducts";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../store/Cartslice";
const Bestseller = () => {
  const product = useSelector(state =>
    state.cart.cartItems
  )
  const dispatch = useDispatch();
  const addCart = (item) =>{
    dispatch(addToCart(item))
  }
  const deleteFromCart = (item) =>{
    dispatch(deleteCart(item))
  }
  return (
    <div className="card_collection_one card_trend mt-4 mb-4 pt-2 pb-2">
      <div className="Card_Swiper_Carousel_One container">
        <div className="card_heading mb-4 pb-2">
          <h4 className="mb-0">Bestseller</h4>
        </div>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
        >
          {bestSellerProducts.map((item) => (
            <SwiperSlide>
              <div class="card card-product border-0 p-0" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt="image" />
                  <div className="add-to-cart-button">  
                    {product.find(items => items.id === item.id)
                    ? <div className="add">
                      <Link to="cart" className="view-cart text-center text-decoration-none text-white text-capitalize">view cart</Link>
                    <div className="delete-cart text-center text-white text-capitalize" onClick={()=> deleteFromCart(item) }>delete cart <MdDeleteForever/></div> </div>   :
                    <div className="add-to-cart text-center text-decoration-none text-white text-capitalize" onClick={() => addCart(item)}>add to cart</div>
                    } 
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title text-uppercase mb-1">{item.title}</h5>
                  <p class="card-text mb-1">{item.description}</p>
                  <p className="product_price mb-0">₹{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bestseller;
