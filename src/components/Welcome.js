import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Layout = styled.div`
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CenterArea = styled.div`
width: 80%;
min-height: 80vh;
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
`
const Button = styled(Link)`
  background-color: ${props => props.disabled? "grey" : props.backgroundColor? props.backgroundColor : "#fff"};
  color: ${props => props.disabled? "#ddd" : props.color? props.color : "#000"};
  border: 0;
  outline: 0;
  min-width: ${props => props.minwidth? props.minwidth : "70%"};
  padding: 10px 20px;
  margin: 0px 0 5px 0;
  height: 50px;
  font-weight: 400;
  cursor: ${props => props.disabled? "default" : "pointer"}
  transition: 0.25s ease;
  border-radius: 8px;
  text-align: center;
  box-shadow: ${props => props.disabled? "grey" :props.backgroundColor? props.backgroundColor : "#000"} 0px 0px 0px 1px inset;
  -webkit-appearance: none;
  -webkit-box-shadow: ${props => props.disabled? "grey" :props.backgroundColor? props.backgroundColor : "#000"} 0px 0px 0px 1px inset;
  position:relative;
  -moz-box-shadow: ${props => props.disabled? "grey" :props.backgroundColor? props.backgroundColor : "#000"} 0px 0px 0px 1px inset;
  img{
    height: 90%;
    position: absolute;
    top: 5%;
    bottom: 5%;
    left: 10px;
    align-self: flex-start;
  }
  &:hover {
    color: ${props =>props.disabled? "#ddd" : props.backgroundColor? props.backgroundColor : "#fff"};
    box-shadow: ${props => props.disabled? "grey" :props.backgroundColor? props.backgroundColor : "#fff"} 0px 0px 0px 2px inset;
    -webkit-appearance: none;
    -webkit-box-shadow: ${props => props.disabled? "grey" :props.backgroundColor? props.backgroundColor : "#fff"} 0px 0px 0px 2px inset;
    -moz-box-shadow: ${props => props.disabled? "grey" :props.backgroundColor? props.backgroundColor : "#fff"} 0px 0px 0px 2px inset;
    background: ${props => props.disabled? "grey" :props.hoverColor? props.hoverColor : "#fff"};
  }
`;

function Welcome({logedin, setlogedin}) {
    return(
        <Layout>
            <CenterArea>
                <img 
                    src={require('../extra/images/welcome.svg')}
                    alt="Welcome on Board"
                    style={{width: "450px", objectFit: "contain"}}
                />
                <h2 style={{color: "#09f"}}>
                    Welcome On Board
                </h2>
                <Button color='#fff' backgroundColor="#00287a" minwidth="20%" to='/login' onClick={(e)=> {
                    localStorage.removeItem("Instabug_login")
                    setlogedin(false)
                    }}>
                    Log out
                </Button>
            </CenterArea>
        </Layout>
    )
    
}

export default Welcome