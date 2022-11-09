import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {Main} from "./components/main/Main";

export const App = () => {
    return (
        <div>
            <Routes>
               <Route path={'/'} element={<MainLayout/>}>
                   <Route index element={<Main/>}/>
               </Route>
            </Routes>
        </div>


    );
}
export default App;