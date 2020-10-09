import React from 'react'
import '../Painting.css';
import sl from '../11.jpg'
import slik from '../13.jpg'
import slisli from '../12.jpg'
import Footer from '../Footer';
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native';




function Painting() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    })


    return (
        <>
            <div className="flexx">
                <div className="leftt">
                    <p className="sok">SLIKARSKI</p>
                    <p className="sokic">RADOVI</p>
                    <pre className="d4">Gordana Šiško je članica HLD od početka 2019.</pre>
                    <pre className="d2">Sudjelovala je na više zajedničkih izložbi te imala svoju izložbu</pre>
                    <pre className="d3">u veljači 2020.  u galeriji HLD.</pre>
                    <button className="stresic"><div className="tayloric">VIDI SVE RADOVE</div></button>

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

                    <button className="pingo">VIDI IZLOŽBU</button>
                </div>
            </div>

            <hr></hr>

            <div className="mT">
                <div>
                    <ScrollView horizontal={true} style={styles.container}>
                        <View style={[{ width: 900, height: 400, padding: 15, backgroundColor: "white" }]}>
                            <hr></hr>
                            <div>
                                <p className="radovi">Pogledajte sve ostale</p>
                                <p className="radovi2">radove</p>
                                <button className="pingo2">VIDI IZLOŽBU</button>
                            </div>
                            <hr className ="capak"></hr>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                            <div><img className="protein" src={sl} ></img></div>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                            <div><img className="protein" src={slik} ></img></div>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>
                            <div><img className="protein" src={slisli} ></img></div>
                        </View>

                        <View style={[{ width: 700, height: 500, padding: 15 }]}>

                        </View>
                    </ScrollView>
                </div>
            </div>

            <hr></hr>

            <Footer />
        </>
    )
}



export default Painting

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


