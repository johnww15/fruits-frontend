import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validation logic [checking if fields are not empty]
    if (!email.trim()) {
      setEmailError(true);
      return;
    }
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    const FormData = {
      email: email,
      password: password,
      isOwner: isOwner,
    };
    console.log("signupformdata", FormData);

    try {
      setUser(true); //to be updated later with userdata
      navigate("/");
    } catch {
      setError("The email is already in use. Please try again.");
    }
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
        <h2>Sign Up</h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          fullWidth
          value={email}
          error={emailError}
          sx={{ mb: 3 }}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          fullWidth
          value={password}
          error={passwordError}
          sx={{ mb: 3 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isOwner}
              onChange={(e) => setIsOwner(e.target.checked)}
              color="primary"
            />
          }
          label="Owner Account?"
        />
        <Button variant="outlined" color="primary" type="submit">
          Sign Up
        </Button>
      </form>
      <small>
        Already have an account? <Link to="/">Login here</Link>
      </small>
    </Container>
  );
}
