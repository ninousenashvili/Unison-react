import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/Main" element={<Main />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/News" element={<News />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Partners" element={<Partners />} />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
