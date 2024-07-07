import React from 'react'
import './Deliver.css'

import { TbTruckDelivery } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";

function Deliver() {
  return (
    <div className='container'>
      <div className="deliver">
        <div className="deliver-item ten">
           <span><TbTruckDelivery /></span>
           <br /><br />
           <h3>bepul yetkazib berish</h3>
           <br />
           <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="deliver-item fivetn">
        <span><FaCoins /></span>
        <br /><br />
        <h3>bepul yetkazib berish</h3>
        <br />
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="deliver-item fourtn">
        <span><IoChatbubbles /></span>
        <br /><br />
        <h3>bepul yetkazib berish</h3>
        <br />
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="deliver-item nine">
        <span><FaAward /></span>
        <br /><br />
        <h3>bepul yetkazib berish</h3>
        <br />
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  )
}

export default Deliver