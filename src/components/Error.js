import { useRouteError } from "react-router";

const Error=()=>{
  const err=useRouteError();
  return(
  <div>
    <h1>OOPS!!! You lost your way</h1>
    <h3>{err.status}:{err.statusText}</h3>
  </div>
);
}
export default Error;
