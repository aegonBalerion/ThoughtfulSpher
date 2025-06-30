import { Button, Navbar, TextInput, DarkThemeToggle } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar fluid rounded>
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center">
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Sahand's
          </span>
          <span className="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Blog
          </span>
        </Link>
      </div>

      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle />
        <Link to="/sign-in">
          <Button color="purple" pill>
            Sign In
          </Button>
        </Link>
        {/* No Navbar.Toggle if it's not defined */}
      </div>

      <div className="hidden md:flex md:space-x-8 mt-4 md:mt-0">
        <Link to="/" className={path === "/" ? "text-blue-600" : ""}>
          Home
        </Link>
        <Link to="/about" className={path === "/about" ? "text-blue-600" : ""}>
          About
        </Link>
        <Link to="/projects" className={path === "/projects" ? "text-blue-600" : ""}>
          Projects
        </Link>
      </div>
    </Navbar>
  );
}
