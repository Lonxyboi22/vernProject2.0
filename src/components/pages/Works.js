/* eslint-disable jsx-a11y/alt-text */
import React, { Component, } from 'react';
import { Container} from "react-bootstrap";
import {
    MDBContainer,
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

const Works = (props) => {

    return(
    <Container fluid className="project-section">
        <MDBContainer className='project-container'>
      <MDBCarousel
        showControls 
        showIndicators 
        dark 
        fade
      >
          <MDBCarouselItem className="active w-100 d-block"
        itemId={1} src={require("../images/Ovary2021.png")}
              alt="..."/>
          <MDBCarouselItem className='w-100 d-block'
        itemId={2} src={require("../images/2021EyeIllustration.png")}
              alt="..."/>
          <MDBCarouselItem className='w-100 d-block'
        itemId={3} src={require("../images/PalmarLayers.png")}
              alt="..."/>
          <MDBCarouselItem className='w-100 d-block'
        itemId={4} src={require("../images/Shovelincisors.png")}
              alt="..." />
          <MDBCarouselItem className='w-100 d-block'
        itemId={5} src={require("../images/topsurgeryRemake.png")}
              alt="..."/>
            <MDBCarouselItem className='w-100 d-block'
        itemId={6} src={require("../images/Still-life.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={7} src={require("../images/2021FantasyFigure.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={8} src={require("../images/colorpalletes.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={9} src={require("../images/2021HouseHusbands.JPG")}
              alt="..." />
          <MDBCarouselItem className='w-100 d-block'
        itemId={10} src={require("../images/2021EyeIllustration.png")}
              alt="..." />
          <MDBCarouselItem className='w-100 d-block'
        itemId={11} src={require("../images/PalmarLayers.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={12} src={require("../images/Shovelincisors.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={13} src={require("../images/topsurgeryRemake.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={14} src={require("../images/Still-life.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={15} src={require("../images/2021FantasyFigure.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={16} src={require("../images/colorpalletes.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block' 
        itemId={17} src={require("../images/BeNiceorElse.png")}
              alt='...'/>
            <MDBCarouselItem className='w-100 d-block'
        itemId={18} src={require("../images/JordanBusinessCard.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={19} src={require("../images/PinupGhost.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={20} src={require("../images/Planesproject.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={21} src={require("../images/RyansRemedies2020.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={22} src={require("../images/speedPaint.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={23} src={require("../images/SelfPortrait2020.jpg")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={24} src={require("../images/SnesbiansSticker2020.png")}
              alt="..." />
            <MDBCarouselItem className='w-100 d-block'
        itemId={25} src={require("../images/TobiCrosshatch.jpg")}
              alt="..." />
      </MDBCarousel>
        </MDBContainer>
        </Container>
    )
}

export default Works