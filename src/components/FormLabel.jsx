import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/form.module.scss"

export default function FormLabel({
  label,
  required,
}){
  return (
    <>
    {label && <p className={clsx(style.formLabel)}>
      {label}{required && ' *'}
    </p>}
    </>
  )
}