import React from "react";
import clsx from "clsx";

export default function FormMessage({
  message,
  errorMessage,
}){
  return (
    <>
    {(errorMessage||message) && <div className={clsx("form-message", errorMessage && "error-message")}>
      {errorMessage?errorMessage:message}
    </div>}
    </>
  )
}