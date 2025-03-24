import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitleImage from "./image/titleBackground.png"
import PDRImage from "./image/pueblodelrio.png"
import ProjectTitle from './ProjectTitleComponent'; 

function App() {
  const [count, setCount] = useState(0)
  const introTextStyle = {
    fontFamily: 'Gluten',
  };

  return (
    <>
      {/* title page */}
      <section className = "title" style = {{backgroundImage: `url(${TitleImage})`}}>
        <div className= "content">
          <h1 style = {introTextStyle}>hi, i'm evey</h1>
          <p> 
            come check out my backyard
          </p>
          <a href="#projects">Start Now</a>
        </div>
      </section>
    

      {/* Using the ProjectTitle Component for a Project */}
      <section id="projects">
        <ProjectTitle
          title="Pueblo Del Rio"
          blurb="This is the description for my first project. It's a lot of fun!"
          imageSrc={PDRImage} 
          titleStyle={{ color: 'darkblue', fontSize: '36px' }}
          blurbStyle={{ color: 'darkgray', fontSize: '20px' }}
          imageStyle={{ width: '80%', borderRadius: '8px' }}
          buttonText="Learn More"
          buttonbgColor= 'var(--darkgreen-color)'
        />
        {/* Using the ProjectTitle Component for a Project */}
        <ProjectTitle
          title="Plant"
          blurb="This is the description for my first project. It's a lot of fun!"
          imageSrc={PDRImage} 
          titleStyle={{ color: 'darkblue', fontSize: '36px' }}
          blurbStyle={{ color: 'darkgray', fontSize: '20px' }}
          imageStyle={{ width: '80%', borderRadius: '8px' }}
          buttonText="Learn More"
          buttonbgColor= 'var(--darkgreen-color)'
          bgColor='var(--lightgreen-color)'
        />

        <ProjectTitle
          title="Plan My Day"
          blurb="This is the description for my first project. It's a lot of fun!"
          imageSrc={PDRImage} 
          titleStyle={{ color: 'var(--darkgreen-color)', fontSize: '36px' }}
          blurbStyle={{ color: 'darkgray', fontSize: '20px' }}
          imageStyle={{ width: '80%', borderRadius: '8px' }}
          buttonText="Learn More"
          buttonbgColor= 'var(--darkgreen-color)'
          bgColor='var(--lightpurple-color)'
        />
      </section>
      


      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
