import React from "react";

function HowitWorks () {
  return (
    <section className="py-20 bg-white text-center px-6">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {/* STEP 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-1.png"
            alt="Select Restaurant"
            className="w-32 h-auto mb-6"
          />
          <h3 className="text-gray-300 text-2xl font-bold">01 <span className="text-gray-800">Select Restaurant</span></h3>
          <p className="text-gray-500 mt-4 max-w-xs">
            Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-2.png"
            alt="Select Menu"
            className="w-32 h-auto mb-6"
          />
          <h3 className="text-gray-300 text-2xl font-bold">02 <span className="text-gray-800">Select Menu</span></h3>
          <p className="text-gray-500 mt-4 max-w-xs">
            Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/illustration-3.png"
            alt="Wait for Delivery"
            className="w-32 h-auto mb-6"
          />
          <h3 className="text-gray-300 text-2xl font-bold">03 <span className="text-gray-800">Wait for Delivery</span></h3>
          <p className="text-gray-500 mt-4 max-w-xs">
            Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowitWorks ;
