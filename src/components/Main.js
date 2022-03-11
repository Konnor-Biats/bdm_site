import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import { Home } from './AllSvgs'
import Intro from './Intro'
import SocialMedia from './SocialMedia'



const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-fanily: 'Karla', sans-serif ;
  font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const RESUME = styled(NavLink)` 
color: ${props => props.theme.text};
position: absolute;
top:50%;
right: calc(1rem + 2vw);
text-decoration: none;
transform: rotate(90deg) translate(-50%, -50%);
z-index:1;
`

const PORTFOLIO = styled(NavLink)` 
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top:50%;
left: calc(1rem + 2vw);
text-decoration: none;
transform:  translate(-50%, -50%) rotate(-90deg);
z-index:1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)` 
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`

const CONTACT = styled(NavLink)` 
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);  
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline:none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
background-color: #000;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      <DarkDiv click={click}/>
      <Container>
        <HomeButton/>
        <LogoComponent theme={click ? 'dark' : 'light' } />
        <SocialMedia theme={click ? 'dark' : 'light' } />
        <DarkDiv click={click}/>
        <Center click={click}>
          <Home onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill color='currentColor'/>
          <span>Click Me!</span>
        </Center>

        <RESUME to="/Resume">
        <h2>Resume</h2>  
        </RESUME>

        <PORTFOLIO to="/Portfolio" click={click}>
        <h2>Portfolio</h2>  
        </PORTFOLIO>

        <BottomBar>
      <ABOUT to="/About" click={click}>
        <h2>About</h2>  
      </ABOUT>

      <CONTACT to="/Contact" click={click}>
        <h2>Contact</h2>  
      </CONTACT>
        </BottomBar>
      
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main