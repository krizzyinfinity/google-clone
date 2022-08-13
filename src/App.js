
import  Footer  from './components/Footer';
import  Navbar  from './components/Navbar';
import Routes1  from './components/Routes1';

import { useState } from "react";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
  <div className="bg-gray-300 dark:bg-gray-900 dark:text-gray-200 min-h-screen"> 
    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    <Routes1 />
    <Footer />
    </div> 
   </div>
  );
}

export default App;
