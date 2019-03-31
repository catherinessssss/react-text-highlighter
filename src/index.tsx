import * as React from "react";
import { render } from "react-dom";


import Highlighter from "@catherinessssss/react-text-highlighter";

render((
  <Highlighter searchWord="hi" wholeText="hi1hihi2" />
), document.getElementById("app") as HTMLElement);
