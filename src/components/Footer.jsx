// Libraries
import React from "react";


function Footer() {
  //variables
  const year = new Date().getFullYear();

  //return 
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
