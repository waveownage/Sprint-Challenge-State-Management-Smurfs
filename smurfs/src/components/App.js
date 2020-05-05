import React from "react";
import "./App.css";
import SmurfForm from "./smurfs-form";
import List  from "./smurfs";


export default function App() {
  return (
    <div className="App">
      <SmurfForm/>
      <List/>
    </div>
  );
}