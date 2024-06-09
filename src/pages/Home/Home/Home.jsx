import ErrorPage from "../../ErrorPage/ErrorPage";
import Team from "../../Team/Team";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ErrorPage></ErrorPage>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;