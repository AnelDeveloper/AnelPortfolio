

import { useContext } from "react";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Productlist from "./Components/ProductList/productlist";
import Contact from "./Components/Contact.jsx/contact";
import Toggle from "./Components/Toggle/toggle";


import { ThemeContext } from "./context";


const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (<div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
    <Toggle />

    <Intro />
    <About />
    <Productlist />
    <Contact />




  </div>

  )
};

export default App;