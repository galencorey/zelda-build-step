import { myButton, myImage } from "./elements";
import { sources } from "./constants";

let sourceIdx = 0;
myButton.onclick = () => {
  myImage.src = sources[sourceIdx % sources.length];
  sourceIdx++;
};
