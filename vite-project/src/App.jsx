import React from "react";


const App = () => {
  return (
    <div
    >
      <button className="button">Button 1</button>
      <button className="button" onClick={() => alert("Warning: Button 2 activated!")}>Button 2</button>
      <button className="button" title="Button 3 is special">Button 3</button>

    </div>
  );
};

export default App;
