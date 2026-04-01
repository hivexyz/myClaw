import "./style.css";
import { renderHomePage } from "./pages/homePage";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found");
}

renderHomePage(app);
