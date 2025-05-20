import React from "react";

const restaurants = [
  {
    name: "The Wilmington",
    logo: "https://i.imgur.com/u8Lnpw2.png", // Ganti dengan URL logo sesuai
    categories: ["american", "steakhouse", "seafood"],
    description:
      "Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.",
  },
  {
    name: "Kennington Lane Cafe",
    logo: "https://i.imgur.com/9S8jY1J.png",
    categories: ["american", "steakhouse", "seafood"],
    description:
      "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.",
  },
  {
    name: "Kings Arms",
    logo: "https://i.imgur.com/g0zZ2vu.png",
    categories: ["healthy", "steakhouse", "vegetarian"],
    description:
      "Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Sed adipiscing diam donec adipiscing tristique.",
  },
];

export default function BestRestaurants() {
  return (
    <section className="px-6 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">
          12 Best Restaurants <br /> in Your City
        </h2>
        <p className="text-gray-500 text-lg">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {restaurants.map((resto, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex gap-5 items-start"
          >
            <img
              src={resto.logo}
              alt={resto.name}
              className="w-16 h-16 rounded-lg object-contain bg-gray-800 p-2"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{resto.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {resto.categories.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-yellow-600 border border-yellow-500 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">{resto.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="border border-yellow-500 text-yellow-600 px-6 py-2 rounded-full hover:bg-yellow-50">
          SEE ALL
        </button>
      </div>
    </section>
  );
}
