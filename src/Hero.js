import React from 'react';
import Login from './Login';
const Hero = ({handleLogout}) =>{
     return(
         <section className="hero">
         <nav>
            <h2>welcome</h2>
            <button onClick={handleLogout}>Logout</button>
         </nav>
         </section>
     );
};

export default Hero;   