import productData from "./product.json";
import { useState } from "react";

export default function ProductList() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();

    // Filter produk berdasarkan pencarian dan tag
    const filteredProducts = productData.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(_searchTerm) ||
            product.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? product.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    // Mengambil semua tag unik dari produk
    const allTags = [...new Set(productData.flatMap((product) => product.tags))];

    return (
        <div className="p-8">
            <input
                type="text"
                name="searchTerm"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.searchTerm}
                onChange={handleChange}
                placeholder="Search products..."
            />

            <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.selectedTag}
                name="selectedTag"
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            <div className="grid grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-gray-600">Category: <span className="font-bold">{product.category}</span></p>
                        <p className="text-gray-600">Price: <span className="text-green-600 font-bold">${product.price}</span></p>
                        <p className="text-gray-600">Discount: <span className="text-red-600">{product.discountPercentage}%</span></p>
                        <p className="text-gray-600">Rating: ⭐ {product.rating}</p>
                        <p className="text-gray-600">Stock: {product.stock} units</p>
                        <p className="text-gray-600">Brand: <span className="font-bold">{product.brand}</span></p>
                        <div className="mt-2">
                            {product.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
