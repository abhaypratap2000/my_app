import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: "0 auto",
  width: "60%",
  height: '250px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  paddingBottom:"20px"

};

const App: React.FC = () => (
     <Carousel autoplay  style={{margin:'30px'}}>
    <div>
     <div style={contentStyle}>
     <img style={{height:"270px",width:"100%"}} src={require ("../../assets/we1.jpg")} alt="Image" />
     </div>
     
    </div>
    <div>
      <div style={contentStyle}>
      <img style={{height:"270px",width:"100%"}} src={require ("../../assets/we2.jpg")} alt="Image" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img style={{height:"270px",width:"100%"}} src={require ("../../assets/we3.jpg")} alt="Image" />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
      <img style={{height:"270px",width:"100%"}} src={require ("../../assets/we4.jpg")} alt="Image" />
      </div>
    </div>
  </Carousel>
);

export default App;