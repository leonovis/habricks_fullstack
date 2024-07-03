import { Link } from "react-router-dom"
import HBlogo from '../images/HBlogo.png'

export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="h-8 w-8">
            <img s rc={HBlogo} alt="logo" />
            </div>
            <span className='text-white-500 ml-3 text-xl font-semibold'>HABRICKS</span>
            <span className='text-slate-800 ml-3 text-xl font-semibold'></span>
          </div>
          <nav className="flex space-x-6 items-center justify-between flex-row">
            <Link className="hover:text-gray-300 mb-2 sm:mb-0" to={'/'}>
              Home
            </Link>
            <Link className="hover:text-gray-300 mb-2 sm:mb-0" to={'/about'}>
              About
            </Link>
            <Link className="hover:text-gray-300 mb-2 sm:mb-0" href="#">
              Contact
            </Link>
            <Link className="hover:text-gray-300 mb-2 sm:mb-0" target="_blank" rel="noopener noreferrer" to="https://firebasestorage.googleapis.com/v0/b/habricks-fullstack.appspot.com/o/HABRICKS%20NIG%20PROFILE.pdf?alt=media&token=31f9afe1-9c6d-44ae-817a-b77f44214ebd">
              Company Profile
            </Link>
          </nav>
          <div className="flex space-x-4 justify-center mt-4">
          <Link aria-label="LinkedIn" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/company/habricks-nigeria-limited?trk=similar-pages">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link aria-label="Instagram" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/habricks_nig/">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">© Copyright 2024, Habricks Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}