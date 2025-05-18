//CSS-stylingen för navbaren importeras hit.
import "./StyleNavBar.css";
//Jag använde en hamburger-bar-ikon från Font Awesome.
//Jag installerade Font Awesome och importerade det biblioteket nedan.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//Jag använde mig av useState och importerade det här.
import { useState } from "react";

//Denna komponent exporteras till App.js.
export default function NavBar() {
  //Jag använde useState för att växla mellan att dölja
  //och att visa en dropdown-meny.
  const [visibility, setVisibility] = useState(false);

  //Den här funktionen "togglar" mellan att visa och dölja menyn.
  function ToggleMenu() {
    setVisibility(visibility ? false : true);
  }

  return (
    //Jag la en navbar längst upp på sidan.
    //Vid mobilläge så visas navbaren som en "hamburger"-meny.
    //När man klickar på den så visas en dropdown-meny.
    <div className="NavSection">
      <div className="NavBar">
        <div className="NavBox">
          <a href="./NavBar.js">Home</a>
        </div>
        <div className="NavBox">
          <a href="./NavBar.js">About</a>
        </div>
        <div className="NavBox">
          <a href="./NavBar.js">Contact Us</a>
        </div>
      </div>

      <div className="HamburgerBar">
        <button onClick={ToggleMenu}>
          <FontAwesomeIcon icon={faBars} size="4x" />
        </button>

        <div className={visibility ? "NavDropdown" : "NavDropdown hidden"}>
          <div className="NavBox2">
            <a href="./NavBar.js">Home</a>
          </div>
          <div className="NavBox2">
            <a href="./NavBar.js">About</a>
          </div>
          <div className="NavBox2">
            <a href="./NavBar.js">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
