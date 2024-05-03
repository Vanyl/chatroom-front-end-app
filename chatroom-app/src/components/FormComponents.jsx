import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: rgb(123,143,170);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border-top: 1px solid #EFF0F1;
  border-left: 4px solid #EFF0F1;
  border-bottom: 3px solid #EFF0F1;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #EFF0F1;
  `
  // color: ${props => props.invalid ? 'red' : '#EFF0F1'};

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
`

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
  `