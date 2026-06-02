import style from "@/assets/style/module/guide.module.scss";
import Icon from "@/components/Icon";
import clsx from "clsx";

export const meta = {
  depth01: "guide",
  depth02: "",
  depth03: "",
  id: "",
  name: "Icon",
  author: "",
  state: "완료",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  }
}

export default function IconGuide() {
  const sizes = [
    'icon-xsmall',
    'icon-small',
    'icon',
    'icon-large',
    'icon-xlarge',
  ]
  const icons = [
    'arrow-right',
    'arrow-left',
    'close', 
    'close-circle', 
    'check', 
    'check-circle', 
    'check-circle-outline',
    'home',
    'menu',
    'setting', 
    'search', 
    'prev', 
    'next', 
    'up', 
    'down', 
    'user',
    'bookmark',
    'bookmark-outline',
    'heart',
    'heart-outline',
    'radio',
    'radio-outline',
    'folder',
    'file',
  ]
  const oneModeIcons = [
    'card',
    'customer',
    'map-search',
    'wallet',
    'my-account', 
  ]
  return (
    <section>
      <table className={style.table}>
        <thead>
          <tr>
            <th className="text-center">type</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>svg (loaing)</th>
            <td>
              <Icon icon={null} size="xlarge" color="primary"/>
            </td>
          </tr>
          <tr>
            <th>svg (size)</th>
            <td>
              <Icon icon="search" size="xsmall" color="primary"/>
              <Icon icon="search" size="small" color="primary"/>
              <Icon icon="search" color="primary"/>
              <Icon icon="search" size="large" color="primary"/>
              <Icon icon="search" size="xlarge" color="primary"/>
            </td>
          </tr>
          <tr>
            <th>svg (color)</th>
            <td>
              <Icon icon="search" size="xlarge" color="primary"/>
              <Icon icon="search" size="xlarge" color="secondary"/>
              <Icon icon="search" size="xlarge" color="error"/>
            </td>
          </tr>
          <tr>
            <th>class (size)</th>
            <td>
              {sizes.map(size => {
                return (
                  <div key={size}>
                    <p>{size}</p>
                    <i  className={clsx("close", size)} aria-label=""></i>
                  </div>
                )
              })}
            </td>
          </tr>
          <tr>
            <th>one Mode</th>
            <td className="bg-grey-500 px-2">
              {oneModeIcons.map(icon => {
                return <i key={icon} className={clsx("icon", icon)} aria-label=""></i>
              })}<br/>
              {oneModeIcons.map(icon => {
                return <i key={icon} className={clsx("icon", icon+`-white`)} aria-label=""></i>
              })}
            </td>
          </tr>
          <tr>
            <th>light</th>
            <td>
              {icons.map(icon => {
                return <i key={icon} className={clsx("icon", icon)} aria-label=""></i>
              })}

            </td>
          </tr>
          <tr>
            <th>dark</th>
            <td className="bg-grey-500 px-2">
              {icons.map(icon => {
                return <i key={icon} className={clsx("icon", icon+`-white`)} aria-label=""></i>
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="py-6 px-4">
        <a href="https://fonts.google.com/icons?icon.set=Material+Icons&selected=Material+Icons+Outlined:search:&icon.size=24&icon.color=%231f1f1f&icon.platform=web" target="_blank" className="button bg-primary">Icon 출처 : Google Font</a>
      </div>
    </section>
  );
}
