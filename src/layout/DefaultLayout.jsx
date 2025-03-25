import React from "react";
import Header from "./Header";

export default function DefaultLayout({meta, children}){
  return (
    <>
      <Header meta={meta}/>
      <main>{children}</main>
    </>
  )
}