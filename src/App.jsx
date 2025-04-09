import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// image imports
import TitleImage from "./image/plant/titleBackground.png"
import PDRImage from "./image/puebloDelRio/pueblodelrio.png"
// component imports
import ProjectTitle from './components/ProjectTitleComponent';
import HomePage from './pages/homepage'
import PlantPage from './pages/plant'
import PuebloDelRioPage from './pages/puebloDelRio';
import AboutMePage from './pages/AboutMe';
import PlanMyDay from './pages/planMyDay';


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
        <Route path="/puebloDelRio" element={ <PuebloDelRioPage /> } />
        <Route path="/aboutMe" element={ <AboutMePage /> } />
        <Route path="/planMyDay" element={ <PlanMyDay /> } />


      </Routes>
    </Router>



  )
}

export default App
