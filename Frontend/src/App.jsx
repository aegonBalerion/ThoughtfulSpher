// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import SignIn from './pages/SignIn'
// import Dashboard from './pages/Dashboard'
// import Projects from './pages/Projects'
// import SignUp from './pages/SignUp'
// import Header from './components/Header'
// import Footer from './components/Footer'


// export default function App() {
//   return (
//     <>
      
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/sign-in" element={<SignIn />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   )
// }
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

