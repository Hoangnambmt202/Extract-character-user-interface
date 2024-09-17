import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {routes} from './routes/index'
import DefaultComponent from './component/DefaultComponent/DefaultComponent.jsx';
import './index.css'

const App = () => {
    
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map(route => {
                        const Page = route.page;
                        const Layout = route.isShowHeader ? DefaultComponent : Fragment
                        return(
                                <Route path={route.path} element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                    
                                } />
                        )
                    })}
                </Routes>

            </Router>
        </div>

    )
};
export default App; 