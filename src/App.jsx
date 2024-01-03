import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 border-emerald-300 br-20 rounded-2xl">
        Ganesh
      </h1>
      <div className="mt-4">
        <Card
          h2text="Ganesh Shit"
          p="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corrupti
        enim blanditiis, asperiores dicta hic eveniet maxime non a at alias
        similique necessitatibus quaerat ullam esse porro minus quasi ipsa."
          h3text="Kartick Shit"
        />
        <Card 
        h2text="Kartick Shit"
        h3text="Ganesh Shit"
        
        />
      </div>
    </>
  );
}

export default App;
