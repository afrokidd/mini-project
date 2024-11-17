import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav.jsx';  // Adjust this path if `Nav.jsx` is in a different folder


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
    </>
  )
}

export default App
