import React from "react";
import Empty from "../../components/empty/Empty";
import wishiesImg from "../../assets/images.jpg";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";

function Wishies() {
  let wishes = useSelector((state) => state.wishes.value);

  return (
    <div>
      {!wishes.length ? (
        <Empty
          img={wishiesImg}
          title="Севимлилар рўйхати бўш"
          description="Маъқул келган махсулотларни кейинроқ кўриш ёки ҳарид қилиш учун севимлилар рўйхатига киритинг."
          link="/login"
        />
      ) : (
        <Product data={wishes} />
      )}
    </div>
  );
}

export default Wishies;
