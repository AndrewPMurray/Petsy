import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProducts } from '../../store/products';
import DetailedProductGrid from '../DetailedProductGrid';
// import ProductCard from '../DetailedProductGrid/ProductCard';
import './SearchResults.css';

function SearchResults() {
	const { searchInput } = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state) => Object.values(state?.products));

	const results = products.filter((product) => {
		return (
			product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
			product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
			product.details.join().toLowerCase().includes(searchInput.toLowerCase())
		);
	});

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return (
		<>
			<DetailedProductGrid products={results} />
		</>
	);
}

export default SearchResults;
