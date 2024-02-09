import React, { useEffect, useState } from "react";
import BotContainer from "./Components/BotContainer";

function App() {
  const [bots, setBots] = useState([]);

  const fetching = async () => {
    const res = await fetch("http://localhost:4000/bots");
    const data = await res.json();
    // console.log(data);
    return setBots(data);
  };

  // fetching()
  // console.log(bots);

  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className="app">
      <BotContainer bots = {bots}/>
    </div>
  );
}

export default App;
