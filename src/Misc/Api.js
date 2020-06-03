export async function login(data = {}) {
  await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(
      // set isAuthenticated
      response => console.log(response.json())
    )
    .catch
    // client side error
    ()
}
