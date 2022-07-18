import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #0000ff;
  height: 100px;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: -1;

  nav {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 50px;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
  }

  li {
    margin: 0 20px;
  }

  a {
    color: white;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    &::after {
      content: "";
      display: block;
      z-index: 1;
      border-bottom: 2px solid white;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;
