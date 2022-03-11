import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, LinkedIn, Handshake} from '../components/AllSvgs'
import { DarkTheme} from '../components/Themes'


const Icons = styled.div`
display:flex;
flex-direction:column;
align-items:center;

position:fixed;
bottom:0;
left:2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`
const Line = styled.span`
width:2px;
height:8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body };
`

const SocialMedia = (props) => {
  return (
    <Icons>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/Konnor-Biats"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/konnor-biats-547854180/"}}>
                <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />   
            </NavLink>
            
        </div>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://uakron.joinhandshake.com/stu/users/3388079"}}>
                <Handshake width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </NavLink>
            
        </div>

        <Line color={props.theme} />
    </Icons>
  )
}

export default SocialMedia