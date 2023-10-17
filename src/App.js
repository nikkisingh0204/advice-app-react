import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdvice();
    console.log("render");
  });

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div className="Card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          Advice
        </button>
      </div>
    </div>
  );
}
