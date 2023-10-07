import { useRouteError } from "react-router-dom";
import './index.scss'
type ErrorMessage = {
  statusText:string
  data:string
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorMessage;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div>
        <i>{error.statusText || error.data}</i>
        <div>please go home <a href="/">HOME!</a></div>
      </div>
    </div>
  );
}
