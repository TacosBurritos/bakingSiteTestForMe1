import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Homepage';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const Homepage = () => {
            return(
                <Home />
            );
        }
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage}/>
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;