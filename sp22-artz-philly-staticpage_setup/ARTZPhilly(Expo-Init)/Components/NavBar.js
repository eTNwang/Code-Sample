import React from 'react'
import s from 'styled-components'
import eventsicon from '/Users/AmyEric/Desktop/sp22-artz-philly/ARTZPhilly(Expo-Init)/Images/EventsIcon.png'
import contactusicon from '/Users/AmyEric/Desktop/sp22-artz-philly/ARTZPhilly(Expo-Init)/Images/ContactIcon.png'
import meeticon from '/Users/AmyEric/Desktop/sp22-artz-philly/ARTZPhilly(Expo-Init)/Images/MeetingIcon.png'
import friendicon from '/Users/AmyEric/Desktop/sp22-artz-philly/ARTZPhilly(Expo-Init)/Images/Contacts.png'
import JoinMeeting from './JoinMeeting'



const MenuBar = () => (

    <>
        
        <Wrapper> 

            <FlexDiv> <></><Meeting></Meeting> Join  </FlexDiv> 
            <FlexDiv> <Friends></Friends>  Friends </FlexDiv> 
            <FlexDiv> <Events></Events> Events </FlexDiv> 
            <FlexDiv> <ContactUs></ContactUs> Contact  </FlexDiv> 
        
        </Wrapper>

       

            
    </>

)

export default MenuBar

const Wrapper = s.div`
background: #C4C4C4;
width: 100%;
height: 60px;
display: flex;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
position:absolute; bottom:0;
align-items: center;

`
const FlexDiv = s.div`
flex: 1;
font-family: Roboto;
font-style: normal;
font-weight: normal;
align-items: center;
font-size: 20px;
line-height: 23px;
text-align: center;

`



const Events = s.div`
    margin: auto;
    background-image: url(${eventsicon});
    width: 31px;
    height: 31px;
    background-size: 31px 31px;
`;

const ContactUs = s.div`
    margin: auto;
    background-image: url(${contactusicon});
    width: 28px;
    height: 28px;
    background-size: 28px 28px;
`;

const Friends = s.div`
    margin: auto;   
    background-image: url(${friendicon});
    width: 29px;
    height: 29px;
    background-size: 29px 29px;
`;

const Meeting = s.div`
    margin: auto;
    background-image: url(${meeticon});
    width: 31px;
    height: 19px;
    background-size: 31px 19px;
    margin-bottom: 5px;
    margin-top: 5px;
`;
