import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

//Components
import { Falamansa } from "./components/Adriano";
import { BondeForro } from "./components/Lucas";
import { Baroes } from "./components/Ricardo";
import { LuizGonzaga } from "./components/Felipe";
import { Pernambuco } from "./components/Tathy";
import { Caviar } from "./components/Tulio";
import { MauricioCard } from "./components/Mauricio";

function App() {
  const [mode, setMode] = useState("light");

  const appStyle = { display: "flex", "flex-wrap": "wrap", gap: "20px" };

  function changeMode() {
    mode === "light" ? setMode("dark") : setMode("light");

    //.light{
    //   background-color: white;
    //   color: toBePartiallyChecked;
    // }

    // .dark{
    //   background-color: black;
    //   color: white;
    // }

    return (
      //BOA!
      // < className="App">
      <div>
        <button onClick={changeMode}>{mode.toUpperCase()}</button>
        <div style={appStyle}>
          <MauricioCard mode={mode} />
          <Baroes mode={mode} />
          {/* <Adriano mode={mode} /> */}
        </div>
      </div>
    );
  }
}

export default App;
