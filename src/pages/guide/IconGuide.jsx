import React from "react";
import clsx from "clsx";
import style from "@/assets/style/module/guide.module.scss";
import { Opacity } from "@mui/icons-material";

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
  const whiteIcons = [
    'card',
    'customer',
    'heart',
    'home',
    'map-search',
    'wallet',
    'check',
    'close',
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
            <th>size</th>
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
            <th>default</th>
            <td>
              {icons.map(icon => {
                return <i key={icon} className={clsx("icon", icon)} aria-label=""></i>
              })}
            </td>
          </tr>
          <tr>
            <th>white</th>
            <td className="bg-grey-900 px-2">
              {whiteIcons.map(icon => {
                return <i key={icon} className={clsx("icon", icon+`-white`)} aria-label=""></i>
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
