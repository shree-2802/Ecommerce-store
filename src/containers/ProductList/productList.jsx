import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setProducts } from '../../redux/actions/productActions';
import './productList.scss';
const ProductList = () => {
  const navigate = useNavigate();
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
  return (
    <div className='app__product--container'>
      {AllProducts.map((item) => {
        return (
          <div
            key={item.id}
            className='app__product--container-item'
            onClick={() => navigate(`/product/${item.id}`)}
          >
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
