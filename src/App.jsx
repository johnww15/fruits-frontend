import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={<AuthPage setUser={setUser} user={user} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
