import HomePage from './homePage'
import Page1 from './page1'
import Page2 from './page2'
import React from 'react'
import {Route,HashRouter, Switch} from 'react-router-dom'

export default class App extends React.Component {
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/page1" component={Page1}/>
                    <Route exact path="/page2" component={Page2}/>
                </Switch>
            </HashRouter>
        )
    }
}
