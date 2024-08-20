import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import { getUser } from "./utilities/Users/users-service";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    localStorage.clear();
    setUser(getUser());
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="flex">
            <Routes>
              <Route
                path="/"
                element={<HomePage user={user} setUser={setUser} />}
              />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <div className="flex">
            <Routes>
              <Route
                path="/"
                element={<AuthPage setUser={setUser} user={user} />}
              />
              <Route
                path="/signup"
                element={<SignupPage setUser={setUser} user={user} />}
              />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
