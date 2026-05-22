import style from "@/assets/style/module/guide.module.scss";
import clsx from "clsx";
// import { theme } from "@/assets/style/theme.ts";
export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Color",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}
export default function ColorGuide(){
  const colorGroup = [
    {
      color:'primary',
      contrastText: 'white',
    },
    {
      color:'secondary',
      contrastText: 'white',
    },
    {
      color:'tertiary',
      contrastText: 'white',
    },
    {
      color:'error',
      contrastText: 'white',
    },
    {
      color:'background',
      contrastText: 'black',
    },
    {
      color:'background-dialog',
      contrastText: 'black',
    },
    {
      color:'white',
      contrastText: 'black',
    },
    {
      color:'black',
      contrastText: 'white',
    },
    {
      color:'grey',
      // contrastText: 'black',
    },
    {
      color:'grey-50',
      // contrastText: 'black',
    },
    {
      color:'grey-100',
      // contrastText: 'black',
    },
    {
      color:'grey-200',
      // contrastText: 'black',
    },
    {
      color:'grey-300',
      // contrastText: 'black',
    },
    {
      color:'grey-400',
      // contrastText: 'black',
    },
    {
      color:'grey-500',
      // contrastText: 'black',
    },
    {
      color:'grey-600',
      contrastText: 'white',
    },
    {
      color:'grey-700',
      contrastText: 'white',
    },
    {
      color:'grey-800',
      contrastText: 'white',
    },
    {
      color:'grey-900',
      contrastText: 'white',
    },
  ]
  return (
    <section>
      <table className={style.table}>
        <thead>
          <tr>
            <th>colorVar</th>
            <th>text-color</th>
            <th>bg-color</th>
          </tr>
        </thead>
        <tbody>
          {colorGroup.map((item, index)=>
          <tr key={index}>
            <th>--{item.color}</th>
            <td className={clsx('text-' + item.color + ' px-2','bg-'+item.contrastText)}
            >text-{item.color}</td>
            <td className={clsx('bg-'+item.color+' px-2','text-'+item.contrastText)}>bg-{item.color} </td>
          </tr>
          )}
        </tbody>
      </table>
    </section>
  )
};