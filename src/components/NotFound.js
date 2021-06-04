import React from 'react';
import styled from 'styled-components';

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
//   background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  margin: 0;
//   -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
//   -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
//   box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
//   @media (max-width: 470px) {
//     width: 90%;
//   }
`
function NotFound() {

    return(
        <Layout>
            <CenterArea>
                <img 
                    src={require('../extra/images/404.webp')}
                    alt="404 - Page Not Found!"
                />
                <h2 style={{color: "#00287a"}}>
                    404 - Page Not Found!
                </h2>
                <p style={{color: "#7f93bc"}}>
                    Sorry, that doesn't exist. What would you like to do?
                </p>
            </CenterArea>
        </Layout>
    )
    
}

export default NotFound