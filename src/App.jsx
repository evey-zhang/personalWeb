import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// image imports
import TitleImage from "./image/titleBackground.png"
import PDRImage from "./image/pueblodelrio.png"
// component imports
import ProjectTitle from './components/ProjectTitleComponent';
import HomePage from './pages/homepage'
import PlantPage from './pages/plant'


function App() {
  const [ count, setCount ] = useState(0)
  const introTextStyle = {
    fontFamily: 'Gluten',
  };

  return (

    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/plant" element={ <PlantPage /> } />
      </Routes>
    </Router>
    // <>
    //   <div>
    //     <HomePage />
    //   </div>
    //   <div>
    //     <PlantPage />
    //     <h1>HEY</h1>

    //   </div>
    // </>


  )
}

export default App
