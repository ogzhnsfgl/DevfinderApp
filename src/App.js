import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import { UserProvider } from "./context/userDataContext";

import "./css/style.css";
function App() {
  return (
    <div className="container-wrapper ">
      <UserProvider>
        <SearchBar />
        <UserCard className="userCard-container" />
      </UserProvider>
    </div>
  );
}

export default App;
