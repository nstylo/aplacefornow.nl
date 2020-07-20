import { useLocation, useHistory } from "react-router-dom"

export function useQuery(name) {
  const history = useHistory()
  let params = new URLSearchParams(useLocation().search)

  function setParams(name, value) {
    // null or undefined are used to delete a param
    // could also add delParams(..) function
    if (value === null || value === undefined) {
      params.delete(name)
    } else {
      params.set(name, value)
    }
    history.push(history.location.pathname + "?" + params.toString())
  }

  return [params, setParams]
}
