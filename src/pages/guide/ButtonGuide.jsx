import React from "react";
import style from "@/assets/style/module/guide.module.scss";
function ButtonGuide() {
  return (
    <section>
      <h1 className={style.h1}>Button</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th>type</th>
            <th>size</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>icon</th>
            <td>small-16px</td>
            <td>
              <button type="button" className="button-text button-small">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <th>text</th>
            <td>small-14px</td>
            <td>
              <button type="button" className="button-text button-small">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <th>text</th>
            <td>medium-16px(default)</td>
            <td>
              <button type="button" className="button-text">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <th>text</th>
            <td>large-18px</td>
            <td>
              <button type="button" className="button-text button-large">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <th>containd(default)</th>
            <td>small-24px</td>
            <td>
              <button type="button" className="button-small bg-primary">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <th>containd(default)</th>
            <td>medium-32px(default)</td>
            <td>
              <button type="button" className="button bg-primary">
                Button
              </button>
              <button type="button" className="button bg-secondary">
                Button
              </button>
              <button type="button" className="button bg-tertiary">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <th>containd(default)</th>
            <td>large-48px</td>
            <td>
              <button type="button" className="button-large bg-primary">
                Button
              </button>
              <button type="button" className="button-large bg-secondary">
                Button
              </button>
              <button type="button" className="button-large bg-tertiary">
                Button
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default ButtonGuide;
