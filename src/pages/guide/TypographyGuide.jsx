import React from "react";
import style from "@/assets/style/module/guide.module.scss";
export default function TypographyGuide() {
  const HeadingSizes = [36, 32, 30, 28, 26];
  const titleSizes = [24, 22, 20, 18, 16, 14, 13];
  const buttonSizes = [24, 22, 20, 18, 16, 14, 13];
  const textSizes = [18, 16, 14, 13, 12, 11, 10];
  return (
    <section>
      <h1 className={style.h1}>Typography</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th>className</th>
            <th>font size</th>
            <th>line-height</th>
            <th>font weight</th>
            <th>font family</th>
          </tr>
        </thead>
        <tbody>
          {HeadingSizes.map((item, index) => (
            <tr key={index}>
              <td className={"heading-" + item}>.heading-{item}</td>
              <td>{item}px</td>
              <td>{Math.trunc(item * 1.4)}px / 1.4em</td>
              <td>700</td>
              <td>pretendard</td>
            </tr>
          ))}
          {titleSizes.map((item, index) => (
            <tr key={index}>
              <td className={"title-" + item}>.title-{item}</td>
              <td>{item}px</td>
              <td>{Math.trunc(item * 1.4)}px / 1.4em</td>
              <td>700</td>
              <td>pretendard</td>
            </tr>
          ))}
          {buttonSizes.map((item, index) => (
            <tr key={index}>
              <td className={"button-" + item}>.button-{item}</td>
              <td>{item}px</td>
              <td>{Math.trunc(item * 1.4)}px / 1.4em</td>
              <td>700</td>
              <td>pretendard</td>
            </tr>
          ))}
          {textSizes.map((item, index) => (
            <tr key={index}>
              <td className={"text-" + item}>.text-{item}</td>
              <td>{item}px</td>
              <td>{Math.trunc(item * 1.4)}px / 1.4em</td>
              <td>400</td>
              <td>pretendard</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
