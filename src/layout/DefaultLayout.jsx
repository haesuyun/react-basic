import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({meta, children}){
  return (
    <>
      <Header meta={meta}/>
      <main>{children}</main>
      <Footer meta={meta}/>
    </>
  )
}