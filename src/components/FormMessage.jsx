import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/form.module.scss"

export default function FormMessage({
  message,
  errorMessage,
}){
  return (
    <>
    {(errorMessage||message) && <div className={clsx(style.formMessage, errorMessage && style.errorMessage)}>
      {errorMessage?errorMessage:message}
    </div>}
    </>
  )
}