
import Navbar from './guest/components/Navbar'
import HeroSection from './guest/components/Herosection'
import TopProducts from './guest/components/TopProducts'
import Testimonials from './guest/components/Testimonials'
import Footer from './guest/components/Footer'
import HowitWorks from './guest/components/HowitWorks'
import About from './guest/components/About'


function Guest() {
  return (
    <div> 
      <Navbar />
      <HeroSection />
      <HowitWorks />
      <TopProducts />
      <About/>
      <Testimonials />
      <Footer />
    </div>
      
  )
}

export default Guest
