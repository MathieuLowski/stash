import React from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";

const OpenDays = () =>{

    return(
    <>
    <Wrapper>
        <h2>Reservations can only be made by phone (514) 845-6611</h2>
        <Ul>
            <Li>Monday Closed</Li>
            <Li>Tuesday 12:00 to 21:00</Li>
            <Li>Wedensday 12:00 to 21:00</Li>
            <Li>Thursday 12:00 to 21:00</Li>
            <Li>Friday 12:00 to 21:00</Li>
            <Li>Saturday 12:00 to 21:00</Li>
            <Li>Sunday Closed</Li>
        </Ul>
        </Wrapper>
        </>)
};

export default OpenDays;

const Wrapper = styled.div`
color: ${COLORS.red};
font-size:18px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
@media (max-width:769px){
    h2{
        margin-top:25px;
        margin-bottom:10px;
        width:300px;
    }
}
`;
const Ul = styled.ul`
margin:15px;
`;
const Li = styled.li`
margin:15px;
`;