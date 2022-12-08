import About from "./components/About";
import Announcement from "./components/Annoucement";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Announcement />
      <Hero />
      <Collection />
      <Review />
      <About />
      <Footer />
    </div>
  );
};

export default App;
