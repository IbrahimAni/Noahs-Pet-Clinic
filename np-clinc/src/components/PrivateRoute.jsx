import React from 'react'
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({element: Element, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Element {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute