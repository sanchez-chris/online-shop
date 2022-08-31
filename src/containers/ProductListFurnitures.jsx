import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/categories/3/products';

const ProductListFurnitures = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductListFurnitures;