import { Link } from 'react-router-dom'
import portFolioIcn from '../assests/portfolio.png'
import my_logo from '../assests/meraj_logo.jpg'

const Footer = () => {
  return (
    <div>
        

<footer className="bg-[#6941c6] lg:h-[23vh]  shadow ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="https://merajulhasanlatestportfolio.netlify.app/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={my_logo} className="h-14 w-28 rounded-lg" alt=" Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
            </Link>
            <ul className="flex gap-3 flex-wrap items-center mb-6 text-sm font-medium text-[#fff] sm:mb-0 ">
                <li>
                    <Link to="https://www.linkedin.com/in/h-m-merajul-hasan-62687b23a/" target='_blank' className="hover:underline me-4 md:me-6"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' className='w-7 h-7' alt=''/></Link>
                </li>
                <li>
                    <Link to="https://github.com/HNMerajulhasan" target='_blank' className="hover:underline me-4 md:me-6"><img src='https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-512.png' className='w-7 h-7' alt=''/></Link>
                </li>
                <li>
                    <Link to="https://www.facebook.com/merajoulehasan.utsho" target='_blank' className="hover:underline me-4 md:me-6"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/2048px-Facebook_F_icon.svg.png' className='w-7 h-7' alt=''/></Link>
                </li>
                <li>
                    <Link to="https://merajulhasanlatestportfolio.netlify.app/" target='_blank' className="hover:underline"><img src={portFolioIcn} className='w-7 h-7 mb-5' alt=''/></Link>
                </li>
            </ul>
        </div>
        <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-lg  sm:text-center text-sky-400">© 2023 Designed & Developed By<Link to="https://merajulhasanlatestportfolio.netlify.app/" className="hover:underline text-sky-300 text-[18px] font-bold"> H.M Merajul Hasan</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer