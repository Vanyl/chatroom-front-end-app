import styled from 'styled-components';
import { useState } from 'react';
import { StyledForm, StyledInput, StyledAlert, StyledLabel } from './FormComponents';
import { SignInBtn } from "./Buttons";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [enabled, setEnabled] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate password and set passwordInvalid state accordingly
        if (password.length < 8) {
            setPasswordInvalid(true);
        } else {
            setPasswordInvalid(false);
        }
    }

    const emailEntered = (e) => {
        setEmail(e.target.value);
        // buttonEnabled(email, password)
    }

    const passwordEntered = (e) => {
        setPassword(e.target.value);
        // buttonEnabled(email, password)
    }

    const buttonEnabled = (email, password) => {
        if(email.length > 0 && password.length > 0) {
            setEnabled(true);
        } else {
            setEnabled(false);
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="email-login">Email :</StyledLabel>
            <StyledInput id="email-login" type="text" value={email} onChange={e => emailEntered(e)}/>
            <StyledLabel htmlFor="password-login" invalid={passwordInvalid}>Password :</StyledLabel>
            <StyledInput id="password-login" type="password" value={password} onChange={(e) => passwordEntered(e)} />
            {passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
            <SignInBtn type="submit" disabled={!email || !password}>Login</SignInBtn>
        </StyledForm>
    )
}

export default LoginForm;