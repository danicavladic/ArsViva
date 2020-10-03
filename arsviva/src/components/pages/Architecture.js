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
            <p className="izdvojen">IZDVOJENI PROJEKT</p>
            <p className="first">#1 <br></br>Obiteljska kuća</p>
            <div className="crni-div">
            
            </div> 
            
            <hr className="bijela-crta"></hr>
            <hr className="bijela-crta-2"></hr>
            <hr className="bijela-crta-3"></hr>
            <hr className="bijela-crta-4"></hr>
            <hr className="bijela-crta-5"></hr>
            <hr className="bijela-crta-6"></hr>
            
            

        
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