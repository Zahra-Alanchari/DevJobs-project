import styled from "styled-components";

 export const  Profile = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? "white" : "#19202D")};
  color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  width: 327px;
  height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;
  margin: 0 auto;
  border-radius:5px;
  & a{
    width: 147px;
    height: 48px;
    /* background-color: #939bf466; */
    background-color: ${({ darkMode }) => (darkMode ? "#939bf466" : " #28324366")};
    color: #5964E0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 689px;
    height: 140px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;