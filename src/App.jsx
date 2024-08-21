import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "../src/context/AppContext";
import AuthPage from "./pages/AuthPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import { getUser } from "./utilities/Users/users-service";
import OrdersPage from "./pages/OrdersPage";
import HistoryPage from "./pages/HistoryPage";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./pages/CartPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <AppProvider>
      {user ? (
        <>
          <div className="flex">
            <NavBar user={user} />
            <Routes>
              <Route
                path="/"
                element={<HomePage user={user} setUser={setUser} />}
              />
              <Route
                path="/orders"
                element={<OrdersPage user={user} setUser={setUser} />}
              />
              <Route
                path="/history"
                element={<HistoryPage user={user} setUser={setUser} />}
              />
              <Route
                path="/cart"
                element={<CartPage user={user} setUser={setUser} />}
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
    </AppProvider>
  );
}

export default App;
