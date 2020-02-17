import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;

  input {
    width: 50rem;
    height: 5rem;
    padding: 0.5rem;
    border: 2px solid ${props => props.theme.greyLight};
    border-radius: 5px;
    font-size: 2rem;
    color: ${props => props.theme.greyDark};

    &:focus {
      outline: 1px solid ${props => props.theme.primaryColor};
      box-shadow: 0 0 3px ${props => props.theme.primaryColor};
    }
  }
`;

const FormInput = props => {
  const { value, handleChange, type, name, label } = props;
  return (
    <InputContainer>
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default FormInput;
