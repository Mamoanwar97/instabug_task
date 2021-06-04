import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'
import RightSide from './RightSide'

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
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  @media (max-width: 470px) {
    width: 90%;
  }
`
const Info = styled.div`
  width: 50%;
  background: #002276;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
  h3{
    color: #fffff8;
    width: auto;
    text-align: center;
  }
  @media (max-width: 770px) {
    min-height: 25rem;
    width: 100%;
  }
`

function LoginPage({setlogedin, logedin}){
    return (
        <Layout>
        <CenterArea>
          <Info>
            <Carousel nextIcon={null} prevIcon={null} 
            style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <Carousel.Item interval={1000}>
                <img
                  style={{height: "400px", objectFit: "contain"}}
                  className="d-block w-100"
                  src={require('../extra/images/Product-overview.svg')}
                  alt="Product overview"
                />
                <Carousel.Caption style={{height: "10rem", maxWidth: "37rem", position: "relative", left: "unset", right: "unset", bottom: "unset", top: "unset"}}>
                  <h3>Accelerate Your Entire Mobile Team Workflow</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  style={{height: "400px", objectFit: "contain"}}
                  className="d-block w-100"
                  src={require('../extra/images/Products-bug-reporting.svg')}
                  alt="Products bug reporting"
                />
                <Carousel.Caption style={{height: "10rem", maxWidth: "37rem", position: "relative", left: "unset", right: "unset", bottom: "unset", top: "unset"}}>
                  <h3>The Most Comprehensive Bug Reporting Tool for Mobile Apps</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{height: "400px", objectFit: "contain"}}
                  className="d-block w-100"
                  src={require('../extra/images/Products-crash-reporting.svg')}
                  alt="Products crash reporting"
                />
                <Carousel.Caption style={{height: "10rem", maxWidth: "37rem", position: "relative", left: "unset", right: "unset", bottom: "unset", top: "unset"}}>
                  <h3>Secure Crash Reporting With Real-Time Alerts</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> 
          </Info>
          <RightSide logedin={logedin} setlogedin={setlogedin} />
        </CenterArea>
      </Layout>
    )
}

export default LoginPage