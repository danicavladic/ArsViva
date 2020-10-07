import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Architecture.css';
import project1 from '../project1.jpg'
import bathroom from '../7.jpg'
import CardSimple from '../CardSimple'






function Architecture() {

    return (  
        <>     
        <div className="neobojan">
         
            <div className="crni-div">
                <div className="bijeli-div">
                <CardSimple src={project1}></CardSimple>
                
                </div>
            
            </div> 
            
            
            

        
            <h1 className="checkOut">CHECK OUT OUR PROJECTS</h1>
        
            <div className="help"></div>
            <hr></hr>
            <Footer />
       
        </div>
        
        </>



      
    )
}

export default Architecture;