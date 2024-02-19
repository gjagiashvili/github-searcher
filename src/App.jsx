import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        const res = await axios
          .get(`https://api.github.com/users/${username}`)
          .catch((error) => {
            setUserData(null);
            setError("The user was not found. Please check the username.");
          });
        if (res) {
          setError(null);
          setUserData({
            id: res.data.id,
            login: res.data.login,
            bio: res.data.bio,
            avatar_url: res.data.avatar_url,
          });
        }
      }
    };
    fetchData();
  }, [username]);
  return (
    <>
      <div className="app-container">
        <input
          type="text"
          placeholder="Enter your github username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {error && <p>{error}</p>}

        {userData && <Card userData={userData} />}
      </div>
    </>
  );
}

export default App;
