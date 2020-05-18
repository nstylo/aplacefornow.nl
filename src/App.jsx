import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

// theme
import { theme } from "./theme"

// routes
import LayoutRoute from "./Routes/LayoutRoute"
import AuthRoute from "./Routes/AuthRoute"
// import { ProtectedRoute } from "./Auth/ProtectedRoute"

// import pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import HowItWorks from "./Pages/HowItWorks"
import NoMatch from "./Pages/404.jsx"

// import forms
import Login from "./Forms/Login"
import SignUp from "./Forms/SignUp"
import ResetPw from "./Forms/ResetPw"
import ForgotPw from "./Forms/ForgotPw"

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <AuthRoute exact path="/login">
            <Login />
          </AuthRoute>
          <AuthRoute exact path="/signup">
            <SignUp />
          </AuthRoute>
          <AuthRoute exact path="/reset-password">
            <ResetPw />
          </AuthRoute>
          <AuthRoute exact path="/forgot-password">
            <ForgotPw />
          </AuthRoute>
          <LayoutRoute exact path="/">
            <Home />
          </LayoutRoute>
          <LayoutRoute exact path="/about">
            <About />
          </LayoutRoute>
          <LayoutRoute exact path="/how-it-works">
            <HowItWorks />
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
