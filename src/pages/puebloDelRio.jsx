import React from 'react';
import ProjectTitle from '../components/ProjectTitleComponent';
import TransitionSlide from '../components/transitionSlide';
import ContentSlide from '../components/ContentSlide';
import ImageHorizontalSlide from '../components/ImageHorizontalSlide';
import ImageComponent from '../components/ImageComponent';
import ImageGallery from '../components/ImageGallery';
import TextComponent from '../components/TextComponent';
import Footer from '../components/Footer';



{/*Images*/ }
import frontpage from "../image/puebloDelRio/puebloDelRio.png"
import mockup from "../image/puebloDelRio/mockup.png"
import map from "../image/puebloDelRio/map.png"
import mockup2 from "../image/puebloDelRio/pdrmockup2.png"
import database from '../image/puebloDelRio/databasePDR.png'
import flow from '../image/puebloDelRio/flowPDR.png'
import login from '../image/puebloDelRio/login.png'
import features from '../image/puebloDelRio/features.png'
import techStack from '../image/puebloDelRio/techStack.png'
import desktop from '../image/puebloDelRio/desktop.png'


import flowImage from "../image/plant/plantFlow.png"
import PDRImage from "../image/puebloDelRio/pueblodelrio.png";
import mockUps from "../image/plant/Plant Mockups.png";
import largeMockUp from "../image/plant/mockupLarge.png";
import prototype2 from '../image/plant/prototype2.png'
import plantCharacter from '../image/plant/plantCartoons.png'
import multithreading from '../image/plant/Multithreading.png'
import networking from '../image/plant/networking.png'
import emailPlant from '../image/plant/emailPlant.png'
import guestFlow from '../image/plant/guestFlow.png'
import loginPage from '../image/plant/loginPage.png'
import plantFunctions from '../image/plant/plantFunctions.png'
import splashPage from '../image/plant/plantSplashPage.png'




