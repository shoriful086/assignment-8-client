"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Card from "@/components/ui/Card/Card";
import { TProductCard } from "@/types/productCard.type";
import { useRouter } from "next/navigation";

const priceRanges = [
  { label: "$0 - $50", value: "0-50", min: 0, max: 50 },
  { label: "$50 - $100", value: "50-100", min: 50, max: 100 },
  { label: "$100 - $200", value: "100-200", min: 100, max: 200 },
  { label: "$200 - $500", value: "200-500", min: 200, max: 500 },
  { label: "$500 - $1500", value: "500-1500", min: 500, max: 1500 },
];

const categories = [
  { label: "Dish Shop", value: "Dish Shop" },
  { label: "Dish Scouring Pads", value: "Dish Scouring Pads" },
  { label: "Dishwasher Detergent", value: "Dishwasher Detergent" },
  {
    label: "Dishwasher Rinse Aids",
    value: "Dishwasher Rinse Aids",
  },
  { label: "Dishwasher Detergent", value: "Dishwasher Detergent" },
  { label: "Built-In Dishwashers", value: "Built-In Dishwashers" },
];

type ProductFilterProps = {
  products: TProductCard[];
};

const FilterProduct = ({ products }: ProductFilterProps) => {
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<TProductCard[]>(products);

  useEffect(() => {
    filterProducts();
  }, [selectedPrices, selectedCategories, products]);

  const handlePriceChange = (value: string) => {
    setSelectedPrices((prevSelectedPrices) =>
      prevSelectedPrices.includes(value)
        ? prevSelectedPrices.filter((price) => price !== value)
        : [...prevSelectedPrices, value]
    );
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(value)
        ? prevSelectedCategories.filter((category) => category !== value)
        : [...prevSelectedCategories, value]
    );
  };

  const filterProducts = () => {
    let updatedItems = products;

    if (selectedPrices.length > 0) {
      updatedItems = updatedItems.filter((product: TProductCard) => {
        const productPrice = product.price;
        return selectedPrices.some((priceRange) => {
          const range = priceRanges.find((range) => range.value === priceRange);
          return (
            range && productPrice >= range.min && productPrice <= range.max
          );
        });
      });
    }

    if (selectedCategories.length > 0) {
      updatedItems = updatedItems.filter((product: TProductCard) =>
        selectedCategories.includes(product.category)
      );
    }

    setFilteredProducts(updatedItems);

    // Update the URL with query parameters
    // const query: any = {};
    // if (selectedPrices.length > 0) query.prices = selectedPrices.join(",");
    // if (selectedCategories.length > 0)
    //   query.categories = selectedCategories.join(",");
    // router.push({
    //   pathname: "/",
    //   query: query,
    // });
  };

  return (
    <div className="grid grid-cols-12 gap-4 mt-10">
      {/* Sidebar */}
      <aside className="col-span-12 lg:col-span-3 bg-gray-100 p-4">
        <h1 className="text-xl font-bold mb-4">Price Range</h1>
        {priceRanges.map((range) => (
          <div key={range.value} className="mb-2">
            <input
              type="checkbox"
              id={range.value}
              value={range.value}
              onChange={() => handlePriceChange(range.value)}
              className="mr-2"
            />
            <label htmlFor={range.value}>{range.label}</label>
          </div>
        ))}
        <h1 className="text-xl font-bold mb-4">Categories</h1>
        {categories.map((category) => (
          <div key={category.value} className="mb-2">
            <input
              type="checkbox"
              id={category.value}
              value={category.value}
              onChange={() => handleCategoryChange(category.value)}
              className="mr-2"
            />
            <label htmlFor={category.value}>{category.label}</label>
          </div>
        ))}
      </aside>

      {/* Product Grid */}
      <main className="col-span-12 lg:col-span-9 p-4">
        <h1 className="text-2xl font-medium mb-6 p-4 lg:p-0">
          Our Collection Of Products
        </h1>
        {filteredProducts.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 lg:p-0">
            {filteredProducts.map((product: TProductCard) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="p-4 lg:p-0">No Product Found</p>
        )}
      </main>
    </div>
  );
};

export default FilterProduct;
