// import logo from "./logo.svg";
import "./App.css";
import { Card, Col, Divider, Button } from "antd";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  return (
    <div className="display">
      <FoodBox />
    </div>
  );
}

export default App;
