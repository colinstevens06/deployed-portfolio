import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Import Pages
import Home from "../src/pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import NoMatch from "./pages/NoMatch"
import Navigation from "./components/Navigation"


function App() {
  return (
    <div>

      <Router>
        <Navigation />
        <div>
          <Route render={({ location }) => (
            <TransitionGroup>

              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
              >

                <Switch location={location}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route>
                    <NoMatch />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>

          )} />

        </div>
      </Router >
    </div>
  );
}

export default App;
