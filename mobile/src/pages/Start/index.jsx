import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, StyleSheet, View, TouchableOpacity} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 6

export default function Start(nav) {

    return (
        <KeyboardAvoidingView style={styles.back}>
            <View style={styles.fundo}>
                <TouchableOpacity onPress={() => nav.navigation.navigate('Next')}>
                    <Image style={styles.logo} source={require('../../imagens/logo1.png')}></Image>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    back:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#DABC1F'
    },

    fundo:{
        height: 250,
        width:'100%',
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width:385
    },
});