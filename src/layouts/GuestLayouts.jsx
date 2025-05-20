import Navbar from '../pages/guest/components/Navbar'
import Footer from '../pages/guest/components/Footer'
import { Outlet } from 'react-router-dom'

function GuestLayouts({ children }) {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default GuestLayouts
