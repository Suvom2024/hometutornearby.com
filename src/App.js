// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Layout'; // Adjust the import path if needed
import HomePage from './pages/HomePage'; // Adjust the import path if needed
import CoursesPage from './pages/CoursesPage'; // Adjust the import path if needed


function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/courses" component={CoursesPage} />
                    {/* Add other routes here */}
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
