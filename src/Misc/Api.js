import history from "../history"

export async function login(data = {}) {
  return await fetch(`${process.env.REACT_APP_API_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch()
}

async function baseFetch(endpoint, body = {}) {
  const currPath = window.location.pathname + window.location.search

  return await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, body)
    .then(response => response.json())
    .then(response => {
      if (response.name === "USER_DISCONNECTED") {
        // window.location.search = ""
        history.push(`/?routeTo=${currPath}&modal=login`)
      }
      return response
    })
    .catch(err => err) // client needs to handle error
}

export async function settings() {
  return await baseFetch("settings", {
    method: "GET",
  })
}
