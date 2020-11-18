import React from 'react';
import styled from 'styled-components';
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e2e5e9;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open, setOpen, onRefClick, homeRef, aboutRef, timelineRef, skillsRef, countriesRef}) => {
  return (
    <StyledMenu open={open}>
    <a href="#aboutme" onClick={() => {onRefClick(homeRef); setOpen(!open); }}>
      <span role="img" aria-label="home">🏠</span>
      Home
    </a>
      <a href="#aboutme" onClick={() => {onRefClick(aboutRef); setOpen(!open); }}>
        <span role="img" aria-label="about me">💁🏻‍♂️</span>
        About me
      </a>
      <a href="#about" onClick={() => {onRefClick(timelineRef); setOpen(!open); }}>
        <span role="img" aria-label="Timeline">⏱️</span>
        Timeline
        </a>
      <a href="#service" onClick={() => {onRefClick(skillsRef); setOpen(!open); }}>
        <span role="img" aria-label="Skills">🤹</span>
        Skills
        </a>
      <a href="#contact" onClick={() => {onRefClick(countriesRef); setOpen(!open); }}>
        <span role="img" aria-label="counries">✈️</span>
        Countries Visited
        </a>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 2%;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const App1 = (props) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} onRefClick={props.onRefClick} homeRef={props.homeRef} aboutRef={props.aboutRef} timelineRef={props.timelineRef} projectsRef={props.projectsRef}  skillsRef={props.skillsRef} countriesRef={props.countriesRef} />
      </div>
    </div>
  )  
}
export default App1;

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);

//     return () => {
//       document.removeEventListener('mousedown', listener);
//     };
//   },
//   [ref, handler],
//   );
// };