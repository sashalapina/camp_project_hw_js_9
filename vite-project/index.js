// import { setMainColor } from './js_modules/setMainColor.js'
import { addItemToCart } from './js_modules/addItemToCart.js'
import { setMainColorBtn } from './js_modules/setMainColor.js'

const byButton = document.getElementById('sell-btn')
const orderCart = document.getElementById('order-cart')
const colorSwitchBtn1 = document.getElementById('color-btn-1')
const colorSwitchBtn2 = document.getElementById('color-btn-2')
const colorSwitchBtn3 = document.getElementById('color-btn-3')

// setMainColor(document)
setMainColorBtn(document, colorSwitchBtn1, colorSwitchBtn2, colorSwitchBtn3)
addItemToCart(document, byButton, orderCart)
