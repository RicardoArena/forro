import { useState } from "react";

//Components
import { Falamansa } from "./components/Adriano";
import { BondeForro } from "./components/Lucas";
import { Baroes } from "./components/Ricardo";
import { LuizGonzaga } from "./components/Felipe";
import { Pernambuco } from "./components/Tathy";
import { Caviar } from "./components/Tulio";
import { MauricioCard } from "./components/Mauricio";
import { TrioVirgulino } from "./components/Flavia";

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
  }

  return (
    <>
      {/* //BOA! */}
      {/* // < className="App"> */}
      <div style={appStyle}>
        <div>
          <button onClick={changeMode}>{mode.toUpperCase()}</button>
        </div>
        <div>
          {/* <BondeForro />
          <Falamansa />
          <Baroes />
          <Caviar /> */}
        </div>
      </div>
    </>
  );
}

export default App;
