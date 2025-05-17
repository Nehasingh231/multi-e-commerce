import React, { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/Product";

const WomensWear = () => {
  const [filters, setFilters] = useState({
    price: 3000,
    rating: null,
    brand: null,
    color: null,
  });

  const handleFilterChange = (type, value) => {
    if (type === "reset") {
      setFilters({
        price: 3000,
        rating: null,
        brand: null,
        color: null,
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [type]: type === "price" ? Number(value) : value,
      }));
    }
  };

  const filteredProducts = products.filter((p) => {
    return (
      p.price <= filters.price &&
      (!filters.rating || p.rating >= filters.rating) &&
      (!filters.brand || p.brand === filters.brand) &&
      (!filters.color || p.color === filters.color)
    );
  });

  return (
    <div className="flex max-w-[1400px] mx-auto px-4 py-8">
      <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
      <main className="w-3/4">
        <h1 className="text-2xl font-bold mb-6">Women's Wear</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default WomensWear;
