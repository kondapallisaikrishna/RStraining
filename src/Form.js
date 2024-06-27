import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import "./Form.css";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      username,
      password,
      confirmPassword,
      email,
      phoneNumber,
      dob,
      gender,
      hobbies,
      country,
      bio,
      agreeToTerms,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleHobbiesChange = (event) => {
    const value = event.target.value;
    setHobbies((prevHobbies) =>
      prevHobbies.includes(value)
        ? prevHobbies.filter((hobby) => hobby !== value)
        : [...prevHobbies, value]
    );
  };

  return (
    <div className="imgcontainer">
      <div className="container"></div>

      <div className="flexdiv">
        <Container maxWidth="sm" className="main-container">
          <Box
            className="form-container"
            sx={{
              mt: 5,
              p: 3,
              bgcolor: "white",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Register Now
            </Typography>
            <form id="registrationForm" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                id="fName"
                label="Full Name"
                variant="outlined"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="uName"
                label="Username"
                variant="outlined"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="pass"
                label="Password"
                type="password"
                variant="outlined"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="cpass"
                label="Confirm Password"
                type="password"
                variant="outlined"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="gmail"
                label="Email Address"
                type="email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="pnum"
                label="Phone Number"
                type="tel"
                variant="outlined"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                id="DOB"
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Hobbies</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="reading"
                        checked={hobbies.includes("reading")}
                        onChange={handleHobbiesChange}
                      />
                    }
                    label="Reading"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="traveling"
                        checked={hobbies.includes("traveling")}
                        onChange={handleHobbiesChange}
                      />
                    }
                    label="Traveling"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="cooking"
                        checked={hobbies.includes("cooking")}
                        onChange={handleHobbiesChange}
                      />
                    }
                    label="Cooking"
                  />
                </FormGroup>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                id="picture"
                type="file"
                variant="outlined"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="country-label">Select Your Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="Ctry"
                  value={country}
                  label="Select Your Country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="ind">India</MenuItem>
                  <MenuItem value="rus">Russia</MenuItem>
                  <MenuItem value="ADE">Dubai</MenuItem>
                  <MenuItem value="ir">Iran</MenuItem>
                  <MenuItem value="npl">Nepal</MenuItem>
                  <MenuItem value="sa">South Africa</MenuItem>
                  <MenuItem value="aus">Australia</MenuItem>
                  <MenuItem value="sl">Sri Lanka</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                id="info"
                label="Bio"
                multiline
                rows={4}
                variant="outlined"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="tm"
                    name="terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                }
                label="Agree to Terms and Conditions"
              />
              <Box
                sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="outlined" type="reset">
                  Reset
                </Button>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
}
