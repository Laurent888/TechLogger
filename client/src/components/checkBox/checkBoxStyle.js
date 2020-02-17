import styled from "styled-components";

export const CustomCheckbox = styled.div`
  position: relative;
`;

export const CustomInput = styled.input`
  position: absolute;
  opacity: 0;
  :checked + label {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.whiteBackground};
  }
`;

export const CustomLabel = styled.label`
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: none;
  color: ${props => props.theme.primaryColor};
  font-size: 1.4rem;
  text-align: center;
  white-space: nowrap;
`;
