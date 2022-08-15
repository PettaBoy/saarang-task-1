import React, { useState } from "react";

var Shirt1 = require('./shirt1.jpeg');
var Shirt2 = require('./shirt2.jpg');

function PurchasePage() {
    const [nums, setNums] = useState({num1: 0, num2: 0, total: 0});
    const handlenum1 = (e) => {
        setNums({...nums, num1: e.target.value, total: parseInt(e.target.value) + parseInt(nums.num2)});
    }
    const handlenum2 = (e) => {
        setNums({...nums, num2: e.target.value, total: parseInt(e.target.value) + parseInt(nums.num1)});
    }
    const logout = () => {
        window.location.href = "/";
    }
    return(
        <div className="container half">
            <h1>Purchase Page</h1>
            <img class="padding-64" src={Shirt1} />
            <img class="padding-64" src={Shirt2} width="225px" height="225px" />
            <span class="padding-64">
                <label>Size</label>
                <select name="size" id="size">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="extra-large">XL</option>
                </select>
                <label>Quantity</label>
                <input type="number" id="quantity1" name="quantity1" min="0" max="10" step="1" value={nums.num1} onChange={handlenum1}></input>
            </span>
            <span class="padding-64">
                <label>Size</label>
                <select name="size" id="size">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="extra-large">XL</option>
                </select>
                <label>Quantity</label>
                <input type="number" id="quantity2" name="quantity2" min="0" max="10" step="1" value={nums.num2} onChange={handlenum2}></input>
            </span>
            <br></br><br></br>
            <button className="button">Add to cart: <span>{nums.total}</span> items</button>
            <br></br><br></br>
            <button className="button" onClick={logout}>Logout</button>
        </div>
    )
}

export default PurchasePage;