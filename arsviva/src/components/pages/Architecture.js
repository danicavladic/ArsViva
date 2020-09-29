import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Architecture.css';
import ProjectCards from '../ProjectCards'
import project1 from '../project1.jpg'





function Architecture() {

    return (  
        <>     
        <div className="neobojan">
            <div className="crni-div">
                <img className="main-pic" src={project1}></img>
            </div> 

        
            <h1 className="checkOut">CHECK OUT OUR PROJECTS</h1>
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <div className="help"></div>
            <hr></hr>
            <Footer />
       
        </div>
        
        </>



      
    )
}

export default Architecture;