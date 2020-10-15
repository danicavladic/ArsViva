import React from 'react';
import '../Project.css';
import kapelica from '../kon.JPG';
import spavaca from '../pr0.jpg';
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

function Project() {
    return (
        <div>
            <div className="flex-container">
                <div className="left-container">
                
                </div>
                <div className="middle-container">
                    <div className="text-container">
                        <div className="small-text">Winter fairytale in Zagreb. Come and visit us. It's beautiful.</div>
                        <div className="main-title">OBITELJSKA KUĆA</div>
                        <div className="bottom-text">Comfortable, luxurious, cool.</div>
                    </div>

                    <div className="skrol">
                    <ScrollView  horizontal={true} style={styles.container}>
                        <View style={[{ width: 200, height: 300, padding: 15 }]}>
                            <img className="skrol-slika" src={spavaca} ></img>
                        </View>

                        <View style={[{ width: 200, height: 300, padding: 15 }]}>
                            <img className="skrol-slika" src={spavaca} ></img>
                        </View>

                        <View style={[{ width: 200, height: 300, padding: 15 }]}>
                            <img className="skrol-slika" src={spavaca} ></img>
                        </View>
                    </ScrollView>
                </div>
                <button className="bottom-button">VIDI IZLOŽBU</button>
                </div>
                <div className="right-container">
                    <div>
                        <img className="kapelica-slika" src={kapelica}></img>
                        <div className="small-flex">
                            <i class="fas fa-chevron-left"></i>
                            <p className="blagovaonica">BLAGOVAONICA</p>
                            <i class="fas fa-chevron-right"></i>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
