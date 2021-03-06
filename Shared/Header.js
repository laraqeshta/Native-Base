import React from "react";
import {View  , StyleSheet , SafeAreaView , Image} from 'react-native';

const Header = () => {

    return(

        <SafeAreaView style={styles.header}>

            <Image 
                source={require("../assets/icon.png")}
                resizeMode="contain"
                style={{height : 50}}
            />

        </SafeAreaView>

    )
}


const styles= StyleSheet.create({
    header:{
        width:"100%",
        flexDirection:"row",
        alignContent:"center",
        justifyContent:"center",
        padding:20
    }
})

export default Header;
