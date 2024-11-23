
import QuickLinks from "./quicklinks";
import HeroSection from "./hero";
import LearningExperience from "./exp";
import Admission from "./admission";
import AboutUs from "./aboutus";

function HomePage(){
    return(
        <>
           <HeroSection/>
           <Admission/>
           <LearningExperience/>
           <AboutUs/>
           <QuickLinks/>
        </>
    )
}

export default HomePage;
