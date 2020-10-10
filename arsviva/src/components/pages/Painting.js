import React from 'react'
import '../Painting.css';
import sl from '../11.jpg'
import slik from '../13.jpg'
import slisli from '../12.jpg'
import Footer from '../Footer';
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import prva from '../ljubav.jpg'
import druga from '../plavikrug_češljanja.jpg'
import treca from '../plavikrug_kraljica.jpg'
import cetvrta from '../plavikrug_mojenarančasto.jpg'
import peta from '../plavikrug_namoru.jpg'
import sesta from '../ptica.jpg'
import sedma from '../sidrenja.jpg'
import osma from '../sretankonj.jpg'
import deveta from '../titranje_života.jpg'
import w1 from '../w1.jpg'
import w2 from '../w2.jpg'
import w3 from '../w3.jpg'
import w4 from '../w4.jpg'
import w5 from '../w5.jpg'
import w6 from '../w6.jpg'
import w7 from '../w7.jpg'
import w8 from '../w8.jpg'
import w9 from '../w9.jpg'
import w10 from '../w10.jpg'
import w11 from '../w11.jpg'
import w12 from '../w12.jpg'
import w13 from '../w13.jpg'
import w14 from '../w14.jpg'
import w15 from '../w15.jpg'
import w16 from '../w16.jpg'
import w17 from '../w17.jpg'
import w18 from '../w18.jpg'
import { useRef } from 'react';





function Painting() {

   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    })
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);  
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    const myRef2 = useRef(null)
    const executeScroll2 = () => scrollToRef(myRef2)
   


    return (
        <>
            <div className="flexx">
                <div className="leftt">
                    <p className="sok">SLIKARSKI</p>
                    <p className="sokic">RADOVI</p>
                    <pre className="d4">Gordana Šiško je članica HLD od početka 2019.</pre>
                    <pre className="d2">Sudjelovala je na više zajedničkih izložbi te imala svoju izložbu</pre>
                    <pre className="d3">u veljači 2020.  u galeriji HLD.</pre>
                    <button  onClick={executeScroll2} className="stresic"><div className="tayloric">VIDI SVE RADOVE</div></button>

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
                    <div className="stol"><p className="dominik"> crna</p> <p className="nikola"> BOJA</p> <p className="jaki"> i</p> <p className="jasna"> .</p></div>
                    <pre className="oneD">Uz ovu izložbu, kustosica Saša Brkić Kristensen je između ostalog napisala:</pre>
                    <pre className="oneD">"... Radi se o apstraktnim kompozicijama velikog formata, snažnih</pre>
                    <pre className="oneD">"i kontrastnih kombinacija boja. Umjetnica koristi suzdržanu paletu, svodeći je</pre>
                    <pre className="oneD">primarno na nekoliko nijansi plave, crvene, crne i bijele. Velikim plohama i</pre>
                    <pre className="oneD">energičnim potezima ona stvara naoko slične, a opet različite radove od kojih</pre>
                    <pre className="oneD">je svaki prava eksplozija boja, koje autorica slaže na platno u plohama</pre>
                    <pre className="oneD">različitog usmjerenja. Ona zatim svoje radove dovršava na način da površinu</pre>
                    <pre className="oneD">"uništava". Umjetnica površinu grebe stvarajući tanje i šire linije čime slika dobiva</pre>
                    <pre className="oneD">završnu teksturu, a ujedno i treću dimenziju."</pre>

                    <button  onClick={executeScroll} className="pingo">VIDI IZLOŽBU</button>
                </div>
            </div>

            <hr></hr>
            

            <div className="palmer">
                <div ref={myRef2}>
                <p className="sok">OSTALI</p>
                <p className="sokic">RADOVI</p>
                </div>
                <div className="love"></div>
                <div className="song"></div>

            </div>

            <p className="listen">Neki tekst koji opisuje ostale slike. Treba smisliti</p>
            <p className="hear"> neki tekst ovdje ako on vec ne postoji.</p>
            <button  className="stresic"><div className="tayloric">VIDI SVE RADOVE</div></button>
            

            <div className="palmer1">
           
                <img className="w1" src={w1}></img>
                <img className="w2" src={w2}></img>
            </div>

            <div className="palmer2">
                <img className="w3" src={w3}></img>
                <img className="w4" src={w4}></img>
            </div>

            <div className="palmer3">
                <img className="w5" src={w5}></img>
                <img className="w6" src={w6}></img>
            </div>

            <div className="palmer4">
                <img className="w7" src={w7}></img>
                <img className="w8" src={w8}></img>
            </div>

            <div className="palmer5">
                <img className="w10" src={w10}></img>
                <img className="w9" src={w9}></img>
            </div>

            <div className="palmer6">
                <img className="w11" src={w11}></img>
                <img className="w12" src={w12}></img>
            </div>

            <div className="palmer7">
                <img className="w13" src={w13}></img>
                <img className="w14" src={w14}></img>
            </div>

            <div className="palmer8">
                <img className="w15" src={w15}></img>
                <img className="w16" src={w16}></img>
            </div>

            <div className="palmer9">
                <img className="w17" src={w17}></img>
                <img className="w18" src={w18}></img>
            </div>



            <hr></hr>

            <div ref={myRef} className="mT">
                <div>
                    <ScrollView  horizontal={true} style={styles.container}
                    
                    >
                        <View style={[{ width: 900, height: 400, padding: 15, backgroundColor: "white" }]}>
                            <hr></hr>
                            <div>
                                <p className="radovi">Pogledajte</p>
                                <p className="radovi2">izložbu</p>
                                <button className="pingo2">ZAPOČNI PRIKAZ</button>
                            </div>
                            <hr className ="capak"></hr>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                            <img className="protein" src={slik} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                            <img className="protein" src={sedma} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                            <img className="protein" src={sesta} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                         <img className="protein" src={treca} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                        <img className="protein" src={peta} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                        <img className="protein" src={druga} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                        <img className="protein" src={deveta} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                        <img className="protein" src={cetvrta} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                        <img className="protein" src={prva} ></img>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                        <img className="protein" src={osma} ></img>
                        </View>

                    </ScrollView>
                </div>
            </div>

            <hr></hr>

          

            <Footer />
        </>
    )
}



export default Painting;

/*
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
*/





