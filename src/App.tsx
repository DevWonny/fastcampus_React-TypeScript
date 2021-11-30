import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      {/* 런타임에 문제가 있을때 에러 페이지가 뜸. */}
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/edit/:id" component={Edit} />
          <Route path="/book/:id" component={Detail} />
          <Route path="/add" component={Add} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
