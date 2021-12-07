import "./App.css";
import Profile from "./profile/comProfile";
import photo from "./profile/photo.jpg";

//variables
const para =
  " web devloper";
const alertName = alert("Amine hajali");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          fullName="Amine hajali"
          bio={para}
          profession="web developer"
          alert={alertName}
        >
          <img src={photo} alt="Amine" height="300px" />
        </Profile>
      </header>
    </div>
  );
}

export default App;
