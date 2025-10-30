import { ShoppingCart, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import Swal from "sweetalert2";

const Product = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Check if item already exists in cart
    const existingItem = cart.find((item) => item.id === product.id);
    
    if (existingItem) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This item is already in your cart.",
        icon: "info",
        confirmButtonText: "OK",
      });
    } else {
      dispatch(addToCart(product));
      Swal.fire({
        title: "Added to Cart!",
        text: `${product.title} has been added to your cart.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="container mx-auto py-20 p-4">
      {products.length === 0 ? (
        <h2 className="text-2xl font-bold text-center">
          No Products Available
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-gray-700 font-medium">
                    {product.rating}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
