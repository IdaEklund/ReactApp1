//Nedan importeras dom två komponenterna.
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";

//I den här funktionen, appens huvudfunktion, kallar man på dom två komponenterna.
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
