import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ProtectedRoute } from "./Auth/ProtectedRoute"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// theme
import { theme } from "./theme"

import LayoutRoute from "./LayoutRoute"

// import pages
import About from "./Pages/About"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import ForgotPassword from "./Pages/Forgot-Password"
import ResetPassword from "./Pages/Reset-Password"
import NoMatch from "./Pages/404.jsx"

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <LayoutRoute exact path="/about">
            <About />
          </LayoutRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
