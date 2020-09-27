import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Architecture.css';
import ProjectCards from '../ProjectCards'



function Architecture() {
    return (
        <div>
            <h1 className="checkOut">CHECK OUT OUR PROJECTS</h1>
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <div className="help"></div>
            <hr></hr>
            <Footer />
        </div>
    )
}

export default Architecture;