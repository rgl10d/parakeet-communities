import React from "react";
import {useEffect} from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("api/config").then((response) =>{
      alert(response.data.currentPort);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
