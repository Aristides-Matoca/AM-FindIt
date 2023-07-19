import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 6

export default function Start(nav){

    return (
        <KeyboardAvoidingView style={styles.back}>
            <View style={styles.fundo}>
                <Image style={styles.logo} source={require('../../imagens/logo.png')}></Image>
            </View>

            <View style={styles.welcome}>
                <Text style={{fontSize: 25, color: '#DABC1F'}}>BEM-VINDO AO FINDIT</Text>
            </View>

            <TouchableOpacity style={styles.next} onPress={() => nav.navigation.navigate('Login')}>
                <Text style={styles.text}>Seguinte</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    back:{
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    fundo:{
        backgroundColor: '#DABC1F',
        height: 230,
        width:'100%',
    },

    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width:'99%',
        left: '0.2%',
        top: 81
    },

    welcome:{
        justifyContent: 'center',
        alignItems: 'center',
        top: 200
    },

    next:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 42,
        width: 88,
        left: 260,
        top: 460
    },

    text:{
        color: '#DABC1F',
        fontSize: 20
    }
});