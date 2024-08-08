import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <p>home</p> },
      { path: "home", element: <p>home</p> },
      { path: "about", element: <p>about</p> },
      { path: "*", element: <p>404</p> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
