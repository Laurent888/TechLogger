import styled from "styled-components";

export const CustomCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.whiteBackground};
  transition: all 0.2s ease-in-out;
  align-items: center;
  border-bottom: 2px solid rgb(221, 146, 96);

  &:hover {
    background-color: ${({ theme }) => theme.lightBackground};
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
  }

  > div {
    font-size: 2rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  > span {
    font-size: 3rem;
  }
`;
