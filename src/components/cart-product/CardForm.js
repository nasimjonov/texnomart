import React, { useRef, useState } from "react";
import "./CardProduct.css";
const BOT_TOKEN = "7313395949:AAFcX8Jge7n_6jXTVfeQQ18-NDiNDKmmegg";
const USER_ID = "6286461461";
const CHAT_ID = "-1002216499998";
//https://api.telegram.org/bot7313395949:AAFcX8Jge7n_6jXTVfeQQ18-NDiNDKmmegg/getUpdates
//https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=[your chat_id]&parse_mode=html
function CardForm({ data }) {
  const [fullName, setfullName] = useState("");
  const tel = useRef();
  const address = useRef();
  const message = useRef();
  const handeSumbit = (e) => {
    e.preventDefault();
 let textt = "From Malumoti %0A%0A"
    data.forEach((item) => {
      textt += ` Narxi : ${item.price}%0A%0A;`
      textt += `Soni : ${item.quantity}%0A%0A;`
      textt += `Maxsulot nomi: ${item.title}%0A%0A;`
    })
    let urls = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${textt}parse_mode=html`;
    let api = new XMLHttpRequest()
    api.open("GET",urls,true)
    api.send()
  };
  return (
    <div className="input__reg">
      <h3>Malumotlaringizni kiriting</h3>
      <form action="" onSubmit={handeSumbit}>
        <input
          onChange={(e) => setfullName(e.target.value)}
          type="text"
          placeholder="Toliq ismingizni kiriting"
        />
        <input ref={tel} type="text" placeholder="+998 00 000 00 00 " />
        <input ref={address} type="text" placeholder="Manzilingiz" />
        <input ref={message} type="text" placeholder="Habar yollash" />
        <div className="total">
          <p>Umumiy narx</p>
          <p>
            Jami : {""}
            {data.reduce(
              (sum, item, index) => sum + item.price * item.quantity,
              0
            )}
          </p>
        </div>
        <button className="btn-reg">Rasmiylashtirishga o'tish</button>
      </form>
    </div>
  );
}

export default CardForm;
