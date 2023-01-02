import "./index.css";
import REACT_IMAGE from "./assets/ReactJS.png";

const h1 = document.createElement("h1");
h1.textContent = "I love JavaScript";

const img = document.createElement("img");
// h1.append(img);
img.src = REACT_IMAGE;
img.className = "js_image_css";

document.body.append(h1);
document.body.append(img);

[1, 2, 3].map((n) => n + 1);
