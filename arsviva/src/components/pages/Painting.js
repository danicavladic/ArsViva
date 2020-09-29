import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Architecture.css';
import ProjectCards from '../ProjectCards';
import { PopUp } from '../PopUp';
import { SafeAreaView, StyleSheet, StatusBar, Text, TouchableWithoutFeedback } from 'react-native';





    const Painting = () => {

        let popupRef = React.createRef()

        const onShowPopUp = () => {
            popupRef.show()
        }

        return (
            <>
                    <StatusBar barStyle='dark-content'/>
                    <SafeAreaView style={{flex: '1', alignItems: 'center', justifyContent: 'center', marginTop: '100px'}}>
                        <TouchableWithoutFeedback onPress={onShowPopUp}>
                            <Text style = {{backgroundColor: 'blue' ,color: 'black', fontSize: '20'}}>
                                Show PopUp 
                             </Text>
                        </TouchableWithoutFeedback>
                        <PopUp ref = {(target) => popupRef = target}/>
                            
                       
                    </SafeAreaView>
            </> 
        )

    }

export default Painting;