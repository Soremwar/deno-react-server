import { React, ReactDOM, ReactRouter } from "./deps.ts";
import routes from "./config/routes.tsx";
const { BrowserRouter, Route, Switch, Link } = ReactRouter;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routes.map(({ exact, path, component }) => (
            <Route key={path} exact={exact} path={path}>
              {component}
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// @ts-ignore So that we don't have to pull in DOM declarations
ReactDOM.render(<App />, document.getElementById("app"));
