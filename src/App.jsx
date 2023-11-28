import { useEffect, useRef, useState } from "react";
import Scene from "./components/scene.jsx";
import "./scss/style.scss";
import { useFrame } from "@react-three/fiber";
import { AppContextProvider } from "./context/AppContext.jsx";
import axios from "axios";
function App() {
  console.log(import.meta.env.VITE_USER_TOKEN);
  return (
    <>
      <AppContextProvider>
        <Scene />
      </AppContextProvider>
    </>
  );
}

export default App;
