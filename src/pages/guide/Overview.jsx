import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/guide.module.scss";
const TreeList = function ({ name, items }) {
  const fileExtention = (item) => {
    if (!item.items) {
      if (item.extension) {
        return item.extension
      }
      else if (name === "module") {
        return ".module.scss"
      } else {
        return ".scss"
      }
    }
  }
  return (
    <ul className={style.treeList}>
      {items.map((item, index)=><li key={index}>
        <i className={clsx("icon", item.items?"folder":"file")}></i>
        <span className={style.name}>{item.name}{ fileExtention(item)}</span>
        {item.desc&&<span className={style.desc}>{ item.desc }</span>}
        {item.items && <TreeList name={item.name} items={item.items} />}
      </li>)}
    </ul>
  )
}
export default function Overview() {
  const styleFiles = [
    {
      name: 'settings',
      desc: '기본 설정 및 변수와 함수, module 스타일 작성시 @use 필요',
      items: [
        {
          name: '_index',
          desc: 'settings style @forward',
        },
        {
          name: '_color',
          desc: 'color 변수',
        },
        {
          name: '_font',
          desc: 'global로 사용 되는 폰트 클래스, @extend 클래스로 사용',
        },
        {
          name: '_mixin',
          desc: 'global로 사용 되는 함수',
        },
      ]
    },
    {
      name: 'common',
      desc: '변수, 함수를 제외한 global로 사용되는 스타일',
      items: [
        {
          name: '_index',
          desc: 'common style @import',
        },
        {
          name: '_reset',
          desc: '초기화 스타일',
        },
        {
          name: '_spacing',
          desc: '',
        },
        {
          name: '_botton',
          desc: '',
        },
        {
          name: '_color',
          desc: 'settings/_color의 변수를 기반으로 클래스 생성',
        },
        {
          name: '_common',
          desc: '',
        },
        {
          name: '_font',
          desc: 'webfont 설정',
        },
        {
          name: '_form',
          desc: '',
        },
        {
          name: '_icon',
          desc: '',
        },
      ]
    },
    {
      name: 'module',
      desc: 'component module 에서 사용되는 스타일',
      items: [
        {
          name: 'accordion',
          desc: '',
        },
        {
          name: 'checkbox',
          desc: '',
        },
        {
          name: 'dialog',
          desc: '',
        },
        {
          name: 'form',
          desc: '',
        },
        {
          name: 'layout',
          desc: '',
        },
        {
          name: 'radio',
          desc: '',
        },
        {
          name: 'select',
          desc: '',
        },
        {
          name: 'tabs',
          desc: '',
        },
        {
          name: 'textfield',
          desc: '',
        },
      ]
    },
    {
      name: 'main',
      desc: 'settings, common 스타일을 @import해서 app에서 링크됨',
    },
    {
      name: 'theme',
      extension: '.ts',
      desc: 'mui 스타일 변경',
    },
  ]
  return (
    <section className="px-6">
      <h1>style 구조</h1>
      <TreeList items={styleFiles}/>
      <hr/>
      <h1>class 기본 네이밍 규칙</h1>
      <ul className={style.infoList}>
        <li>케밥 표기법 (ex: .dialog-wrap)</li>
        <li>모듈 스타일 클래스명 : 카멜표기법 (ex: style.dialogWrap)</li>
      </ul>
      <hr/>
      <h1>class 구조별 네이밍 규칙</h1>
      <div>
        <div className={style.structure}>
          .&-wrap &lt; .&-area &lt; .&-box
          <div>
            .&-header
          </div>
          <div>
            .&-container &lt; .&-inner &lt; .&-section
            <div>
              .&-group / .&-list
              <div>
                .cell
                <ul>
                  <li>.row</li>
                  <li>.col</li>
                </ul>
              </div>
              <div>
                .&-item
                <ul>
                  <li>.title</li>
                  <li>.content</li>
                  <li>.actions</li>
                </ul>
                <ul>
                  <li>.label</li>
                  <li>.value</li>
                </ul>
              </div>
              <div>
                .docu .num .name .date .img .text .desc
              </div>
            </div>
            <div>
              .&-aside
            </div>
          </div>
          <div>
            .&-footer
          </div>
        </div>
      </div>
      <hr/>
      <h1>class 상태값 네이밍 규칙</h1>
      <ul className={style.infoList}>
        <li>radio, tab : .checked </li>
        <li>accordion : .expanded </li>
        <li>default : .active </li>
      </ul>
    </section>
  )
}