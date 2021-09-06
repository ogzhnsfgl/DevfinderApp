import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import "./css/style.css";
function App() {
  return (
    <div className="container-wrapper ">
      <SearchBar />
      <UserCard className="userCard-container" />
    </div>
  );
}

export default App;
