import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadPetTypes } from '../../store/petTypes';
import './PetTypePage.css';
import ProductTypes from './ProductTypes';
import DetailedProductGrid from '../DetailedProductGrid';

function PetTypePage() {
	const { petTypeId } = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state) => Object.values(state?.petTypes));
	const petType = products[0]?.pet_type?.title;

	const productTypes = [{ id: 1, title: 'Food' }];
	useEffect(() => {
		dispatch(loadPetTypes(petTypeId));
	}, [dispatch, petTypeId]);

	return (
		<>
			<ProductTypes productTypes={productTypes} products={products} petType={petType} />
			<div id='petTypePage'>
				<DetailedProductGrid products={products} />
			</div>
		</>
	);
}

export default PetTypePage;
