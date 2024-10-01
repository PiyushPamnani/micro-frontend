import { registerApplication, start } from "single-spa";
import React from "react";
import ReactDOM from "react-dom";
import Toast from "./Toast/Toast";

const rootDomElement = document.getElementById("toast-root");
ReactDOM.render(<Toast />, rootDomElement);

registerApplication({
  name: "@piyush/react",
  app: () => System.import("@piyush/react"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@piyush/vue",
  app: () => System.import("@piyush/vue"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@piyush/angular",
  app: () => System.import("@piyush/angular"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
