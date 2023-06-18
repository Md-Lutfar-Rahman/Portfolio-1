import About from "../../About/About";
import Banner from "../../Banner/Banner";

const Home = () => {
    return (
        <div className="w-full mx-auto px-8 pt-2">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;