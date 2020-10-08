import React from 'react'
import '../Painting.css';
import sl from '../3.jpg'
import slik from '../7.jpg'
import slisli from '../slikaa.jpg'
import Footer from '../Footer';


function Painting() {
    return (
        <>
            <div className="flexx">
                <div className="leftt">
                    <p className="sok">FAIRYTALE</p>
                    <p className="sokic">WINTER</p>
                    <p className="d">"This is not a marketing trick, you should totally believe us.</p>
                    <p className="d2">Visit winter fairytale in Zagreb."</p>
                </div>
                <div className="rightt">
                    <img src={sl} className="phtoo"></img>
                </div>
            </div>

            <div className="flexic">
                <div>
                    <img src={slik} className="sliks"></img>
                </div>
                <div>
                    <p className="stol">About us</p>
                    <p className="pingvin">"You're insecure, don't know what for. You're turning heads when you walk through the door. Don't need makeup to cover up, being the way that you are is enough.</p>
                    <p className="oneD">Everyone else in the room can see it, everyone else but you. Baby, you light up my world like nobody else." </p>
                    <button className="pingo">ALL PROJECTS</button>
                </div>
            </div>

            <div className="zadnjiFlex">
                <div className="kartTek">
                    <p className="iskljuci">WINTER</p>
                    <p className="ukljuci">FAIRYTALE</p>
                    <p className="y">"This is not a marketing trick, </p>
                    <p className="y3">you should totally believe us.</p>
                    <p className="y2">Visit winter fairytale in Zagreb."</p>
                    <button className="stres"><div className="taylor">SEE THIS PROJECT</div></button>
                </div>

                <div className="kartSlik">
                    <img src={slisli} className="slikana"></img>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Painting


