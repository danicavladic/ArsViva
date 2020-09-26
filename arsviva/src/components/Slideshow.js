import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import project1 from './project1.jpg';
import project2 from './6.jpg';
import project3 from './3.jpg';
import project4 from './5.jpg';
import project5 from './7.jpg';
import project6 from './4.jpg';
import project7 from './slideshow1.jpg';
import project8 from './slideshow2.jpg';
import project9 from './slideshow4.jpg';
import project10 from './slideshow5.jpg';
import project11 from './slideshow6.jpg';
import project12 from './slideshow7.jpg';
import project13 from './karosel.jpg';
import project14 from './karosel2.jpg';
import project15 from './karosel3.jpg';

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    left: 440,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
 
  container: {
      marginTop: '-695px',
      marginLeft: '-828px',

  },
 
});
export default function Slideshow({img}) {
  const width = 988;
  const height = 650;
  

  const [active, setActive] = useState(0);

  const images = [
    project4,
    project2,
    project3,
    project1,
    project5,
    project7,
    project8,
    project10,
  ];

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView 
        pagingEnabled
        horizontal
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={{width, height, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
}
