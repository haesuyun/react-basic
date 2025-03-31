import React from "react";
import style from "@/assets/style/module/guide.module.scss";
export default function ColorGuide(){
  const colorGroup = [
    {
      color:'primary',
      contrastText: '#fff',
    },
    {
      color:'secondary',
      contrastText: '#fff',
    },
    {
      color:'tertiary',
      contrastText: '#fff',
    },
    {
      color:'white',
      contrastText: '#000',
    },
    {
      color:'black',
      contrastText: '#fff',
    },
    {
      color:'grey',
      contrastText: '#000',
    },
    {
      color:'grey-50',
      contrastText: '#000',
    },
    {
      color:'grey-100',
      contrastText: '#000',
    },
    {
      color:'grey-200',
      contrastText: '#000',
    },
    {
      color:'grey-300',
      contrastText: '#000',
    },
    {
      color:'grey-400',
      contrastText: '#000',
    },
    {
      color:'grey-500',
      contrastText: '#000',
    },
    {
      color:'grey-600',
      contrastText: '#fff',
    },
    {
      color:'grey-700',
      contrastText: '#fff',
    },
    {
      color:'grey-800',
      contrastText: '#fff',
    },
    {
      color:'grey-900',
      contrastText: '#fff',
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
            <td >${item.color}</td>
            <td className={'text-'+item.color} style={{backgroundColor : item.contrastText}}>text-{item.color}</td>
            <td className={'bg-'+item.color} style={{color : item.contrastText}}>bg-{item.color} </td>
          </tr>
          )}
        </tbody>
      </table>
    </section>
  )
};