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
          <a href="/all">All</a>
        </li>
        <li>
          <a href="/clothes">Clothes</a>
        </li>
        <li>
          <a href="/electronics">Electronics</a>
        </li>
        <li>
          <a href="/furnitures">Furnitures</a>
        </li>
        <li>
          <a href="/shoes">Shoes</a>
        </li>
        <li>
          <a href="/others">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/account">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/login" class="login">
            Login
          </a>
        </li>
        <li>
          <a href="/create-account" class="create-account">
            Create Account
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;