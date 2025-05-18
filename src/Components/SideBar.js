//CSS-stylingen för sidebaren importeras hit.
import "./StyleSideBar.css";

export default function SideBar() {
  return (
    //Funktionen returnerar en "aside"-sektion med två länkar.
    <aside>
      <div className="SideNav">
        <a href="./SideBar.js">Länk 1</a>
      </div>

      <div className="SideNav">
        <a href="./SideBar.js">Länk 2</a>
      </div>
    </aside>
  );
}
