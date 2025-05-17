import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded" />
      <h4 className="text-sm text-gray-600 mt-2">{product.brand}</h4>
      <p className="font-medium text-sm">{product.title}</p>
      <div className="text-sm mt-1">
        <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs">
          {product.rating}★ | {product.reviews}
        </span>
      </div>
      <div className="mt-2 text-sm">
        <span className="font-semibold text-lg text-gray-800">₹{product.price}</span>
        <span className="line-through ml-2 text-gray-500">₹{product.originalPrice}</span>
        <span className="text-green-600 ml-2">{product.discount}</span>
      </div>
      <p className="text-green-600 text-sm mt-1">Offer Price: ₹{product.offerPrice}</p>
    </div>
  );
};

export default ProductCard;
