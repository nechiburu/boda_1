import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from 'next/router'
import Link from "next/link";
// import { GoogleLogin } from 'react-google-login';


const LoginPage = (props) => {

    const router = useRouter()


    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('Has ingresado correctamente!');
                router.push('/')
            }
        } else {
            validator.showMessages();
            toast.error('No puedes dejar un campo vacío!');
        }
    };

    const handleFacebookLogin = () => {
        const appId = '618464957012043'; // Reemplaza con tu ID de aplicación de Facebook
        const redirectUri = 'localhost:3000'; // Reemplaza con tu URL de redirección después del inicio de sesión

        // URL para iniciar sesión con Facebook
        const loginUrl = `https://www.facebook.com/v13.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}`;

        // Abre una ventana emergente para iniciar sesión con Facebook
        window.open(loginUrl, 'Facebook Login', 'width=600,height=400');
    };

    // const handleGoogleLogin = (response) => {
    //     // Aquí puedes realizar acciones con la respuesta de inicio de sesión de Google
    //     console.log('Respuesta de inicio de sesión con Google:', response);
    //   };

    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Iniciar Sesión</h2>
                <p>Ingresa con tu cuenta</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Contraseña"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Contraseña"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label="Recordarme"
                                />
                                <Link href="/forgot-password">¿Olvidaste la contraseña?</Link>
                            </Grid>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Iniciar Sesión</Button>
                            </Grid>
                            <Grid className="loginWithSocial">
                                <Button className="facebook" onClick={handleFacebookLogin}><i className="fa fa-facebook"></i></Button>
                                {/* <Button className="twitter"><i className="fa fa-twitter"></i></Button> */}
                                {/* <GoogleLogin
                                clientId="375814723802-nl19gsfrq1rdp9ct0ifi7nvh48r49cnp.apps.googleusercontent.com"
                                buttonText=""
                                onSuccess={handleGoogleLogin}
                                onFailure={handleGoogleLogin}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <Button className="twitter" onClick={renderProps.onClick}>
                                    <i className="fa fa-google"></i>
                                    </Button>
                                )}
                                /> */}
                            </Grid>
                            <p className="noteHelp">¿No tienes una cuenta?<Link href="/register">Crear cuenta gratis</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default LoginPage;