import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
  return (
    <>
      <div>
        <h1>Oopssss Page not found</h1>
      </div>
      <h3>{err.status}:{err.statusText}</h3>
    </>
  );
};

export default Error;
