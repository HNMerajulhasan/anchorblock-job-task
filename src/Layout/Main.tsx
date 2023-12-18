import Navbar from '../nabvar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main