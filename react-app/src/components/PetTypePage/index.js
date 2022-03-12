import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { loadPetTypes } from '../../store/petTypes';
import { loadProductTypes } from '../../store/productTypes';
import './PetTypePage.css';
import ProductTypes from './ProductTypes';
import DetailedProductGrid from '../DetailedProductGrid';

function PetTypePage() {
	const { petTypeId } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const products = useSelector((state) => Object.values(state.petTypes));
	const petType = products[0]?.pet_type?.title;
	const productTypes = useSelector((state) => state.productTypes.types);

	useEffect(() => {
		dispatch(loadPetTypes(petTypeId)).then((res) => {
			if (res.indexOf(+petTypeId) === -1) history.push('/not-found');
		});
		dispatch(loadProductTypes());
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
