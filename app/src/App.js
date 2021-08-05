import React from "react";

import "sass/base.scss";
import "sass/button.scss";
import "sass/dark.scss";
import "sass/icons.scss";
import "sass/theme.scss";
import "sass/type.scss";

import Header from "components/Header";
import About from "components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
