import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"

export default ({ path, component, ...rest }) => {
  const { isAuthenticated } = useContext()
  return isAuthenticated === true ? (
    <Route path={path} component={component} {...rest} />
  ) : (
    <Redirect to="/login" />
  ) // TODO redirect path
}
