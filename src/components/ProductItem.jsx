import React, { useState, useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import addedToCartImage from '../assets/icons/bt_added_to_cart.svg';


const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);
	const [added, setAdded] = useState(false);

	const handleClick = item => {
		addToCart(item);
		setAdded(true);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={added ? addedToCartImage : addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
