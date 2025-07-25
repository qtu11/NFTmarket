import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {HomeHeader} from '~/layout/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeHeader />
    </SafeAreaView>
  );
};

export default HomeScreen;
