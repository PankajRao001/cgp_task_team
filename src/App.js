import "./App.css";
import ApiReference from "./components/ApiReference";
import Header from "./components/Header";
import LearnHow from "./components/LearnHow";
import MostPolular from "./components/MostPolular";
import UseCase from "./components/UseCase";
import DeveloperCommunity from "./components/DeveloperCommunity";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MostPolular />
      <LearnHow />
      <ApiReference /> 
      <UseCase />
      <DeveloperCommunity />
      <Footer />
    </>
  );
}

export default App;
