import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import DetailsProductGrid from '../DetailedProductGrid';
import { loadPetTypes } from '../../store/petTypes';
import ProductTypes from './ProductTypes';
import './PetTypePage.css'

function PetTypePage() {
    const { petTypeId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.petTypes)

    useEffect(() => {
        dispatch(loadPetTypes(petTypeId))
    }, [dispatch, petTypeId]);


    // const productsObj = useSelector((state) => state?.products);
    // const products = Object.values(productsObj);
    // console.log('*****', products)

    return (
        <div id="petTypePage">
            <ProductTypes />

        </div>
    )
};

export default PetTypePage;