import { Helmet } from 'react-helmet-async';
import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';

import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  Radio,
  Switch,
  Checkbox,
  FormGroup,

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

  const [formValues, setFormValues] = useState({
    username: {
      value: '',
      error: false,
      errorMessage: 'You must enter a username',
    },
    firstname: {
      value: '',
      error: false,
      errorMessage: 'You must enter a firstname'
    },
    lastname: {
      value: '',
      error: false,
      errorMessage: 'You must enter a lastname'
    },
    email: {
      value: '',
      error: false,
      errorMessage: 'You must enter a email'
    },
    address: {
      value: '',
      error: false,
      errorMessage: 'You must enter a address'
    },
    number: {
      value: '',
      error: false,
      errorMessage: 'You must enter a number'
    },
    company: {
      value: '',
      error: false,
      errorMessage: 'You must enter a company'
    },
    role: {
      value: '',
      error: false,
      errorMessage: 'You must enter a role'
    },
    city: {
      value: '',
      error: false,
      errorMessage: 'You must enter a city'
    },
    state: {
      value: '',
      error: false,
      errorMessage: 'You must enter a state'
    },
    pincode: {
      value: '',
      error: false,
      errorMessage: 'please select your pincode'
    },
    country: {
      value: '',
      error: false,
      errorMessage: 'please select your country'
    },
    date: {
      value: '',
      error: false,
      errorMessage: 'please select your date'
    },
    radio: {
      value: '',
      error: false,
      errorMessage: 'please select your radio'
    },
    checkbox: {
      value: '',
      error: false,
      errorMessage: 'please select your checkbox'
    }
  })

  function submit() {
    navigate("/dashboard/user2")
  }

  const submitform = () => {
    const data = { username, firstname, lastname, address, email, number, salary, country, city, postalcode }
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value
      }
    })
  }

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const formFields = Object.keys(formValues);
    
    let newFormValues = { ...formValues }
    

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === '') {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true
          }
        }
      }

    }

    setFormValues(newFormValues)
    console.log(formValues)
  }

  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Container fixed>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Add User
          </Typography>
        </Stack>

        <Card>
          <form noValidate onSubmit={handleSubmit} >
            <Box >

              <div>
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="User Name"
                  variant="outlined"
                  name="username"
                  value={formValues.username.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.username.error}
                  helperText={formValues.username.error && formValues.username.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="firstname"
                  variant="outlined"
                  name="firstname"
                  value={formValues.firstname.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.firstname.error}
                  helperText={formValues.firstname.error && formValues.firstname.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="lastname"
                  variant="outlined"
                  name="lastname"
                  value={formValues.lastname.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.lastname.error}
                  helperText={formValues.lastname.error && formValues.lastname.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '48ch' }}
                  id="filled-required"
                  label="email"
                  variant="outlined"
                  name="email"
                  value={formValues.email.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.email.error}
                  helperText={formValues.email.error && formValues.email.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '49ch' }}
                  id="filled-required"
                  label="address"
                  variant="outlined"
                  name="address"
                  value={formValues.address.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.address.error}
                  helperText={formValues.address.error && formValues.address.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="number"
                  variant="outlined"
                  name="number"
                  value={formValues.number.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.number.error}
                  helperText={formValues.number.error && formValues.number.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="company"
                  variant="outlined"
                  name="company"
                  value={formValues.company.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.company.error}
                  helperText={formValues.company.error && formValues.company.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="role"
                  variant="outlined"
                  name="role"
                  value={formValues.role.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.role.error}
                  helperText={formValues.role.error && formValues.role.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="city"
                  variant="outlined"
                  name="city"
                  value={formValues.city.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.city.error}
                  helperText={formValues.city.error && formValues.city.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="state"
                  variant="outlined"
                  name="state"
                  value={formValues.state.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.state.error}
                  helperText={formValues.state.error && formValues.state.errorMessage}
                />
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  label="pincode"
                  variant="outlined"
                  name="pincode"
                  value={formValues.pincode.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.pincode.error}
                  helperText={formValues.pincode.error && formValues.pincode.errorMessage}
                />
                <Box sx={{ m: 1, width: '49ch' }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">country</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formValues.country.value}
                      label="country"
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      name="country"

                    >
                      <MenuItem value={'India'}>India</MenuItem>
                      <MenuItem value={'America'}>America</MenuItem>
                      <MenuItem value={'Canada'}>Canada</MenuItem>
                      <MenuItem value={'Australia'}>Australia</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <TextField
                  sx={{ m: 1, width: '32ch' }}
                  id="filled-required"
                  type="date"
                  variant="outlined"
                  name="date"
                  value={formValues.date.value}
                  onChange={(e) => handleChange(e)}
                  error={formValues.date.error}
                  helperText={formValues.date.error && formValues.date.errorMessage}
                />
              </ div>
              <div>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="radio"
                    value={formValues.radio.value}
                    onChange={(e) => handleChange(e)}
                    error={formValues.radio.error}
                    helperText={formValues.radio.error && formValues.radio.errorMessage}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>Deactive</Typography>
                  <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                  <Typography>Active</Typography>
                </Stack>
                <FormGroup>
                  <FormControlLabel control={<Checkbox 
                    value={formValues.checkbox.value}
                    onChange={(e) => handleChange(e)}
                    error={formValues.checkbox.error}
                    helperText={formValues.checkbox.error && formValues.checkbox.errorMessage}
                  />} label="All turms and condition are apply" />
                </FormGroup>
              </div>
              <Button type="submit" variant="contained" color="success" >SUBMIT</Button>
            </Box>
          </form>
        </Card>
      </Container>


    </>
  );
}