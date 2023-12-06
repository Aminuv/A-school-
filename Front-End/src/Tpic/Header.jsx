import {FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md" >
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3"  >
        <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-400">A+</span>
          <span className="text-slate-700">School</span>
        </h1>
        </Link>
        <form className="bg-slate-200 p-3 rounded-lg flex items-center">
          <input type="text" placeholder="Search..."
          className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-500"/>
        </form>
        <ul className="flex gap-5">
        <Link to="/">
          <li className="hidden sm:inline text-slate-800 hover:underline">Home</li>
        </Link>
        <Link to="/about">
          <li className="hidden sm:inline text-slate-800 hover:underline">About</li>
        </Link>
        <Link to="/sign-in">
          <li className="  text-slate-800 hover:underline">Sign In</li>
        </Link>
        </ul>
      </div>
    </header>
  )
}
