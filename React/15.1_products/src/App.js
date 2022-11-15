import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/homepage';
import Products from './components/products';
import Header from './components/header';
import ProductDetails from './components/ProductDetail';
// import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      
      <Header/>
      <switch>
        <Route path="/" exact > 
            <HomePage/>
        </Route>
        <Route path="/products" exact >
            <Products/>
        </Route>
        <Route path="/products/:id" exact >
                <ProductDetails/>
        </Route>
        {/* <Route path="*"> 
            <NotFound/>
        </Route> */}


        </switch>


    </div>
  );
}

export default App;