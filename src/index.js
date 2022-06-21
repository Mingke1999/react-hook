import React from "react";
import ReactDOM from 'react-dom';
import Hooks from "./Hooks"
import Classes from "./Classes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Classes />
        <Hooks />
    </div>
);