import React, { useState } from 'react';
import { 
    TextField,
    InputAdornment,
    IconButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button
} from "@mui/material";
import {
    makeStyles,
} from '@material-ui/core';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Background from '../../assets/XXXL.jpg'

const useStyles = makeStyles({
    login: {
        textAlign: 'center',
        width: '100%',
    },
    login_form: {
        fontSize: 36,
        borderRadius: 20,
        filter: 'drop-shadow(-15px 0 18px rgba(0,0,0,.25))',
        padding: '75px 80px',
        backgroundColor: '#fff',
        zIndex: 5,
        maxWidth: 480,
        height: 300
    },
    login_card: {
        position: 'absolute',
        width: 568,
        height: 650,
        right: -200,
        top: -50,
        borderRadius: 24,
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        fontFamily: "Montserrat",
        lineHeight: 1
    },
    login_container: {
        position: 'relative',
        width: 700,
        display: 'flex',
        margin: 'auto'
    },
    title: {
        marginBottom: 100,
        fontSize: 42,
        color: '#171f28',
    },
    title2: {
        marginTop: 0,
        marginBottom: 20,
    }
});

const Login = () => {
    const classes = useStyles()
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        userName: ''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return <div className={classes.login}>
        <h1 className={classes.title}>Корпоративный портал ГГНТУ</h1>
        <div className={classes.login_container}>
            <div className={classes.login_form}>
                <h3 className={classes.title2}>Авторизация</h3>
                <div>
                    <TextField
                        style={{ width: 200, marginBottom: 15 }}
                        label="Имя пользователя"
                        value={values.userName}
                        onChange={handleChange('userName')}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        style={{ width: 200 }} 
                        label="Пароль"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        variant="standard"
                    />
                </div>
                <div>
                    <FormGroup style={{ color: 'grey', margin: '20px 0'}}>
                        <FormControlLabel variant="standard" control={<Checkbox size="small" />} label="Запомнить меня" />
                    </FormGroup>
                </div>
                <div>
                    <a href="/">
                        <Button variant="contained" style={{ color: '#fff', backgroundColor: '#212D3A', width: 80 }}>
                            Вход
                        </Button>
                    </a>
                </div>
            </div>
            <div className={classes.login_card}>
                <div style={{ width: '100%', height:'100%', backgroundColor: 'black', opacity: 0.5 }} />
            </div>
        </div>
    </div>
};

export default Login;