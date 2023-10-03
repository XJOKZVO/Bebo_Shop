import React from 'react';
import '../assets/css/About.css'
function About() {
  return (
    <div className="about-container"> {/* Use className to apply the CSS class */}
      <h2>About</h2>
      <p className="about-text"> {/* Use className to apply the CSS class */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        turpis nec lorem iaculis, a consectetur justo commodo. Integer
        pellentesque, urna id consectetur placerat, massa libero fermentum
        justo, nec euismod elit ipsum nec ex.
      </p>
    </div>
  );
}

export default About;
