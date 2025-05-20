
function Testimonials() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Testimonial Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What customers<br />say about us
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Mauris a diam maecenas sed enim.
            Egestas diam in arcu cursus euismod quis. Quam quisque id diam vel".
          </p>

          {/* Customer Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg"
              alt="Customer"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-800">Thomas Adamson</span>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-4">
            <span className="w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"></span>
            <span className="w-5 h-5 border-2 border-gray-400 rounded-full cursor-pointer"></span>
          </div>
        </div>

        {/* Right Side: Image with Yellow Border */}
        <div className="relative w-full h-auto">
          {/* Yellow Border Frame (Rotated) */}
          <div className="absolute inset-0 transform rotate-3  rounded-[2rem] z-0"></div>

          {/* Actual Image */}
          <img
            src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png"
            alt="Customer using phone"
            className="relative z-10 rounded-[2rem] w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials ;
