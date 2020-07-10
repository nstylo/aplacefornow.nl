import ReactDOM from "react-dom"

export default ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById("modal-root"))
}
