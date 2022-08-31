import React from "react";
import "../styles/MenuMobile.scss";

const MenuMobile = () => {
  return (
    <div class="mobile-menu">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/online-shop/all">All</a>
        </li>
        <li>
          <a href="/online-shop/clothes">Clothes</a>
        </li>
        <li>
          <a href="/online-shop/electronics">Electronics</a>
        </li>
        <li>
          <a href="/online-shop/furnitures">Furnitures</a>
        </li>
        <li>
          <a href="/online-shop/shoes">Shoes</a>
        </li>
        <li>
          <a href="/online-shop/others">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/online-shop/account">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/online-shop/login" class="login">
            Login
          </a>
        </li>
        <li>
          <a href="/online-shop/create-account" class="create-account">
            Create Account
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;