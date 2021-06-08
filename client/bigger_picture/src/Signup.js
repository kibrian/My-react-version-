import React from 'react'
import { Grid,Paper, IconButton, AppBar, Toolbar, MenuIcon, Avatar, TextField, MenuItem, Button, makeStyles, Typography, Select, FormControl} from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import InputLable from '@material-ui/core/InputLabel'
import axios from 'axios';

 
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
   
 
const Signup=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:480, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
 
    const[errors,setErrors] = useState('');
    const [user, setUser] = useState({
        username: "",
        id_number: "",
        phoneNo:"",
        password:"",
        location:""
      });
      
      const {username, id_number, phoneNo, password,location} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      
  const [value,setValue] = React.useState()

  const handlechange = (e)=>{
    setValue(e.target.value)
  }
 
   async function  signup()
       {
        let result = await axios.post("http://localhost:8000/api/register",user)
        .then((response) => {
            console.log('Everything is awesome.');
        }).catch((error) => {
            console.warn('Not good man :(');
        });
        setErrors('Registration Successful')
        setUser({Username:"",id_number:"", phoneNo:"",location:"",password:""}) // To Clear all fields
 
        }
     
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign Up</h2>
                    <h3 style={{color:"green"}}>{errors}</h3>
                </Grid>
                
                <TextField label='Username' name="username" value={username} onChange={e => onInputChange(e)} placeholder='Enter Name' type='text' fullWidth required/>
                <TextField label='id_number'  name="id_number" value={id_number}  onChange={e => onInputChange(e)} placeholder='Enter your Id_number' type='number' fullWidth required/>
                <TextField label='phoneNo'  name="phoneNo" value={phoneNo}  onChange={e => onInputChange(e)} placeholder='Enter your phoneNo' type='number' fullWidth required/>
                <TextField
          id="select-demo"
          select
          fullWidth
          label="Location"
          name="location"
          value={value}
          onChange={handlechange}
          placeholder='Enter location'
          required
        //   helperText="Please select your location"
        >
          <MenuItem value={'Rongai'}>Rongai</MenuItem>
          <MenuItem value={'Ngong'}>Ngong</MenuItem>
          <MenuItem value={'Kitengela'}>Kitengela</MenuItem>
        </TextField>
                <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
                
                <Button type='submit' onClick={signup} color='primary' variant="contained" style={btnstyle} fullWidth>Singup</Button>
              
                <Typography>Already Have an account?
                   <NavLink to="/">
                       <span style={{marginLeft:"4px"}}>Login</span>
                  </NavLink>
                </Typography>
            </Paper>
        </Grid>
    )
}

 
export default Signup