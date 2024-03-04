
import { useState } from "react";
import Sorry from "./Sorry";
import Happy from "./Happy";



function App() {
  const [ yes,setYes ] = useState(false);
  
  return (
    <>
    {yes ? <div id="app" style={{backgroundImage: 'url("./public/gifs/happy-cat.gif")'}}>
      {!yes?<Sorry setYes={setYes} />:<Happy />}
    </div>: <div id="app">
      {!yes?<Sorry setYes={setYes} />:<Happy />}
    </div>}
    </>
  )
}

export default App
