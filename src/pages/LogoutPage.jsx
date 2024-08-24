import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogoutPage({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <h1>Are you sure you want to logout?</h1>
      <Button color="primary" onClick={handleLogout}>
        logout
      </Button>
    </>
  );
}
