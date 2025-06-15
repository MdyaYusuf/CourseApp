import { Link } from "react-router";

export default function NotFound() {

  return (
    <div id="error">
      <h1>Sayfa bulunamadı.</h1>
      <Link to="/">Home Page</Link>
    </div>
  )
}