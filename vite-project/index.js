import { setMainColor } from './js_modules/setMainColor.js'
import { addItemToCart } from './js_modules/addItemToCart.js'

const byButton = document.getElementById('sell-btn')
const orderCart = document.getElementById('order-cart')

setMainColor(document)
addItemToCart(document, byButton, orderCart)
