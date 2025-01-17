import React from "react";
import routes from "@/routes/routes";
export default function PageList() {
  return (
    <ul>
      {routes.map((route, index) => (
        <li key={index}>{route.path}</li>
      ))}
    </ul>
  );
}
