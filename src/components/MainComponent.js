import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './Homepage';
import BirthdayRecipe from './BirthdayRecipeComponent';
import { dessertChoice } from '../shared/dessertChoice';
import { Route, Switch, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dessert: dessertChoice
        }
    }
    render() {
        const Homepage = () => {
            return(
                <Home 
                    desserts={this.state.dessert.filter(desserts => desserts.highlight === true)[0]}
                />
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