import './style.css';
import products from "./api/products.json";
import { showProductContainer } from './homeProductsCards';

//define a function names `showProductContainer` that takes takes an array of products as input.
showProductContainer(products);