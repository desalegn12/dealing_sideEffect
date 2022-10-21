import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Context from "./context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const data = {
  name: "user name",
  id: "user id",
  photoUrl: "some dummy url"
};

root.render(
  <StrictMode>
    <Context.Provider value={data}>
      <App />
    </Context.Provider>
  </StrictMode>
);
