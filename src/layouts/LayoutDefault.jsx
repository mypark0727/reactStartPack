import React from "react";
import Header from '@/components/Header'


function LayoutDefault({ children }) {
  return (
    <div className="wrap">
      <Header/>
      <div className="container">{children}</div>
      <footer>Default Footer</footer>
    </div>
  );
}

export default LayoutDefault;