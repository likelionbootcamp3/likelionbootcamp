import Card from "./components/Card";
import CardSample from "./components/CardSample";
import Navbar from "./components/Navbar";
import NavbarSample from "./components/NavbarSample";

const App = () => {
  return (
    <div className="h-[300vh] bg-white">
      <NavbarSample />
      <hr />
      <Navbar />
      <hr />
      <CardSample />
      <hr />
      <Card />

      <hr />
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout: Grid or Flex  */}
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
