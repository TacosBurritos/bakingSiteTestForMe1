import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Homepage';
import BirthdayRecipe from './BirthdayRecipeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';

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
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage}/>
                    <Route path="/birthdayrecipe" render={() => <BirthdayRecipe/>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;