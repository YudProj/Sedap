import productsData from '/src/assets/TopProducts.json';

function TopProducts() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">12 Best Restaurants in Your City</h2>
        <p className="text-gray-500 mb-8 max-w-xl">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-xl shadow-md">
              <img src={product.image} alt={product.name} className="w-auto rounded mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {product.categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-sm text-green-500 border border-green-300 px-2 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="text-green-500 border border-green-300 px-6 py-2 rounded-full text-sm hover:bg-green-50 transition">
            SEE ALL
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
