import Fnb from "./Fnb";
import Footer from "./Footer";
import Header from "./Header";

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
