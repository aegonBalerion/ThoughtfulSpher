// import { Button, Navbar, TextInput, DarkThemeToggle } from 'flowbite-react';
// import { Link, useLocation } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';

// export default function Header() {
//   const path = useLocation().pathname;

//   return (
//     <Navbar fluid className="border-b-2 shadow-sm px-4">
//       {/* Left: Brand */}
//       <Link to="/" className="flex items-center">
//         <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold">
//           ThoughtfulSphere's
//         </span>
//         <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
//           Blog🌎
//         </span>
//       </Link>

//       {/* Middle: Search */}
//       <form className="flex-1 justify-center hidden lg:flex px-6">
//         <TextInput
//           type="text"
//           placeholder="Search..."
//           rightIcon={AiOutlineSearch}
//           className="w-96"
//         />
//       </form>

//       {/* Right: Nav links, theme toggle, button */}
//       <div className="flex items-center gap-4">
//         {/* Nav Links */}
//         <div className="hidden md:flex gap-6 text-sm font-medium">
//           <Link
//             to="/"
//             className={`${
//               path === '/' ? 'text-cyan-700' : 'text-gray-700'
//             } hover:underline`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`${
//               path === '/about' ? 'text-cyan-700' : 'text-gray-700'
//             } hover:underline`}
//           >
//             About
//           </Link>
//           <Link
//             to="/projects"
//             className={`${
//               path === '/projects' ? 'text-cyan-700' : 'text-gray-700'
//             } hover:underline`}
//           >
//             Projects
//           </Link>
//         </div>

//         {/* Theme toggle */}
//         <DarkThemeToggle />

//         {/* Sign in button with gradient border */}
//         <Link to="/sign-in">
//           <Button
//             className="border border-transparent bg-white dark:bg-gray-900 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
//             style={{
//               borderImage: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
//               borderImageSlice: 1,
//               borderWidth: '2px',
//               borderStyle: 'solid',
//             }}
//           >
//             Sign In
//           </Button>
//         </Link>
//       </div>
//     </Navbar>
//   );



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
import { FaMoon } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sahand's
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          icon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>

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

        <NavbarToggle />
      </div>

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
