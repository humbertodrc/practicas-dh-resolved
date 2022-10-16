// Componente HOC

import React from "react";
import Loading from "../components/Loading";

function LoadingHOC(WrappedComponent: any) {
  function wrapper(props: any) {
    console.log(props);
    return (
      <>
        {props.characters.length === 0 ? (
          <Loading />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  }
  return wrapper;
}

export default LoadingHOC;
