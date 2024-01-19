import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../../redux/actions/productActions';
import './productList.scss';
const ProductList = () => {
  const products = useSelector((state) => state);
  const AllProducts = products.allProducts.products;
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => console.log(err));

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(products, '  ', AllProducts);

  return (
    <div className='app__product--container'>
      {AllProducts.map((item, index) => {
        return (
          <div key={index} className='app__product--container-item'>
            <div className='image'>
              <img src={item.image} alt='image' />
            </div>
            <div className='content'>
              <p>{item.title}</p>
              <p>Rs.{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
