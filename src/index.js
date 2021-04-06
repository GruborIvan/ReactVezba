import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';

const Routing = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/About" component={About} />
                <Route path="/Service" component={Service} />
            </Switch>
            <Footer/>
        </Router>
    );
};

ReactDOM.render(
                <React.StrictMode>
                    <Routing/>
                </React.StrictMode>,
            document.getElementById('root'));

export default Routing;