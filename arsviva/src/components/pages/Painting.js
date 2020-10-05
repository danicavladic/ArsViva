import React from 'react'
import slika from '../slikaa.jpg'
import '../Painting.css'
import Footer from '../Footer';

function Painting() {
    return (
        <>
           <div>
                <img className="jazavac" src={slika}></img>
                <div className="jazaviDiv">
                <hr className="jazavaCrta"></hr>
                <hr className="drugaJazavaCrta"></hr>
                <div className="divCrta"></div>
                <p className="winter">WINTER</p>
                <p className="fairytale">FAIRYTALE</p>
                <p className="darkness">"Darkness bring out our emotions,</p>
                <p className="mix">mix them up with night life potions,</p>
                <p className="countless">so many times we catch the sunrise."</p>
                <button className="projekt1"><div className="pomDiv1">SEE THIS PROJECT</div></button>
                </div>

                <div className="ikonice">
                    <p className="title">Madness</p>
                    <i class="fas fa-palette"></i>
                    <div className="prva">So love that</div>
                    <i class="fas fa-heart"></i>
                    <div className="druga">Fire, memories </div>
                    <div className="treca">Floating higher <i class="fas fa-home"></i></div>
                    <div className="cetvrta">Good for me <i class="fas fa-id-badge"></i></div>
                </div>

                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>
                <div>J</div>

               
                
            </div>
            <Footer/>
        </>



    )
}

export default Painting


/* let popupRef = React.createRef()

        const onShowPopUp = () => {
            popupRef.show()
        } */

/*<StatusBar barStyle='dark-content'/>
<SafeAreaView style={{flex: '1', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
    <TouchableWithoutFeedback onPress={onShowPopUp}>
        <Text style = {{backgroundColor: 'blue' ,color: 'black', fontSize: '20'}}>
            Show PopUp
         </Text>
    </TouchableWithoutFeedback>
    <PopUp ref = {(target) => popupRef = target}/>
</SafeAreaView>*/

/*   <div>
                <img className="jazavac" src={slika}></img>
                <div className="jazaviDiv"></div>
            </div> */