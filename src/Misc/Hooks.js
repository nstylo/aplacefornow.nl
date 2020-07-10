import { useLocation, useHistory } from "react-router-dom"

export function useQuery(name) {
  const history = useHistory()
  let params = new URLSearchParams(useLocation().search)

  function setParams(name, value) {
    if (value === null || value === undefined) {
      params.delete(name)
    } else {
      params.set(name, value)
    }
    history.push(history.location.pathname + "?" + params.toString())
  }

  return [params, setParams]
}
