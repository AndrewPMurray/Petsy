import './ProductTypePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadProductTypes } from '../../store/productTypes';
import { useEffect } from 'react';
import DetailedProductGrid from '../DetailedProductGrid';

export default function ProductTypePage() {
	const dispatch = useDispatch();
	const { petTypeId, productTypeId } = useParams();
	const products = useSelector((state) => Object.values(state?.productTypes));

	useEffect(() => {
		dispatch(loadProductTypes(petTypeId, productTypeId));
	}, [dispatch]);
	return <DetailedProductGrid products={products} />;
}
