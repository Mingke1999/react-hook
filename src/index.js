import React from "react";
import ReactDOM from 'react-dom';
import Mouse from "./Mouse";
import RefHook from "./RefHook";
import Main from "./compose/Main";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Mouse/>
   <RefHook/>
   <Main/>
  </div>
);