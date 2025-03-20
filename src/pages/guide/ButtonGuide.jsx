import React from "react";
import style from "@/assets/style/module/guide.module.scss";
export default function ButtonGuide() {
  return (
    <section>
      <h1 className={style.h1}>Button</h1>
      <table className={style.table}>
        <thead>
          <tr>
            <th className="text-center">type</th>
            <th>size</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>icon</th>
            <td>xsmall-12px</td>
            <td>
              <i className="icon icon-xsmall close-black" aria-label="닫기"></i>
              <i className="icon icon-xsmall arrow-black" aria-label="이동"></i>
              <button type="button" className="button-text button-small">
                <i
                  className="icon icon-xsmall close-black"
                  aria-label="닫기"
                ></i>
                Button small
              </button>
              <button type="button" className="button-text button-small">
                Button small
                <i
                  className="icon icon-xsmall close-black"
                  aria-label="닫기"
                ></i>
              </button>
              <button type="button">
                <i
                  className="icon icon-xsmall close-black"
                  aria-label="닫기"
                ></i>
              </button>
              <a href="#none">
                <i
                  className="icon icon-xsmall close-black"
                  aria-label="닫기"
                ></i>
              </a>
            </td>
          </tr>
          <tr>
            <th>icon</th>
            <td>small-16px</td>
            <td>
              <i className="icon icon-small close-black" aria-label="닫기"></i>
              <button type="button" className="button-text button-small">
                <i
                  className="icon icon-small close-black"
                  aria-label="닫기"
                ></i>
                Button
              </button>
              <button type="button" className="button-text button-small">
                Button
                <i
                  className="icon icon-small close-black"
                  aria-label="닫기"
                ></i>
              </button>
            </td>
          </tr>
          <tr>
            <th rowSpan="2">icon</th>
            <td>medium-18px(default)</td>
            <td>
              <i className="icon close-black" aria-label="닫기"></i>
              <i className="icon down-black" aria-label="열기"></i>
              <i className="icon arrow-black" aria-label="이동"></i>
              <i className="icon delete-gray" aria-label="삭제"></i>
              <button type="button">
                <i className="icon close-black" aria-label="닫기"></i>
              </button>
              <button type="button" className="button-text button-small">
                <i className="icon close-black" aria-label="닫기"></i>
                Button
              </button>
              <button type="button" className="button-text button-small">
                Button
                <i className="icon close-black" aria-label="닫기"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>medium color white</td>
            <td className="bg-grey-900">
              <i className="icon close-white" aria-label="닫기"></i>
            </td>
          </tr>
          <tr>
            <th>icon</th>
            <td>large-24px</td>
            <td>
              <button type="button" className="button-text">
                <i
                  className="icon icon-large close-black"
                  aria-label="닫기"
                ></i>
                Button
              </button>
              <button type="button" className="button-text">
                Button
                <i
                  className="icon icon-large close-black"
                  aria-label="닫기"
                ></i>
              </button>
            </td>
          </tr>
          <tr>
            <th>icon</th>
            <td>xlarge-32px</td>
            <td>
              <i className="icon icon-xlarge close-black" aria-label="닫기"></i>
              <button type="button" className="button-text">
                <i
                  className="icon icon-xlarge close-black"
                  aria-label="닫기"
                ></i>
                Button
              </button>
              <button type="button">
                <i
                  className="icon icon-xlarge close-black"
                  aria-label="닫기"
                ></i>
              </button>
              <a href="#none">
                <i
                  className="icon icon-xlarge close-black"
                  aria-label="닫기"
                ></i>
              </a>
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
            <td>medium-42px(default)</td>
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
            <td>large-56px</td>
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
