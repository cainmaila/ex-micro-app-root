import { useEffect } from "react";
import "./App.css";
import App2 from "./App2";

function App() {
  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);
  return (
    <>
      <h1>Root App</h1>
      <App2></App2>
    </>
  );
}

export default App;

function onMessage(e: MessageEvent) {
  console.log(e.data);
}
