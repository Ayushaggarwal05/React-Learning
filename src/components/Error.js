import { useRouteError } from "react-router-dom";
// for telling the user the error he is getting by using router element.

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!!</h1>
      <h2>Somethong Went Wrong!!</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
