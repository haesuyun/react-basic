import React, { useState } from "react";
import routes from "@/routes/routes";
export default function PageList() {
  const [path, setPath] = useState(null);
  return (
    <section>
      <div>
        <h1>Page List</h1>
        <ul>
          {routes.map((route, index) => (
            <li
              key={index}
              onClick={() => {
                setPath(route.path);
              }}
            >
              {route.path}
            </li>
          ))}
        </ul>
      </div>
      <div class="preview-wrap">
        <iframe src={path} frameborder="1" width="400px"></iframe>
      </div>
    </section>
  );
}
