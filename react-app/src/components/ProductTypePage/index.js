import './ProductTypePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { loadProductTypesByPet } from '../../store/productTypes';
import { useEffect } from 'react';
import DetailedProductGrid from '../DetailedProductGrid';

export default function ProductTypePage() {
	const dispatch = useDispatch();
	const { petTypeId, productTypeId } = useParams();
	const products = useSelector((state) => Object.values(state?.productTypes));
	const history = useHistory();

	useEffect(() => {
		dispatch(loadProductTypesByPet(petTypeId, productTypeId)).then((res) => {
			if (res.length === 0) history.push('/not-found');
		});
	}, [dispatch, petTypeId, productTypeId]);

	return (
		<>
			<div id='product-type-header'>
				<div id='main-titles'>
					<div id='pet-type-title'>
						{products[0].pet_type?.title} {products[0].product_type?.title}
					</div>
				</div>
			</div>
			<div id='product-type-page'>
				<DetailedProductGrid products={products} />
			</div>
		</>
	);
}
