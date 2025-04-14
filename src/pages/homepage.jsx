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
          blurb="As part of my captsone course, this project was comissioned by the Community Safety Partership Service of the LAPD to encourage amicable communication between residents of Pueblo Del Rio and police officers. This application was built using the Flutter framework and is web app, IOS, and android compatible."
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
          blurb="This web application was created to help beginner gardeners. enabling users add plants to their virutal garden and keep track of when to water each type of plant. This web application was made using Java, utilizing the Spring Boot framework!"
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
          blurb="This android application was made to help people visitng LA plan their day during their trip! Users can pick destinations and we will create an itinerary for you within the alloted time."
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
