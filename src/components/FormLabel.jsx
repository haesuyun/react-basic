import React from "react";
import clsx from "clsx";

export default function FormLabel({
  label,
  required,
}){
  return (
    <>
    {label && <p className={clsx("form-label")}>
      {label}{required && ' *'}
    </p>}
    </>
  )
}