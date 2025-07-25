import * as React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';
import { MainLogo } from '~/constants/assets';
import Icons from '~/components/Icons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={MainLogo} alt='SweetSoft Minimart' style={styles.logo} />
      <Icons name='menu' />
    </View>
  );
};

export default HomeHeader;