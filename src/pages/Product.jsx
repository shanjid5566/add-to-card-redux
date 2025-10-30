import { ShoppingCart, Star } from "lucide-react";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="container mx-auto py-20 p-4">
      {
        products.length === 0 ? (
          <h2 className="text-2xl font-bold text-center">No Products Available</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {products.map((product) => (
              <div key={product.id} className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover"
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
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-gray-700 font-medium">{product.rating}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
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
