import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
  > ul{
    display: flex;
    > li{
        width: 33.33%;
        text-align: center;
        padding: 16px;
    }
  }
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/">记账页</Link>
                        </li>
                        <li>
                            <Link to="/tags">标签页</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计页</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    )
}

function Money() {
    return (
        <div>
            <h2>记账</h2>
        </div>
    )
}

function Tags() {
    return (
        <div>
            <h2>标签</h2>
        </div>
    )
}

function Statistics() {
    return (
        <div>
            <h2>统计</h2>
        </div>
    )
}

function NoMatch() {
    return (
        <div>404</div>
    )

}

export default App;
