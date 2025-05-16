import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Main;
