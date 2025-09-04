import Header from "./header.jsx"
import Footer from "./footer.jsx"

import UserGreeting from "./userGreeting.jsx"
import { useState } from "react";

function App() {

  return (
    <>
      <Header/>
      <UserGreeting isLoggedIn={true} userName="MyName"/>
      <Footer/>
    </>
  );
}

export default App
