import React from "react";

const FilterSidebar = ({
  filters,
  onFilterChange,
}) => {
  return (
    <aside className="w-1/4 pr-6">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="bg-white p-4 rounded shadow space-y-6">
        
        {/* Price Range */}
        <div>
          <label className="block font-medium mb-2">Price Range (₹{filters.price})</label>
          <input
            type="range"
            min="500"
            max="3000"
            value={filters.price}
            onChange={(e) => onFilterChange("price", e.target.value)}
            className="w-full"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-2">Rating</label>
          <div className="space-y-2 text-sm">
            {[4, 3, 2].map((rating) => (
              <label key={rating} className="block">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.rating === rating}
                  onChange={() => onFilterChange("rating", rating)}
                  className="mr-2"
                />
                {rating}★ & above
              </label>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium mb-2">Brand</label>
          <div className="space-y-2 text-sm">
            {["MICORIA", "Zudio", "W for Woman"].map((brand) => (
              <label key={brand} className="block">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={filters.brand === brand}
                  onChange={() => onFilterChange("brand", brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block font-medium mb-2">Color</label>
          <div className="space-y-2 text-sm">
            {["Red", "Blue", "Purple"].map((color) => (
              <label key={color} className="block">
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={filters.color === color}
                  onChange={() => onFilterChange("color", color)}
                  className="mr-2"
                />
                {color}
              </label>
            ))}
          </div>
        </div>

        {/* Reset */}
        <div>
          <button
            onClick={() =>
              onFilterChange("reset", null)
            }
            className="text-blue-600 hover:underline text-sm"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
