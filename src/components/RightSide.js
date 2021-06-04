import React, { useState } from "react";
import {Form, Alert} from 'react-bootstrap'
import styled from "styled-components";


const Or = styled.div`
position: relative;
width: 70%;
height: 1px;
background-color: #000; 
margin: 20px 0;
&::before{
  content: "OR";
  color: #000;
  height: 50px;
  text-align: center;
  width: 50px;
  left: 45%;
  right: 45%;
  top: -13px;
  background-color: #fff;
  position: absolute;
}
`


const NewForm = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 35rem;
padding: 20px;
@media (max-width: 770px) {
  min-height: 25rem;
  width: 100%;
}
`

const FormGroup = styled(Form.Group)`
  width: 70%;
`

const Button = styled.button`
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

const RightSide = ({setlogedin, logedin}) => {
  const [errors, seterrors] = useState({
    email: '',
    password: '',
    valid: ''
  });

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleEmail = (entered_mail) =>{
    const email_val = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(entered_mail.trim()));
    setemail(entered_mail)
    if(email_val)
    {
      seterrors({...errors, email: ''})
    }
    else
    {
      
      seterrors({...errors, email: "Enter a valid email address."})

    }
  }
  const handlePassword = (entered_password) => {
    setpassword(entered_password)
    const email_name = email.split('@')[0]
    const password_val_capital =  entered_password.search(/[A-Z]/) !== -1 ;
    const password_val_no =  entered_password.search(/[0-9]/) !== -1;
    const password_val_mail = email_name? entered_password.includes(email_name) : false;
    if(entered_password.length > 8 && !password_val_mail && password_val_capital && password_val_no)
      seterrors({...errors, password: ''}) 
    else if (entered_password.length <= 8)  
      seterrors({...errors, password: "Password must be 6 characters or more"})
    else if(!password_val_capital )
      seterrors({...errors, password: "Password need to have at least a capital letter"})
    else if(!password_val_no)
      seterrors({...errors, password: "Password need to have at least a number"})
    else if(entered_password.includes(email_name))
      seterrors({...errors, password: "Password contains an email part"})
  }

  const members_empty = [
    {email: 'mohamed@instabug.com' , password: '12345678A'},
    {email: 'mohamed1@instabug.com' , password: '12345678A'},
    {email: 'mohamed2@instabug.com' , password: '12345678A'},
    {email: 'mohamed3@instabug.com' , password: '12345678A'},
    {email: 'mohamed4@instabug.com' , password: '12345678A'},
    {email: 'mohamed5@instabug.com' , password: '12345678A'},
    {email: 'mohamed6@instabug.com' , password: '12345678A'},
    {email: 'mohamed7@instabug.com' , password: '12345678A'},
  ];

  const handlesubmit = () => {
    const member = members_empty.filter(m => m.email === email)
    if(member.length && (member[0].password === password))
    {
      localStorage.setItem("Instabug_login", true);
      seterrors({...errors, valid: ""})
      setlogedin(true)
    }
    else
      seterrors({...errors, valid: "your email or password is incorrect"})
   }

    return ((
      <NewForm>
                 <img
                    style={{height: "60px", objectFit: "contain"}}
                    className="d-block w-100"
                    src={require('../extra/images/Instabug.webp')}
                    alt="Instabug logo"
                  />
                  <h2 style={{color: '#0c55b5', textAlign: "center", margin: "20px 0"}}>Log in to Instabug</h2>
                  <Button backgroundColor="#4285F4" color="#fff">
                    <img
                      src={require('../extra/images/google.webp')}
                      alt="Google logo"
                    />
                    Google
                  </Button>
                  <Button backgroundColor="#000" color="#fff" hoverColor="#5E5E5E">
                    <img
                      src={require('../extra/images/github.webp')}
                      alt="Github logo"
                    />
                    Github
                  </Button>
                  <Button hoverColor="#5E5E5E">
                  <img
                      src={require('../extra/images/Microsoft.webp')}
                      alt="Microsoft logo"
                    />
                    Microsoft
                  </Button>
                  <Or />
                  <FormGroup controlId="formBasicEmail">
                  {
                    errors.valid?
                    (<Alert variant="danger">
                      {errors.valid}
                    </Alert>)
                    :
                    ""
                  }
                    <Form.Label>Work Email</Form.Label>
                    <Form.Control 
                      type="email"
                      id="email"
                      placeholder="you@company.com"
                      isInvalid={!!errors.email}
                      value={email}
                      onChange={(e)=> handleEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                  </FormGroup>
                  <FormGroup controlId="formBasicPassword">
                    <Form.Row style={{justifyContent: "space-between"}}>
                      <Form.Label>Password</Form.Label>
                      <Form.Text display="inline">
                            <a href="#" style={{textDecoration: "none", color: "#cacaca"}}>Forgot password?</a>
                      </Form.Text>
                    </Form.Row>
                    <Form.Control 
                      type="password"
                      id="password"
                      placeholder="8+ Characters"
                      isInvalid={!!errors.password}
                      value={password}
                      onChange={(e)=> handlePassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                  </FormGroup>
                  <Button 
                    hoverColor="#5E5E5E" 
                    id="submit-button"
                    onClick={(e)=> handlesubmit()}
                    disabled={!email.length  || !password.length || errors.email || errors.password}
                  >
                    Submit
                  </Button>
                  <FormGroup>
                  <Form.Row style={{justifyContent: "space-between"}}>
                      <Form.Text display="inline">
                            Don't have an account? <a href="#" style={{color: "#55b1f1", textDecoration: "none"}}>Sign up</a>
                      </Form.Text>
                      <Form.Text display="inline" style={{color: "#55b1f1"}}>
                           <a href="#" style={{textDecoration: "none", color: "inherit"}}>Login via SSO</a>
                      </Form.Text>
                    </Form.Row>
                  </FormGroup>
            </NewForm>
    ));
  };

export default RightSide;
