import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Nếu cần JavaScript của Bootstrap
import styled from "styled-components";
import Button from "./components/Button";
import Title from "./components/Title";
import Back from "./components/Back";

function App() {
  return (
    <>
      <div className="container absolute_center flex-column">
       <Back/>
        <Title content={"We provide best quality Fruits to your family"}/>
        <Button text={"Next"} action={() => console.log(
          "OK!"
        )}/>
      </div>
    </>
  );
}

export default App;
