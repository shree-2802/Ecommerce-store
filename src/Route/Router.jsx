import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from '../containers/ProductList/productList';
import ProductDetails from '../containers/productDetails';
import Header from '../containers/Header/header';
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={ProductList} />
        <Route path='/product/:productId' Component={ProductDetails} />
        <Route>404 err</Route>
      </Routes>
    </Router>
  );
};
export default Routing;
