import { ShoppingCart, Star } from "lucide-react";

const Product = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-3xs bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src="https://placehold.co/600x400/cccccc/ffffff?text=Product+Image"
          alt="Product Image"
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found";
          }}
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {"Product Title"}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{"Product Description"}</p>

          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-gray-700 font-medium">{"4.5"}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">${"5"}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
