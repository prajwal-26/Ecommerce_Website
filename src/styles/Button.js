import styled from "styled-components";
const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: #ff8200; /* Orange color */
  color: #fff; /* White text color */
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgba(255, 130, 0, 0.3); /* Lighter orange box shadow */
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
  }

  /* Add the provided CSS styles */
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: inline-block;
  font-size: 1em;
  margin-top: 10px;
//   margin-bottom: 10px;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 130, 0, 0.5); /* Lighter orange box shadow */

  &:focus {
    outline: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
  }

  &:before {
    display: none;
    top: -75%;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }

  &:after {
    display: none;
    bottom: -75%;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%),
      radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }

  &:active {
    transform: scale(0.9);
    background-color: darken(#ff0081, 5%);
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }

  &.animate {
    &:before {
      display: block;
      animation: topBubbles ease-in-out 0.75s forwards;
    }
    &:after {
      display: block;
      animation: bottomBubbles ease-in-out 0.75s forwards;
    }
  }

`;

export default Button;