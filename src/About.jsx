import React from 'react';

import img from "../src/images/img1.jpg";
import Common from './Common';

const About = () => {
    return (
        <>
        <Common name="Know More About "
         strong="ME" 
         imgsrc={img}
          visit="/contact"
           btnname="Contact Now"
           desc= "- Front-End Developer" 
           desc1="- HTML/CSS" 
           desc2= "- React.js"
           desc3="- JavaScript"
           desc4="- C/C++"
           random="- Some Random Facts about me"
           random1="- I Love Drinking Tea"
           random2="- You find me Playing games most of the time"
           random3="- I Love Sketching and Painting Walls"
           random4="- I Like Watching Anime and Cartoons"
           random5="- I Like to Travel A lot"


/>
           
        </>
          );
};

export default About;
