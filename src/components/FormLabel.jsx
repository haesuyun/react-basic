import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/form.module.scss"

export default function FormLabel({
  label,
  id,
  htmlFor,
  required,
  className,
}){
  return (
    <>
      {label && <label className={clsx("label", style.formLabel, className)} id={id} htmlFor={htmlFor}>
      {label}{required && ' *'}
    </label>}
    </>
  )
}