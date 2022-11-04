import { getStoredCart } from '../utilities/fakedb';

const productsAndCartLoader = async () => {
  // get products
  const productsData = await fetch('http://localhost:5000/products');
  const productsWithCount = await productsData.json();

  const { products, count } = productsWithCount;
  // get cart
  const savedCart = getStoredCart();

  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      initialCart.push(addedProduct);
    }
  }

  return { products, count, initialCart };
};

export default productsAndCartLoader;
