import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'flowbite/dist/flowbite.css';
import Home from './pages/Home/'
import About from './pages/About/'
import Projects from './pages/Projects/'
import SignIn from './pages/SignIn/'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard/'
import Header from './components/Header/'


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
  )
}