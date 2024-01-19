import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeProduct,
} from '../../redux/actions/productActions';
import axios from 'axios';
import './productDetail.scss';

const ProductDetails = () => {
  const { productId } = useParams();
  const ProductDetail = useSelector((state) => state.selectedProducts);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId) fetchData();
    return () => dispatch(removeProduct());
  }, [productId]);

  console.log(ProductDetail);
  return Object.keys(ProductDetail).length === 0 ? (
    <div>Loading....</div>
  ) : (
    <div className='app__productDetail'>
      <img src={ProductDetail.image} height={200} width={200} alt='' />
      <div>
        <h3>
          {ProductDetail.category && ProductDetail.category.toUpperCase()}
        </h3>
        <p>{ProductDetail.description}</p>
        <p>$ {ProductDetail.price}</p>
        <p>{ProductDetail.title}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
