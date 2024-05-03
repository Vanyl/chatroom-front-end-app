import styled from 'styled-components';
import { useState } from 'react';
import { StyledForm, StyledInput, StyledAlert, StyledLabel } from './FormComponents';
import { RegisterBtn } from "./Buttons";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate password and set passwordInvalid state accordingly
        if (password.length < 4) {
            setPasswordInvalid(true);
        } else {
            setPasswordInvalid(false);
        }
    }

    const usernameEntered = (e) => {
        setUsername(e.target.value);
        // buttonEnabled(username, password)
    }

    const emailEntered = (e) => {
        setEmail(e.target.value);
        // buttonEnabled(username, password)
    }

    const passwordEntered = (e) => {
        setPassword(e.target.value);
        // buttonEnabled(username, password)
    }

    const buttonEnabled = (username, password) => {
        if(username.length > 0 && password.length > 0) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name-register">Username :</StyledLabel>
            <StyledInput id="name-register" type="text" value={username} onChange={e => usernameEntered(e)}/>
            <StyledLabel htmlFor="email-register">Email:</StyledLabel>
            <StyledInput id="email-register" type="email" value={email} onChange={e => emailEntered(e)}/>
            <StyledLabel htmlFor="password-register" invalid={passwordInvalid}>Password :</StyledLabel>
            <StyledInput id="password-register" type="password" value={password} onChange={(e) => passwordEntered(e)} />
            {passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
            <RegisterBtn type="submit" disabled={!username || !password}>Register</RegisterBtn>
        </StyledForm>
    )
}

export default LoginForm;