function PuebloDelRioPage() {



    return (
        <>

            <div>
                <TransitionSlide
                    title="Pueblo Del Rio"
                    imageSrc={ frontpage }
                    titleStyle={ { color: "var(--lightorange)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--mediumblue)"
                    trapColor='var(--lightorange)'
                />
            </div>
            <div>
                <ContentSlide
                    title="Intro"
                    isLeftRightLayout={ false }
                    blurb="Pueblo Del Rio was formerly a high crime area of South Los Angeles and this unit was dispatched into this area to empower this community and work together with them to uplift them. This includes supporting the elderly, kids, and households of every kind. The Pueblo Del Rio App was an idea created to help the community and the police communicate. This is supposed to be a platform for the police to reach the community and vice versa so that there is seamless, non-conflictual communication to prevent negative contact."
                    imageSrc={ mockup }
                    titleStyle={ { color: "var(--policeorange)", fontSize: '36px' } }
                    blurbStyle={ { color: "var(--darkpink-color)", fontSize: '28px' } }
                    imageStyle={ { width: '100%', borderRadius: '8px' } }
                    buttonText="Learn More"
                    buttonbgColor="var(--darkgreen-color)"
                    bgColor="var(--lightblue)"

                />

                <ContentSlide
                    title="Why Pueblo Del Rio??"
                    isLeftRightLayout={ true }
                    blurb="The LAPD recently established the Community Safety Partnership committee, using a specific group of officers to patrol a specific community for patrol and community engagement in the Pueblo Del Rio area. LAPD representative, Alberto Talapio, enlisted our help to build a multi-functional platform to facilitate community formation. 
                    "
                    imageSrc={ map }
                    titleStyle={ { color: "orange", fontSize: '36px' } }
                    blurbStyle={ { color: "lightyellow", fontSize: '22px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--policeblue)"

                />
                <ImageHorizontalSlide
                    imageSrc={ mockup2 }
                    bgColor="var(--lightblue)"
                    backgroundColor="#d3d3d3"
                    imageStyle={ { maxHeight: '30vh', objectFit: 'contain' } }


                />
                <ImageHorizontalSlide
                    imageSrc={ mockup2 }
                    bgColor="var(--lightblue)"
                    imageStyle={ { maxHeight: '30vh', objectFit: 'contain' } }
                    scrollDirection="right-to-left"
                />
                <TransitionSlide
                    title="Architectural Design"
                    imageSrc={ PDRImage }
                    titleStyle={ { color: "var(--lightorange)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--mediumblue)"
                    trapColor='var(--lightorange)'

                />
                <ContentSlide
                    title="Project Flow"
                    hasBackground={ true }
                    isLeftRightLayout={ false }
                    blurb="The aim was to create a platform to unite the community, ensuring better communication and safety. Our app had three main features, which included a homepage, where users could post community announcements, a message page for residents to directly get in touch with police officers assigned to the area, and a bulletin board for common resources like parking information, street sweeping, and even childcare help. "
                    titleStyle={ { color: "var(--lightpink-color)", fontSize: '36px' } }
                    blurbStyle={ { color: "var(--darkpink-color)", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="var(--lightblue)"
                    rectBackgroundColor="var(--lightblue)"
                    imageSrc={ desktop}

                />

                <ImageGallery
                    images={ [
                        {
                            src: flow,
                            title: 'Authenticated User Flow',
                            blurb: '',
                        },
                        {
                            src: guestFlow,
                            title: 'Guest Viewer Flow',
                            blurb: 'Users can have guest viewership to browse your friends gardens.'
                        },
                    ] }
                    backgroundColor="var(--lightblue)"
                    imageBgColor="var(--mediumblue)"
                    titleColor='var(--policeblue)'
                />



                <ContentSlide
                    title='Database Design'
                    hasBackground={ true }
                    isLeftRightLayout={ true }
                    blurb="Our database was built in firebase Where “users” and “Posts” were the main tables, connected by the User ID. Within the “Post” table, another “Comment” array is nested inside. For password authentication and tokenization, we used the built in Firebase Authentication packages."
                    titleStyle={ { color: "orange", fontSize: '36px' } }
                    blurbStyle={ { color: "var(--darkpink-color)", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="var(--lightblue)"
                    rectBackgroundColor="var(--lightblue)"
                    imageSrc={ database }
                />


                <TransitionSlide
                    title="UI Design & App Flow"
                    imageSrc={ PDRImage }
                    titleStyle={ { color: "var(--lightorange)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--mediumblue)"
                    trapColor='var(--lightorange)'

                />

                <ImageGallery
                    images={ [
                        {
                            src: login,
                            title: 'Login and Signup',
                            blurb: 'Authentication for Username and Password uses fetch API to post username and password for validation in backend SQL server. Different errors/responses are sent back based on correct/incorrect inputs. If Signup/Login is valid, it navigates to user homepage.'
                        },
                        {
                            src: features,
                            title: 'Features',
                            blurb: 'In the homepage, the user is able to see their own garde. Here, they can delete plants or add plants by selecting the type and the last time watered. Based on this information, the application will send reminder emails on when to water each plant. The most recent watering time/date is updated when the user presses the "watered" button and it turns blue. '
                        },

                        {
                            src: techStack,
                            title: 'Tech Stack',
                            blurb: 'Wireframes were built using Figma, database used Firebase, languages used Flutter, for compatability with IOS, Android, and Web Application.'
                        },

                    ] }
                    backgroundColor="var(--lightblue)"
                    imageBgColor='var(--lightorange)'
                    titleColor='var(--policeblue)'
                    blurbColor='var(--darkpink-color)'
                />
                <TransitionSlide
                    title="Reflection"
                    imageSrc={ PDRImage }
                    titleStyle={ { color: "var(--darkpink-color)", fontSize: '36px' } }
                    imageStyle={ { width: '80%', borderRadius: '8px' } }
                    bgColor="var(--mediumblue)"
                    trapColor='var(--lightorange)'

                />
                <TextComponent
                    title='My Role'
                    text='In this project, created in a group for my capstone project, we decided to deviate from a traditional split of frontend/backend. Instead, we tried to split tasks by function and page. I created the login/signup as well as the posting and comment feature, and of course, we helped each other whenever possible.'
                    backgroundColor="var(--lightblue)"
                    fontFamily='gluten'
                    padding='5vw 20vw'
                    fontSize='20px'
                    titleSize='36px'
                    titleColor="var(--policeblue)"
                    blurbColor='var(--darkpink-color)'
                />

                <TextComponent
                    title='Reflections on the Project'
                    text="Building this app was an invaluable experience, allowing me to gain hands-on technical knowledge in implementing common features like posting and messaging. It gave me a deeper understanding of how real-time databases and user authentication systems are set up and how they power essential app functions. However, upon reflection, I realize that we could have taken a more business-oriented approach to narrow our focus on a specific niche use case, which would have made our app more unique and impactful. By honing in on a particular problem or need within the community, we could have brought even more value to both the LAPD and residents. Additionally, if we had more time, it would have been incredibly beneficial to conduct beta testing with the LAPD and the residents of Pueblo del Rio. This would have provided us with direct feedback from our target users, allowing us to make necessary improvements, address concerns, and fine-tune the app to better serve the community's needs."
                    backgroundColor="var(--lightblue)"
                    fontColor="var(--policeblue)"
                    fontFamily='gluten'
                    padding='1vw 20vw'
                    fontSize='20px'
                    titleSize='36px'
                    titleColor="var(--policeblue)"
                    blurbColor='var(--darkpink-color)'

                />


                <ContentSlide
                    title='Want to Learn More?'
                    hasBackground={ true }
                    isLeftRightLayout={ true }
                    blurb={ <span>If you are curious to learn more about this project, check out our GitHub <a href="https://github.com/jennykim515/El-Pueblo-Del-Rio" target="_blank" rel="noopener noreferrer">here</a>.</span> }
                    titleStyle={ { color: "var(--policeblue)", fontSize: '36px' } }
                    blurbStyle={ { color: "var(--darkpink-color)", fontSize: '20px' } }
                    imageStyle={ { width: '100%', borderRadius: '5px' } }
                    bgColor="var(--mediumblue)"
                    rectBackgroundColor="var(--lightorange)"
                    imageSrc={ techStack }
                />

                {/* Footer */ }
                <Footer></Footer>



            </div>



        </>


    );
}

export default PuebloDelRioPage;