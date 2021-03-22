import React ,{useState, useEffect}from "react";
import {GoogleMap, Marker, withScriptjs, withGoogleMap} from "react-google-maps";
import { COLORS } from "../Constants";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

function Map(){
 
    return(
  <GoogleMap defaultZoom={19} defaultCenter={{lat:45.502651,lng:-73.555252}}>
    <Marker position={{lat:45.502651,lng:-73.555252}}/>
    </GoogleMap>
    )
  };

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MapBox = () =>{

return (
    <>
     <MapAddress>
      <MapDiv>
        <WrappedMap googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapDiv>
        <AddressBox>
          <Ul>
            <Li>ADRESSE</Li>
            <Li>200 rue St-Paul O,</Li>
            <Li>Montreal, QC H2Y 1Z9</Li>
            <Li><img src="https://assets.restodata.ca/images/metro.png" width="24" height="24" alt="Place d'Armes subway station"/>M&eacute;tro Place d'Armes</Li>
            <Li>(514)845.6611</Li>
            <Li><A href="https://www.google.ca/maps/place/Stash+Caf%C3%A9/@45.5025983,-73.5573774,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a584a0e48a3:0x10c736e3f8581465!8m2!3d45.5025983!4d-73.5551834">
  <Button>DIRECTIONS</Button></A></Li>
          </Ul>
        </AddressBox>
    </MapAddress>

  </>
);
  }

  export default MapBox;

const MapAddress = styled.div`
  font-size: 55px;
  color: ${COLORS.red};
  display:flex;
  flex-direction:row;
  padding: 25px;
  margin-bottom:25px;
  flex-wrap:wrap;
  justify-content:space-around;
`;
const MapDiv = styled.div`
border: solid 1px black;
width:1000px;
`;
const AddressBox = styled.div`
font-size:25px;
display:flex;
flex-direction:column;
`;
const Ul = styled.ul`
@media (max-width:769px){
  display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
}
`;
const Li = styled.li`
margin:20px;
`;
const Button = styled.button`
margin-top:25px;
cursor: pointer;
border-radius:3px;
padding:15px;
font-weight:bold;
color: ${COLORS.red};
width: 200px;
font-size: 15px;
background:none;
border: solid ${COLORS.red} 3px;
transition-property: all;
transition-duration: 0.2s;
transition-timing-function: ease-in;
:hover{
  background-color:#FFFFFF;
  color:${COLORS.red};
}`;
const A = styled.a`

`;