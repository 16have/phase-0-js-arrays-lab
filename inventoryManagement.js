// Write your code here
// Initialize the products array
const products = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Monitor"
];

// Log the first product
function logFirstProduct() {
  console.log(products[0]);
}
function addProduct(product) {
  products.push(product);
  return products;
}
addProduct("Keyboard");

function updateProductName(index, newName) {
    products[index] = newName; 
    return products;
}

const updated = updateProductName(1, "Tablet");
console.log(updated);

function removeLastProduct() {  products.pop();
  return products;
}
const removed = removeLastProduct();
console.log(removed); 
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
