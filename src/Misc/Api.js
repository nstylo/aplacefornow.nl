import history from "../history"

export async function login(data = {}) {
  return await fetch(`${process.env.REACT_APP_API_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(err => err)
}

export async function signUp(data = {}) {
  return await fetch(`${process.env.REACT_APP_API_URL}register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(err => err)
}

export async function baseFetch(endpoint, body = {}) {
  const currPath = window.location.pathname + window.location.search

  return await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, body)
    .then(response => response.json())
    .then(response => {
      if (response.name === "USER_DISCONNECTED") {
        history.push(`/?routeTo=${currPath}&modal=login`)
      }
      return response
    })
    .catch(err => err) // client needs to handle error
}
