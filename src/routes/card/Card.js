import React from "react";
import Empty from "../../components/empty/Empty";
import shopCard from "../../assets/images.jpg";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cart-product/CardProduct";

function Card() {
  const carts = useSelector((state) => state.carts.value);

  return (
    <div>
       {carts.length ? (
        <CartProduct data={carts} />
      ) : (
        <Empty
          img={shopCard}
          title="Саватчада хозирда
ҳеч нима йўқ"
          description="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
          link="
Харид қилиш"
        />
      )} 
    </div>
  );
}

export default Card;
