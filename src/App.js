import "./index.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { createContext } from "react";

// const [darkMode, setDarkMode] = createContext(); 

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <MainPage></MainPage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
