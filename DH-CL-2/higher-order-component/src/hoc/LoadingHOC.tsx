// Componente HOC

import React from "react";
import Loading from "../components/Loading";

function LoadingHOC(WrappedComponent) {
  function wrapper(characters) {
    return (
      <>
        {characters.length === 0 ? (
          <Loading />
        ) : (
          <WrappedComponent {...characters} />
        )}
      </>
    );
  }
  return wrapper;
}

export default LoadingHOC;
