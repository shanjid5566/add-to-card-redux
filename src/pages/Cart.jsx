import React from "react";
// Import lucide-react icons
import { Plus, Minus, Trash2, ShoppingBag, CreditCard } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/features/cart/cartSlice";

/**
 * Order Summary Component
 */
function OrderSummary({ items, onIncrease, onDecrease, onRemove }) {
  // Calculate totals
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = items.length > 0 ? 10.0 : 0; // Shipping fee jodi item thake
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

      {/* Item List */}
      <div className="space-y-6">
        {items.length === 0 ? (
          <div className="text-center py-10">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto" />
            <p className="mt-4 text-lg text-gray-500">
                Your cart is currently empty.
            </p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-200 pb-4"
            >
              {/* Item Details */}
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-3 md:space-x-4">
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 border rounded-lg p-1">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="p-1 rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    disabled={item.quantity === 1}
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="font-medium w-8 text-center text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>

                {/* Item Total Price */}
                <span className="text-lg font-medium text-gray-900 w-20 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

                {/* Remove Button */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Totals Section */}
      {items.length > 0 && (
        <>
          <div className="border-t border-gray-200 mt-6 pt-6 space-y-3">
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-gray-900">
                ${shipping.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-2xl font-bold text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg shadow-md text-lg font-bold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Checkout</span>
          </button>
        </>
      )}
    </div>
  );
}

/**
 * Main App component
 */
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const dispatch = useDispatch();

  // Quantity baranor function
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  // Quantity komano function
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  // Item remove korar function
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-12 flex justify-center items-start">
      <div className="container mx-auto max-w-2xl">
        <OrderSummary
          items={cart}
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
          onRemove={handleRemoveItem}
        />
      </div>
    </div>
  );
}
