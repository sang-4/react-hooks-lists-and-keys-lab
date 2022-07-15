import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map((link, index) => {
    return <a href={'#'+link} key={index}>{link}</a>
  })

  return <nav>{link}</nav>;
}

export default NavBar;
