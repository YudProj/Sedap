function HeroSection() {
  return (
    <section className="relative bg-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Teks dan Tombol */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            The Best <br /> Restaurants <br /> In Your Home
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <select className="px-2 py-2 border rounded-md w-full sm:w-auto">
              <option>Choose a Restaurant</option>
              <option>Restaurant 1</option>
              <option>Restaurant 2</option>
            </select>
            <a
              href="#produk"
              className="bg-green-500 text-white px-6 py-3 rounded-md shadow hover:bg-green-600 transition"
            >
              ORDER NOW
            </a>
          </div>
        </div>

        {/* Gambar Kurir */}
        <div className="relative">
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/photo-1.png"
            alt="Kurir"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-white opacity-30 z-0" />
    </section>
  );
}

export default HeroSection;
