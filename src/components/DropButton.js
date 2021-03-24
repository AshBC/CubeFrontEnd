import React from 'react';
import {Link} from "react-router-dom";



function DropDown () {
let selectRef= null;
function changeLocation() {
  window.location.href=selectRef.value;
}
  return(
    <div>
  <select ref={self => selectRef=self} name="artworks" className="art-select" onChange={changeLocation}>
   <option value="">Artworks</option>
    {/* <option value="/toBuy">OpenSea</option> */}
    <option value="/createWallet">Crypto Wallet</option>
    <option value="/buySR">SuperRare</option>
    <option value="/trending">Trending</option>
  </select>
  </div>
  )
};
export default DropDown;