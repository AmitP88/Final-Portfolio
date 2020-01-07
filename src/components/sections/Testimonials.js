import React from 'react'
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Testimonials = ({ ryan, tom }) => {
  return (
    <div className="testimonials">
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={50}
        totalSlides={2}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>    
    </div>
  )
}

export default Testimonials