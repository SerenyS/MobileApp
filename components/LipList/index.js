import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native'
import styles from './style';
import LipItem from '../lipstick';// from lipstick for LipItem
import lipsticks from './lipsticks'; // from LipList



const lipstickList =(props)=>{
    return(
        <View style={styles.container}>
           <FlatList
               data={lipsticks}
           renderItem={({item}) => <LipItem lip={item}/> } 
           snapToAlignment={'start'}
           decelerationRate={'fast'}
           snapToInterval={Dimensions.get('window').height}
           
           />
        </View>
    );
};

export default lipstickList;