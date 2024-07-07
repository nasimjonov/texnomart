import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import "./Product.css";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { addToWishies, removeFromWishies } from "../../redux/wishiesSlice";
import { incCart } from "../../redux/cartSlice";
import { Link } from 'react-router-dom';
import { FaBalanceScaleLeft } from "react-icons/fa";

function Product({ data }) {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishes.value);
  return (
    <div className="product">
      <div className="container">
        <h2 className="product-heading">Tavsiyalar</h2>

        <div className="product-wrapper">
          {data.map((el, index) => {
            return (
              <div key={index} className="product-card">
                <span className='product-scale'><FaBalanceScaleLeft /></span>
                <div className="product-card-img-wrapper">
                  <a className="product-card-img-link" href="">
                    <Link to={`product/${el.id}`}>

                    <img className="product-card-img" src={el.url[0]} alt="" />
                    </Link>

                  </a>

                  {wishes?.some((item) => item.id === el.id) ? (
                    <div
                      onClick={() => dispatch(removeFromWishies(el))}
                      className="product-card-heart"
                    >
                      <FaHeart />
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addToWishies(el))}
                      className="product-card-heart"
                    >
                      <CiHeart />
                    </div>
                  )}
                </div>

                <div className="product-card-body">
                  <h2 className="product-card-title">{el.title}</h2>
             
                  <div className="product-card-price-wrapper">
                    <div className="product-card-price-item">
                    <h4><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></h4>

<div className="product-fa-one">
  <p>33284so'mdan/24oyga</p>
</div>
<div className="product-fa-two">
<p>49000so'm/0*0*2</p>
</div>
<h3>{el.price} so'm </h3>
                    </div>
                    <div
                      onClick={() => dispatch(incCart(el))}
                      className="product-card-price-icon"
                    >
                      <TbShoppingBagPlus />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
