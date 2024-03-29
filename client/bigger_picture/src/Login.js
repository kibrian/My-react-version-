
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, makeStyles, Typography,Link as Nv } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

   


const Login=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 2'}
     
    const [msg,setMsg] = useState('');
 
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
 
    const [user, setUser] = useState({
        Username: "",
        id_number:"",
        password:""
      });
 
      let history = useHistory(); 
 
      const {Username,id_number,password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
 
    const signIn = () =>
    {
 
      const users = { username };  // To Store Email in Localstore and send to Home Page 
 
       if(user.id_number === '')
       {
         alert('Email Field is empty')
       }
       else if(user.password === '')
       {
         alert('Pass Field is empty')
       }
 
       axios.post("http://localhost:8000/api/reactlogin/",user)
       .then(response => {
        setMsg(response.data);
        localStorage.setItem("users",response.data);
        history.push("/Home");
      });
    }
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(0),
        },
        title: {
          flexGrow: 1,
        },
      }));

 
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h5" className={classes.title} color="black">
              Booking App
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                    <h4 style={{color:"green"}}>{msg}</h4>
                </Grid>
                <TextField label='Username'  name="username" value={username}  onChange={e => onInputChange(e)} placeholder='Enter your Username' type='text' fullWidth required/>
                <TextField label='Id_number'  name="id_number" value={id_number}  onChange={e => onInputChange(e)} placeholder='Enter your Id_number' type='text' fullWidth required/>
                <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
              
                <Button type='submit' onClick={signIn} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
              
                <Typography > Don't Have Account ?
                  <NavLink to="Signup">
                   <span style={{marginLeft:"4px"}}>Singup</span>
                  </NavLink>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}
 
export default Login