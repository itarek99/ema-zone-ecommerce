import { getStoredCart } from '../utilities/fakedb';

const productsAndCartLoader = async () => {
  // get products
  const productsData = await fetch('products.json');
  const products = await productsData.json();
  // get cart
  const savedCart = getStoredCart();

  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      initialCart.push(addedProduct);
    }
  }

  return { products, initialCart };
};

export default productsAndCartLoader;
