export async function login(data = {}) {
  console.log(data)
  return await fetch(`${process.env.REACT_APP_API_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch()
}
