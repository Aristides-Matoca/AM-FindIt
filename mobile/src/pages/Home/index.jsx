import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Header from '../../componentes/Header';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 6

export default function Home(nav){

    return (
        <View style={styles.container}>
            <Header></Header>

            <TouchableOpacity style={{top: 20, width: 160, left: 105}} onPress={() => nav.navigation.navigate('Perdidos')}>
                <Text style={styles.lostText}>Artigos Perdidos</Text>
            </TouchableOpacity>

            <View style={styles.lost}>
                <TouchableOpacity style={{width: 180, top: 8}} onPress={() => nav.navigation.navigate('Artigos')}>
                    <Image source={require('../../imagens/BI2.png')} style={{width: 180, height: 125, borderRadius: 10}}/>
                </TouchableOpacity>

                <Text style={{fontSize: 17, top: -115, left: 185, width: 160}}>Bilhete de Identidade</Text>
                <Text style={{fontSize: 17, top: -40, left: 185, width: 160}}>Data: 04/01/2023</Text>
            </View>

            <TouchableOpacity style={{top: 75, width: 160, left: 105}} onPress={() => nav.navigation.navigate('Achados')}>
                <Text style={styles.foundText}>Artigos Achados</Text>
            </TouchableOpacity>

            <View style={styles.found}>
            <TouchableOpacity style={{width: 180, top: 8}} onPress={() => nav.navigation.navigate('Artigos')}>
                    <Image source={require('../../imagens/Samsung.png')} style={{width: 180, height: 125, borderRadius: 10}}/>
                </TouchableOpacity>

                <Text style={{fontSize: 17, top: -115, left: 185, width: 160}}>Samsung Flip</Text>
                <Text style={{fontSize: 17, top: -40, left: 185, width: 160}}>Data: 23/01/2023</Text>
            </View>

            <TouchableOpacity style={{top: 115, width: 180, left: 105}} onPress={() => nav.navigation.navigate('Devolvidos')}>
                <Text style={styles.devolText}>Artigos Devolvidos</Text>
            </TouchableOpacity>

            <View style={styles.devol}>
                <TouchableOpacity style={{width: 180, top: 8}} onPress={() => nav.navigation.navigate('Artigos')}>
                    <Image source={require('../../imagens/Carteira.png')} style={{width: 180, height: 125, borderRadius: 10}}/>
                </TouchableOpacity>

                <Text style={{fontSize: 17, top: -115, left: 185, width: 160}}>Carteira de bolso</Text>
                <Text style={{fontSize: 17, top: -40, left: 185, width: 160}}>Data: 30/01/2023</Text>
            </View>
            
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        //paddingTop: statusBarHeigth,
    },

    lostText:{
        fontSize: 20,
        textAlign: 'center'
    },

    lost:{
        borderTopWidth: 1,
        height: 140,
        width: 350,
        left: 12,
        top: 30
    },

    foundText:{
        fontSize: 20,
        textAlign: 'center'
    },

    found:{
        borderTopWidth: 1,
        height: 140,
        width: 350,
        left: 12,
        top: 85
    },

    devolText:{
        fontSize: 20,
        textAlign: 'center'
    },

    devol:{
        borderTopWidth: 1,
        height: 140,
        width: 350,
        left: 12,
        top: 125
    }
});
