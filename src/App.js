import "./App.css";
import ApiReference from "./components/ApiReference";
import Header from "./components/Header";
import LearnHow from "./components/LearnHow";
import MostPolular from "./components/MostPolular";
import UseCase from "./components/UseCase";

function App() {
  return (
    <>
      <Header />
      <MostPolular />
      <LearnHow />
      <ApiReference />
      <UseCase />
    </>
  );
}

export default App;
