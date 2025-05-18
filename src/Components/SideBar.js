//CSS-stylingen för sidebaren importeras hit.
import "./StyleSideBar.css";

export default function SideBar() {
  return (
    //Funktionen returnerar en "aside"-sektion med två länkar.
    <aside>
      <div className="SideNav">
        <a href="https://github.com/IdaEklund/User-API-kommunicerar-med-backend">
          Uppgift 5
        </a>
      </div>

      <div className="SideNav">
        <a href="https://github.com/IdaEklund/The-Dashboard">Uppgift 6</a>
      </div>
    </aside>
  );
}
