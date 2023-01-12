import Analytics from "analytics";
import React from "react";
import ReactDOM from "react-dom/client";
import { AnalyticsProvider } from "use-analytics";

import App from "./App";

import "./assets/css/index.css";

const analytics = Analytics({
  app: "awesome-app",
  plugins: [
    {
      name: "ai-user-tracking",
      page: ({ payload }) => {},
      track: ({ payload }) => {},
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <App />
    </AnalyticsProvider>
  </React.StrictMode>
);
