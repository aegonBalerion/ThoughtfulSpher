import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  TextInput,
  DropdownItem,
  DropdownDivider,
  DropdownHeader
} from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  return (
    <Navbar className='border-b-2'>
      {/* Logo and Site Name */}
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sahand's
        </span>
        Blog
      </Link>

      {/* Search bar for large screens */}
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          icon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      {/* Search button for small screens */}
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      {/* Right-side buttons and user menu */}
      <div className='flex gap-2 md:order-2'>
        {/* Theme Toggle */}
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        {/* User Dropdown or Sign In */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </DropdownHeader>

            <Link to='/dashboard?tab=profile'>
              <DropdownItem>Profile</DropdownItem>
            </Link>

            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button color='purple' outline>
              Sign In
            </Button>
          </Link>
        )}

        {/* Navbar toggle button for mobile */}
        <NavbarToggle />
      </div>

      {/* Collapsible navigation links */}
      <NavbarCollapse>
        <NavbarLink active={path === '/'} as='div'>
          <Link to='/'>Home</Link>
        </NavbarLink>
        <NavbarLink active={path === '/about'} as='div'>
          <Link to='/about'>About</Link>
        </NavbarLink>
        <NavbarLink active={path === '/projects'} as='div'>
          <Link to='/projects'>Projects</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
