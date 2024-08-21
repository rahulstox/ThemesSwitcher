import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/themes";
import ThemeBtn from "./Componenets/button";
import Card from "./Componenets/card";

function App() {
const [themeMode, setthemeMode] = useState("Light")

const lightTheme = ()  => { 
  setthemeMode("Light")
}

const darkTheme = ()  => {
  setthemeMode("dark")
}


// Actual Change in Theme

useEffect(()=>{
  document.querySelector('html').classList.remove("Light","dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeProvider value={{themeMode , lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*themeBtn  */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">{/*  Card*/}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
