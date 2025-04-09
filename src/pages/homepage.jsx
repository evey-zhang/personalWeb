import { useState } from 'react';
import TitleImage from "../image/plant/titleBackground.png";
import PDRImage from "../image/puebloDelRio/pueblodelrio.png";
import ProjectTitle from '../components/ProjectTitleComponent';
import { useNavigate } from 'react-router-dom';
import PuebloDelRioPage from './puebloDelRio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import plantCharacter from '../image/plant/plantCartoons.png'
import comingSoon from '../image/comingsoon.jpg'


function HomePage() {
  const navigate = useNavigate();
  const handleLearnMoreClickPlant = () => {
    navigate('/plant');
  };
  const handleLearnMoreClickPDR = () => {
    navigate('/puebloDelRio');
  };
  const handleLearnMoreClickPMD = () => {
    navigate('/planMyDay');
  };
  const [ count, setCount ] = useState(0);
  const introTextStyle = {
    fontFamily: 'Gluten',
  };

  return (
    <>

      {/*NavBar */}
      <Navbar/>
      {/* Title Section */ }
      <section className="title" style={ { backgroundImage: `url(${TitleImage})` } }>
        <div className="content">
          <h1 style={ introTextStyle }>hi, i'm evey</h1>
          <p>come check out my backyard</p>
          <a href="#projects">Start Now</a> { }
        </div>
      </section>

      {/* Projects Section */ }
      <section id="projects">
        <ProjectTitle
          title="Pueblo Del Rio"
          blurb="This is the description for my first project. It's a lot of fun!"
          imageSrc={ PDRImage }
          titleStyle={ { color: 'darkblue', fontSize: '36px' } }
          blurbStyle={ { color: 'darkgray', fontSize: '20px' } }
          imageStyle={ { width: '78%', borderRadius: '8px' } }
          buttonText="Learn More"
          buttonbgColor="var(--darkgreen-color)"
          onClick={handleLearnMoreClickPDR}

        />

        <ProjectTitle
          title="Plant"
          blurb="This is the description for my first project. It's a lot of fun!"
          imageSrc={ plantCharacter }
          titleStyle={ { color: "var(--lightgreen-color)", fontSize: '36px' } }
          blurbStyle={ { color: 'lightyellow', fontSize: '20px' } }
          imageStyle={ { width: '80%', borderRadius: '8px' } }
          buttonText="Learn More"
          buttonbgColor="var(--lightgreen-color)"
          bgColor="var(--darkgreen-color)"
          onClick={ handleLearnMoreClickPlant }
        />

        <ProjectTitle
          title="Plan My Day"
          blurb="This is the description for my first project. It's a lot of fun!"
          imageSrc={comingSoon  }
          titleStyle={ { color: 'var(--darkgreen-color)', fontSize: '36px' } }
          blurbStyle={ { color: 'darkgray', fontSize: '20px' } }
          imageStyle={ { width: '80%', borderRadius: '8px' } }
          buttonText="Learn More"
          buttonbgColor="var(--darkgreen-color)"
          bgColor="var(--lightpurple-color)"
          onClick={handleLearnMoreClickPMD}
          
        />
      </section>

      {/* Footer */ }
      <Footer></Footer>

    
    </>
  );
}

export default HomePage;
