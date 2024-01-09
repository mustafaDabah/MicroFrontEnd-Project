import {mount as mount2} from 'productsApp/products'
import { mount } from 'cartApp/cart'

console.log('container');

const el = document.querySelector("#dev-cart");
const el2 = document.querySelector("#dev-products");
mount(el)
mount2(el2)