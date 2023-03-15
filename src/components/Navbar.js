import React from "react";

function Navbar({routerHandler}) {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <h1 style={{color: '#fff'}}><b>Redux Cart</b></h1>

        <div className="flex gap-4">
          <button onClick={()=> routerHandler('home')} className="navHome" id="lws-home">
            Home
          </button>
          <button onClick={()=> routerHandler('cart')} className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
