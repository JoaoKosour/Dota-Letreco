import ReactDOM from "react-dom/client";
import App from "./App";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
  </BrowserRouter>
);
