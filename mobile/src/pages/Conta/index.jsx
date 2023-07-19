import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export default function Artigos(){

    return(
        <View style={styles.container}>
            <View style={styles.view1}>

                <TouchableOpacity style={{width: 26, height: 26, left: 310, top: -10}}>
                    <Image style={styles.pontos} source={require('../../imagens/3pontos.png')}></Image>
                </TouchableOpacity>

                <Text style={{fontSize: 20, top: 22}}>Sem nenhuma conta</Text>
            </View>
            
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    view1:{
        paddingLeft: 10,
        height: 80,
        width: 330,
        left: 22,
        top: 60,
    },

    pontos:{
        width: 20,
        height: 22,
        marginBottom: 20
    }
});