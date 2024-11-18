import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';

const images = [
  require('../../../imagens/barb1.jpg'),
  require('../../../imagens/barb2.jpg'),
  require('../../../imagens/barb3.jpg'),
  require('../../../imagens/barb4.jpg'),
  require('../../../imagens/barb5.jpg'),
  require('../../../imagens/barb6.jpg'),
  require('../../../imagens/barb7.jpg'),
  require('../../../imagens/barb8.jpg'),
  require('../../../imagens/barb9.jpg'),
  require('../../../imagens/barb10.jpg'),
  require('../../../imagens/tonybarbearia.jpg'),
  require('../../../imagens/tonybarbearia2.jpg'),
  require('../../../imagens/tonybarbearia3.jpg'),
];

export default function Carrossel() {
  return (
    <View>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={3}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image1} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
