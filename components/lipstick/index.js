import React from 'react';
import {View,Text, ImageBackground, Alert, Button} from 'react-native';
import StyledButton from "../StyledButton";
import style from '../StyledButton/style';
import styles from './style';



const LipItem = (props)=>{

  const {name, description,image} = props.lip;
    return(
        <View style={styles.imageContainer}>

        <ImageBackground 
        source={image}
        style={styles.lipstick}></ImageBackground>
        
              <View style={styles.brand}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}> {description}</Text>
              </View>


              {/* <View style={styles.buttonsContainer}>
              <StyledButton 
              type='primary' 
              content={"Add to Cart"} 
              onPress={() =>{
                Alert.alert("Added to Cart");
              }}>
              </StyledButton>

              

              <StyledButton 
              type='secondary' 
              content={"Check if In-Stock"} 
              onPress={() =>{
                Alert.alert("Currently in Stock ");
              }}>
              </StyledButton>
              </View> */}
             
             
              <View style={styles.buttonsContainer}>
              
              <View style={styles.button}>
              <Button 
                color="white"
                 title="Add to Cart"
                onPress={() => Alert.alert('Item added to Cart')}
              /></View>

                  <View style={styles.button}>
                  <Button 
                  color="white"
                  title="Save for Later"
                   onPress={() => Alert.alert('Item saved for Later')}
                     />
                    </View>
              </View>


            </View>
    );
};

export default LipItem;