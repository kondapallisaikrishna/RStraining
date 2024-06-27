import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
} from "@mui/material";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  //   console.log('Remember Me:', rememberMe);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      username,
      password,
      rememberMe,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        loginData
      );
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="flexlogin"></div>
      <div className="logindiv">
        <Container maxWidth="xs">
          <Box
            sx={{
              p: 3,
              mty: 0,
              bgcolor: "white",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit} id="loginForm">
              <TextField
                fullWidth
                margin="normal"
                id="login-username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                id="login-password"
                label="Password"
                type="password"
                variant="outlined"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="remember-me"
                    name="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                }
                label="Remember Me"
              />
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" type="submit" fullWidth>
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
}
