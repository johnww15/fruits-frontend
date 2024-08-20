import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import Container from "@mui/system/Container";

export default function LoginForm({ setUser }) {
  //   const [loginData, setLoginData] = useState({
  //     email: "",
  //     password: "",
  //   });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const LoginData = {
      email: email,
      password: password,
    };
    console.log("logindata", LoginData);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="primary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account? <Link to="/signup">Register here</Link>
      </small>
    </Container>
  );
}
