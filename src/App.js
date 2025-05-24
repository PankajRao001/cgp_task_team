import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApiReference from "./components/ApiReference";
import Header from "./components/Header";
import LearnHow from "./components/LearnHow";
import MostPolular from "./components/MostPolular";
import UseCase from "./components/UseCase";
import DeveloperCommunity from "./components/DeveloperCommunity";

function App() {
  return (
    <>
      {/* <Header />
      <MostPolular />
      <LearnHow />
      <ApiReference /> 
      <UseCase /> */}
      <DeveloperCommunity />
    </>
  );
}

export default App;
