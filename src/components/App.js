import React from "react";
import { ThemeProvider } from "../theme/ThemeContext";

function App({ children }) {
  return (
    <ThemeProvider>
      <div>{children}</div>
    </ThemeProvider>
  );
}

export default App;
