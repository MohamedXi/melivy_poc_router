import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import AuthLayout from "../layouts/auth.layout";
import MainLayout from "../layouts/main.layout";
import Page404 from "../pages/auth/Page404";
import {
  mainLayoutRoutes, protectedRoutes
} from "./index";


const childRoutes = (Layout, routes) =>
  routes.map(({ element: Element, guard, children, path }, index) => {
    console.log("childRoutes", { Layout, routes, index, path, guard });
    const Guard = guard || React.Fragment;

    return children ? (
      children.map((element, index) => {
        const Guard = element.guard || React.Fragment;

        return (
          <Route
            key={index}
            path={element.path}
            exact
            element={(props) => (
              <Guard>
                <Layout>
                  <element.component {...props} />
                </Layout>
              </Guard>
            )}
          />
        );
      })
    ) : Element ? (
      <Route
        key={index}
        path={path}
        exact
        element={(props) => (
          <Guard>
            <Layout>
              <Element {...props} />
            </Layout>
          </Guard>
        )}
      />
    ) : null;
  });

const Routes = () => (
  <Router>
    <Switch>
      {childRoutes(MainLayout, mainLayoutRoutes)}
      {childRoutes(MainLayout, protectedRoutes)}
      {/* {childRoutes(AuthLayout, authLayoutRoutes)} */}
      <Route
        element={() => (
          <AuthLayout>
            <Page404 />
          </AuthLayout>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
