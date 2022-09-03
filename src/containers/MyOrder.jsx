import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem
						indexValue = {index}
						product={product} 
						key={index} 
					/>
				))}
				</div>
				<div className="amount-order">
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotal()}€</p>
				</div>
				<button className="checkout-button">
					<a className='checkout-text' href="online-shop/#/checkout">Checkout</a>
				</button>
			
		</aside>
	);
}

export default MyOrder;
