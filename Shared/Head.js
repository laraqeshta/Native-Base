import React from "react";
import { StyleSheet , Image , SafeAreaView , View } from "react-native";


const Head = () => {

    return(
        <SafeAreaView style={styles.header}>
            <Image 
            source={require("../assets/easyShopLogo.png")}
            resizeMode="contain"
            style={{height: 50}} 
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        marginTop:200
    }
})


export default Head;