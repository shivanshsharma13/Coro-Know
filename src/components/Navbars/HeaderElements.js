import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom"



export const Logo = styled.img`
    width: auto;
    margin-left: 5px;
    margin-right: 5px;
    height: 100px;
    /* margin-left:auto;
    margin-right:auto; */
    display: block;
    /* @media screen and (max-width: 1300px) {
    width: 50px;
    height: auto;
  } */

`;



export const Nav = styled.nav`
    display: block;
    margin-bottom:7%;
    justify-content:center;
    justify-content: space-between;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration:none;
    border-radius: 999px;
    background-color: lightblue;
    padding: 0px 10px 0px 10px;
    margin:2px 4px 2px 4px;

&.active{
    color: azure;
    background-color: slateblue;
}

@media screen and (max-width: 1300px) {
  width: 100%;
  border-radius: inherit;
  background-color:lightblue;
  justify-content: center;

}
`;

export const Logocontent = styled.div`
display:flex;
position:relative;
justify-content:none;
align-items:center;
justify-content:center;
text-decoration:none;
`

export const NavMenu = styled.div`
display: flex;
border-radius: 10px;


@media screen and (max-width: 1300px) {
    height:20vh;
    padding:7px 0px 7px 0px;
    width:100%;
}
`;