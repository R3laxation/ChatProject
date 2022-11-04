import React from 'react';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}
export default App;