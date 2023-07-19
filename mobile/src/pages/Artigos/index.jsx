import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image, ScrollView} from "react-native";

export default function Artigos(){

    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={{fontSize: 17}}>Título</Text>
                <Text style={{fontSize: 20, top: 22}}>Samsung Flip</Text>
            </View>

            <View style={styles.view2}>
                <Text style={{fontSize: 17}}>Descrição do Artigo</Text>
                <Text style={{fontSize: 20, top: 22, textAlign: 'justify', width: 310}}>Telefone Sansung, modelo Flip encontrado no ISPTEC, perto do Bloco Administrativo</Text>
            </View>

            <View style={styles.view3}>
                <Image source={require('../../imagens/Samsung.png')} style={{width: 310, height: 195}}/>
            </View>

            <View style={styles.view4}>
                <Text style={{fontSize: 17}}>Contactos</Text>
                <Text style={{fontSize: 20, top: 22}}>Telefone: 928 736 722</Text>
                <Text style={{fontSize: 20, top: 22}}>Email: lost.found@findit.co.ao</Text>
            </View>
            <ScrollView></ScrollView>
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
        borderBottomWidth: 1,
        paddingLeft: 10,
        height: 80,
        width: 330,
        left: 22,
        top: 90,
    },

    view2:{
        borderBottomWidth: 1,
        paddingLeft: 10,
        height: 125,
        width: 330,
        left: 22,
        top: 130
    },

    view3:{
        borderBottomWidth: 1,
        paddingLeft: 10,
        height: 225,
        width: 330,
        left: 22,
        top: 165,
    },

    view4:{
        paddingLeft: 10,
        height: 105,
        width: 330,
        left: 22,
        top: 210
    },
});
