import React from "react";
import { useParams } from "react-router-dom";
import  "./SingleRoute.css"
import { DATA } from '../../static/Index';
function SingleRoute() {
  const param = useParams();
  const item = DATA.find((item, index) => item.id === param.id);
  console.log(item);

  return (
      <div className="contaner">

    <div className="singleroute-">
      <div className="single-">

      <img className='rasm' src={item.url[0]} width={400} alt="" />
      </div>
      <div className="singleroute">
        <h1 className='catagory'>{item.category}</h1>
        <h2 className='title'>{item.title}</h2>
        <button className='price'> {item.price}</button>
        <br />
        <button className='haridqilish'>Harid qilish</button>
       
      </div>
      </div>
    </div>
  );
}

export default SingleRoute;