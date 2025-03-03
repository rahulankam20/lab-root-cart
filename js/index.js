// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  return subtotal;
}


function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  
  products.forEach(product => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').textContent = total.toFixed(2);
}


// ITERATION 4

function removeProduct(event) {
  const productRow = event.currentTarget.closest('.product');
  productRow.remove();
  calculateAll();
}

document.querySelectorAll('.btn-remove').forEach(button => {
  button.addEventListener('click', removeProduct);
});



// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product input[type="text"]').value;
  const price = parseFloat(document.querySelector('.create-product input[type="number"]').value).toFixed(2);

  if (!name || price <= 0) return; // Ensure valid input

  const table = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  table.appendChild(newRow);
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
}
document.getElementById('create').addEventListener('click', createProduct);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  document.getElementById('create').addEventListener('click', createProduct);
});
