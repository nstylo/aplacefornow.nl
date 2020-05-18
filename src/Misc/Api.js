import { useContext } from "react"

export async function login() {
  const { context } = useContext()

  await fetch("/login")
    .then(
      // set isAuthenticated
      response => response.json()
    )
    .catch(
      // client side error
      response => response.json()
    )
}

export async function logout() {
  const { context } = useContext()

  await fetch("/login")
    .then(
      // set isAuthenticated
      response => response.json()
    )
    .catch(
      // client side error
      response => response.json()
    )
}
