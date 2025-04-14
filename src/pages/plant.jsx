import React from 'react';
import ProjectTitle from '../components/ProjectTitleComponent';
import TransitionSlide from '../components/transitionSlide';
import ContentSlide from '../components/ContentSlide';
import ImageHorizontalSlide from '../components/ImageHorizontalSlide';
import ImageComponent from '../components/ImageComponent';
import ImageGallery from '../components/ImageGallery';
import TextComponent from '../components/TextComponent';


{/*Images*/ }
import flowImage from "../image/plant/plantFlow.png"
import PDRImage from "../image/puebloDelRio/pueblodelrio.png";
import mockUps from "../image/plant/Plant Mockups.png";
import largeMockUp from "../image/plant/mockupLarge.png";
import prototype2 from '../image/plant/prototype2.png'
import plantCharacter from '../image/plant/plantCartoons.png'
import database from '../image/plant/Database.png'
import multithreading from '../image/plant/Multithreading.png'
import networking from '../image/plant/networking.png'
import emailPlant from '../image/plant/emailPlant.png'
import guestFlow from '../image/plant/guestFlow.png'
import loginPage from '../image/plant/loginPage.png'
import plantFunctions from '../image/plant/plantFunctions.png'
import splashPage from '../image/plant/plantSplashPage.png'
import techStack from '../image/plant/techStack.png'





function PlantPage() {



    return (
        <>

            <div>
                <TransitionSlide
                    title="Plant"
                    imageSrc={ plantCharacter }
                    titleStyle={ { color: "lightpink", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--darkgreen-color)"
                />
            </div>
            <div>
                <ContentSlide
                    title="Intro"
                    isLeftRightLayout={ false }
                    blurb="The PLANT web application was made to assist a beginning gardener in taking care of their physical garden. A user will input the kind of plants they are growing and will receive reminders via email with instructions to water the plant. Plant growth progress will be represented by a virtual plant. When the user completes reminders, takes care of their plants, and indicates that they’ve done so on the application, the virtual plant will be happy. The virtual plant will be sad if the user doesn’t water their plant. 
                    !"
                    imageSrc={ prototype2 }
                    titleStyle={ { color: "lightpink", fontSize: '36px' } }
                    blurbStyle={ { color: "var(--darkpink-color)", fontSize: '28px' } }
                    imageStyle={ { width: '100%', borderRadius: '8px' } }
                    buttonText="Learn More"
                    buttonbgColor="var(--darkgreen-color)"
                    bgColor="lightyellow"

                />

                <ContentSlide
                    title="Why Plant?"
                    isLeftRightLayout={ true }
                    blurb="77% of US households engage in gardening activities, 
                    and almost half of them struggle initially. Our application was inspired by a family member of someone on our team. Like many home gardeners out there, this person was a gardening novice who often forgot to water plants, and noticed them suffering as a result. She would greatly benefit from reminders, since taking care of plants wasn’t an implicit part of her routines. This app appeals to the sentimental value of raising plants, but also acts as a physical reminder to take care of your plants at specific times. 
                    "
                    imageSrc={ mockUps }
                    titleStyle={ { color: "lightpink", fontSize: '36px' } }
                    blurbStyle={ { color: "lightyellow", fontSize: '22px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--darkgreen-color)"

                />
                <ImageHorizontalSlide
                    imageSrc={ largeMockUp }
                    bgColor="lightyellow"
                    backgroundColor="#d3d3d3"
                    imageStyle={ { maxHeight: '50vh', objectFit: 'contain' } }


                />
                <ImageHorizontalSlide
                    imageSrc={ largeMockUp }
                    bgColor="lightyellow"
                    imageStyle={ { maxHeight: '50vh', objectFit: 'contain' } }
                    scrollDirection="right-to-left"
                />
                <TransitionSlide
                    title="Architectural Design"
                    imageSrc={ plantCharacter }
                    titleStyle={ { color: "var(--darkpink-color)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--lightgreen-color)"
                />
                <ContentSlide
                    title="Project Flow"
                    hasBackground={ true }
                    isLeftRightLayout={ false }
                    blurb="	We want to create a web application that helps users grow their garden, while simulating the growth in a virtual garden. Upon signup, the user will input various information such as their email, username, name, and password. Once they’ve created their account, they can add plants periodically to reflect their physical inventory and receive email reminders and keep track of them. Once the user has logged in, the program will display their garden, which has four slots for four possible types of plants. Our program will use a database of plant information, including watering schedules and quantities held, to send reminders to the user when they need to water their plants. This reminder will occur at a specific time for all users via multithreading, invoking mass notifications through email. The next time the user logs into their account, they will press a “watering” button if they have watered their plant on time. If they have not, the plants will look sad; if they have, the plants will look happy.
                    Our application will comply with the major requirements of the assignment. A guest will only be able to see other users’ plants, while an authenticated user can add and keep track of their own plants. We plan to use shades of green and brown, and implement a virtual garden for aesthetics. Multithreading is necessary to ensure multi-user compatibility. Client-server interactions will be implemented with networking functionality, and our backend will be developed with Java."
                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="lightyellow"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ splashPage }

                />

                <ImageGallery
                    images={ [
                        {
                            src: flowImage,
                            title: 'Authenticated User Flow',
                            blurb: ''
                        },
                        {
                            src: guestFlow,
                            title: 'Guest Viewer Flow',
                            blurb: 'Users can have guest viewership to browse your friends gardens.'
                        },
                    ] }
                    backgroundColor='lightyellow'
                    imageBgColor="var(--lightgreen-color)"
                />



                <ContentSlide
                    title='Database Design'
                    hasBackground={ true }
                    isLeftRightLayout={ true }
                    blurb="The following data is fundamental to the core use cases. 
                    1) User data: User data will allow for permission based action between the web application. Once the user logs in and provides correct information, they’ll be able to access their virtual gardens and update processes
                    2) User's plant data: User plant data will determine notification times and plant behavior (happy vs sad)"
                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="lightyellow"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ database }
                />
                <ContentSlide
                    title='Multithreaded Design'
                    hasBackground={ true }
                    isLeftRightLayout={ true }
                    blurb="Our program will use a database of plant information, including watering schedules and quantities held, to send reminders to the user when they need to water their plants. This reminder will occur at a specific time for all users via multithreading, invoking mass notifications through email. The next time the user logs into their account, they will press a “watering” button if they have watered their plant on time. If they have not, the plants will look sad; if they have, the plants will look happy."

                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="lightyellow"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ emailPlant }
                />


                <ImageComponent
                    src={ multithreading }
                    alt="Placeholder image"
                    padding="1vh 10vw"
                    backgroundColor="lightyellow"
                    style={ { borderRadius: '20px' } } // Additional style (e.g., rounded corners)
                />
                <ContentSlide
                    title='Networking Design'
                    hasBackground={ true }
                    isLeftRightLayout={ true }
                    blurb="Our program will use a database of plant information, including watering schedules and quantities held, to send reminders to the user when they need to water their plants. This reminder will occur at a specific time for all users via multithreading, invoking mass notifications through email. The next time the user logs into their account, they will press a “watering” button if they have watered their plant on time. If they have not, the plants will look sad; if they have, the plants will look happy."

                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="lightyellow"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ networking }
                />

                <TransitionSlide
                    title="UI Design & App Flow"
                    imageSrc={ plantCharacter }
                    titleStyle={ { color: "var(--darkpink-color)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--lightgreen-color)"
                />

                <ImageGallery
                    images={ [
                        {
                            src: loginPage,
                            title: 'Login and Signup',
                            blurb: 'Authentication for Username and Password uses fetch API to post username and password for validation in backend SQL server. Different errors/responses are sent back based on correct/incorrect inputs. If Signup/Login is valid, it navigates to user homepage.'
                        },
                        {
                            src: plantFunctions,
                            title: 'Garden Functions',
                            blurb: 'In the homepage, the user is able to see their own garde. Here, they can delete plants or add plants by selecting the type and the last time watered. Based on this information, the application will send reminder emails on when to water each plant. The most recent watering time/date is updated when the user presses the "watered" button and it turns blue. '
                        },
                        {
                            src: emailPlant,
                            title: 'Example Email Reminder',
                            blurb: 'Based on the last recorded watering time for each plant, an email will be sent when it is time to water each plant (based on type of plant). '
                        },
                        {
                            src: largeMockUp,
                            title: 'More on Wireframes',
                            blurb: 'Wireframes were built using Figma and implemented using React JS.'
                        },
                        {
                            src: techStack,
                            title: 'Tech Stack Overview for this project',
                            blurb: 'Wireframes were built using Figma and implemented using React JS.'
                        },
                    ] }
                    backgroundColor="lightyellow"
                    imageBgColor='var(--lightgreen-color)'
                />
                <TransitionSlide
                    title="Reflection"
                    imageSrc={ plantCharacter }
                    titleStyle={ { color: "var(--darkpink-color)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--lightgreen-color)"
                />

                <ContentSlide
                    title='My Role'
                    hasBackground={ true }
                    isLeftRightLayout={ false }
                    blurb="For this project, I was the principle backend developer. I developed and conferred with my teammates about the system architecture and database design. We settled upon organizing our project into pages, assets, and controllers. The controller class and subsequent layers was in charge of workflow REST API requests and handling. "

                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="lightyellow"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ networking }
                />

                <ContentSlide
                    title='Reflections on the Project'
                    hasBackground={ true }
                    isLeftRightLayout={ false }
                    blurb="Our program will use a database of plant information, including watering schedules and quantities held, to send reminders to the user when they need to water their plants. This reminder will occur at a specific time for all users via multithreading, invoking mass notifications through email. The next time the user logs into their account, they will press a “watering” button if they have watered their plant on time. If they have not, the plants will look sad; if they have, the plants will look happy."

                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="lightyellow"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ networking }
                />
                <ContentSlide
                    title='Want to Learn More?'
                    hasBackground={ true }
                    isLeftRightLayout={ true }
                    blurb={ <span>If you are curious to learn more about this project, check out our GitHub <a href="https://github.com/hilarifan/plant" target="_blank" rel="noopener noreferrer">here</a>.</span> }
                    titleStyle={ { color: "lightyellow", fontSize: '36px' } }
                    blurbStyle={ { color: "darkgreen", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="var(--lightgreen-color)"
                    rectBackgroundColor="lightyellow"
                    imageSrc={ techStack }
                />


            </div>


        </>


    );
}

export default PlantPage;