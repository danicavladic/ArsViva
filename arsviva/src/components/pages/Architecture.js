import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Architecture.css';
import project1 from '../project1.jpg'
import bathroom from '../7.jpg'
import CardSimple from '../CardSimple'
import sl from '../fh2.jpg'
import sli from '../naka.JPG'
import OtherProjects from '../OtherProjects'
import sl1 from '../st2.JPG'
import s2 from '../kapelica.jpg'
import s3 from '../kon.JPG'
import { useRef } from 'react';






function Architecture() {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);  
    const myRef3 = useRef(null)
    const executeScroll3 = () => scrollToRef(myRef3)

    return (
        <>
            <div>
                <div className="zeleni"><img className="slicicaa" src={sl}></img></div>
                <div className="zeleniDrugi"></div>
                <div className="sivi"></div>
                <button onClick={executeScroll3} className="sviii">SVI PROJEKTI</button>
                <img className="slicicaa" src={sl}></img>
                <div className="gornji"></div>
                <p className="hl">IZDVOJENI <br></br>PROJEKT</p>
                <p className="zimska">WINTER</p>
                <p className="bajka">FAIRYTALE</p>
                <p className="t">"This is not a marketing trick,</p>
                <p className="t2">you should totally believe us.</p>
                <p className="t3">Visit winter fairytale in Zagreb</p>
                <p className="t4">in warm June with a lot of sun."</p>
                <button  className="prr"><div className="pD">VIDI OVAJ PROJEKT</div></button>
                <div className="help"></div>
                <hr className="cr"></hr>
                <p className="blabla2">VIDI OSTALE PROJEKTE</p>
                <p className="blabla">This is so cooldhhdhfhdhfhdshfjdsfjjfdj <br></br> bla bla </p>
                <hr ref={myRef3} className="cr"></hr>
                <div className="kart"><OtherProjects  src={sl}></OtherProjects></div>
                <div className="kart-2"><OtherProjects  src={sl1}></OtherProjects></div>
                <div className="kart-3"><OtherProjects  src={sli}></OtherProjects></div>
                <div className="kart-2"><OtherProjects  src={s2}></OtherProjects></div>
                <div className="kart-3"><OtherProjects  src={s3}></OtherProjects></div>
              
                
                <hr className="footercrta"></hr>
                <Footer />

            </div>

        </>




    )
}

export default Architecture;