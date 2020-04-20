import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Books from "./views/Books";
import BookPreview from "./views/BookPreview";

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/book/preview" component={BookPreview} />
      </Switch>
    </Router>
  </>
);

export default App;
