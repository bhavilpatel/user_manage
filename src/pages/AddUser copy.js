import { Helmet } from 'react-helmet-async';
import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  TextField,
  Box,
  Radio,

} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const navigate = useNavigate()
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [salary, setsalary] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [postalcode, setpostalcode] = useState("");

  function submit() {
    navigate("/dashboard/user2")
  }

  const submitform = () => {
    const data = { username, firstname, lastname, address, email, number, salary, country, city, postalcode }
    console.log(data);
  };
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add User
          </Typography>
        </Stack>
        <Card>
          <Box
            component="form"
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                error={false}
                sx={{ m: 1, width: '32ch' }}
                id="filled-required"
                label="User Name"
                variant="filled"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                helperText={1 === 2 ? "Incorrect entry." : ""}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-required"
                label="First Name"
                variant="filled"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-required"
                label="Last Name"
                autoComplete="current-password"
                variant="filled"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '48ch' }}
                id="filled-required"
                label="Address"
                variant="filled"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '49ch' }}
                id="filled-required"
                label="Email"
                variant="filled"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-number"
                label="Number"
                type="number"
                variant="filled"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-number"
                label="Salary "
                type="number"
                variant="filled"
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-required"
                label="Country"
                variant="filled"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-required"
                label="City"
                variant="filled"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
              <TextField
                sx={{ m: 1, width: '32ch' }}
                id="filled-number"
                label="Postal Code"
                type="number"
                variant="filled"
                value={postalcode}
                onChange={(e) => setpostalcode(e.target.value)}
              />

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>
            <Button variant="contained" color="success" onClick={() => submit()}>SUBMIT</Button>
          </Box>
        </Card>
      </Container>


    </>
  );
}