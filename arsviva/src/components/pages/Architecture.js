import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Architecture.css';
import project1 from '../project1.jpg'
import bathroom from '../7.jpg'
import CardSimple from '../CardSimple'
import sl from '../3.jpg'
import sli from '../5.jpg'
import OtherProjects from '../OtherProjects'
import sl1 from '../7.jpg'
import s2 from '../4.jpg'






function Architecture() {

    return (
        <>
            <div>
                <div className="zeleni"><img className="slicicaa" src={sl}></img></div>
                <div className="zeleniDrugi"></div>
                <div className="sivi"></div>
                <button className="sviii">ALL PROJECTS</button>
                <img className="slicicaa" src={sl1}></img>
                <div className="gornji"></div>
                <p className="zimska">WINTER</p>
                <p className="bajka">FAIRYTALE</p>
                <p className="t">"This is not a marketing trick,</p>
                <p className="t2">you should totally believe us.</p>
                <p className="t3">Visit winter fairytale in Zagreb</p>
                <p className="t4">in warm June with a lot of sun."</p>
                <button className="prr"><div className="pD">SEE THIS PROJECT</div></button>
                <div className="help"></div>
                <div className="kart"><OtherProjects  src={sl}></OtherProjects></div>
                <div className="kart-2"><OtherProjects  src={sl1}></OtherProjects></div>
                <div className="kart-3"><OtherProjects  src={s2}></OtherProjects></div>
                
                <hr></hr>
                <Footer />

            </div>

        </>




    )
}

export default Architecture;