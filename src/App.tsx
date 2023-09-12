import "./App.css";
import { Header } from "./components/Header/Header";
import { CountryForm } from "./components/CountryForm/CountryForm";

const GAME_TITLE: string = "Guess The Country";

function App() {
  return (
    <>
      <Header title={GAME_TITLE} />
      <CountryForm />
    </>
  );
}

export default App;
