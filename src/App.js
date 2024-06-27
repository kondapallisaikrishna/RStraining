import logo from "./logo.svg";
import "./App.css";

function App() {
  const today = new Date();
  return (
    <div>
      <h1>Sai Krishna</h1>
      <h3>{today.toDateString()}</h3>
      <h3>{"Hindusthan University".toUpperCase()}</h3>
    </div>
  );
}
export default App;
