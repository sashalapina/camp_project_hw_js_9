export function addItemToCart(document, button, cart) {
  let count = 0

  button.addEventListener('click', () => {
    count++

    cart.innerHTML =
      '<h2 class="order-cart-title" id="order-cart-title"></h2><div class="order-cart-block flex"><p class="order-cart-item-name" id="order-cart-item-name"></p><span class="order-cart-item-sale-price" id="order-cart-item-sale-price"></span><span class="order-cart-item-count" id="order-cart-item-count"></span><span class="order-cart-subtotal" id="order-cart-subtotal"></span></div><span class="order-cart-total" id="order-cart-total"></span>'
    document.getElementById('order-cart').style.backgroundColor = '#FFFFFF'
    document.getElementById('order-cart-title').textContent = 'Total:'
    document.getElementById('order-cart-item-name').textContent = document.getElementById('title-main').textContent
    document.getElementById('order-cart-item-sale-price').textContent =
      document.getElementById('sell-sale-price').textContent
    document.getElementById('order-cart-item-count').textContent = count.toString()
    document.getElementById('order-cart-subtotal').textContent = (
      count * parseFloat(document.getElementById('sell-sale-price').textContent.trim().slice(1))
    )
      .toFixed(2)
      .toString()
    document.getElementById('order-cart-total').textContent = `$${(
      count * parseFloat(document.getElementById('sell-sale-price').textContent.trim().slice(1))
    ).toFixed(2)}`
  })
}
