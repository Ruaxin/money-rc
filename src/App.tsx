import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">money</Link>
                        </li>
                        <li>
                            <Link to="/tags">Tags</Link>
                        </li>
                        <li>
                            <Link to="/statistics">Statistics</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Redirect exact from='/' to='/money'/>
                    <Route path='*'>
                        <NoMatch/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

function Money() {
    return (
        <div>
            <h2>Money</h2>
        </div>
    )
}

function Tags() {
    return (
        <div>
            <h2>Tags</h2>
        </div>
    )
}

function Statistics() {
    return (
        <div>
            <h2>Statistics</h2>
        </div>
    )
}

function NoMatch() {
    return (
        <div>404</div>
    )

}

export default App;
