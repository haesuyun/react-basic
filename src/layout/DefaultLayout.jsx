import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Fnb from "./Fnb";

export default function DefaultLayout({meta, children}){
  return (
    <>
      <Header meta={meta}/>
      <main>{children}</main>
      <Footer meta={meta}/>
      <Fnb meta={meta}/>
    </>
  )
}