import React from "react";

function Navbar({routerHandler}) {
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <h1 style={{color: '#fff'}}><b>Redux Cart</b></h1>

        <div class="flex gap-4">
          <button onClick={()=> routerHandler('home')} class="navHome" id="lws-home">
            Home
          </button>
          <button onClick={()=> routerHandler('cart')} class="navCart" id="lws-cart">
            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
