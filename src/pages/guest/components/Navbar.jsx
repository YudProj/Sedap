function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow">
      {/* Kiri: Logo + Menu */}
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span id="logo-title" className="font-poppins text-[28px] text-gray-900">
                Sedap <b id="logo-dot" className="text-hijau">.</b>
            </span>
          <h1 className="text-xl font-bold text-green-500"></h1>
        </div>

        {/* Menu */}
        <div className="flex space-x-6 text-gray-800 font-medium">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#about" className="hover:text-green-500">Tentang Kami</a>
          <a href="#produk" className="hover:text-green-500">Produk</a>
          <a href="#testimoni" className="hover:text-green-500">Testimoni</a>
        </div>
      </div>

      {/* Kanan: Tombol Cek Member */}
      <a
        href="/guest/cek-member"
        className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition"
      >
        Cek Member
      </a>
    </nav>
  );
}

export default Navbar;
