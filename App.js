import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import "./style.css";

const App = () => {

    return (
        <div>
            <Header/>
            <Body/>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App/>);