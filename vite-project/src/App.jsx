import React, { useState } from "react";

const App = () => {
  const [buttonText, setButtonText] = useState("Button 1");

  return (
<div>
      <button className="button" onClick={() => setButtonText("Hello")}>{buttonText}</button>
      <button className="button2" onClick={() => {alert("Warning: Button 2 activated!")}}>Button 2</button>
      <button className="button" title="Button 3">Button 3</button>

    </div>
  );
};

export default App;
