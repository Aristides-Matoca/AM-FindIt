import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform } from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 6

export default function Registro(nav){

    return (
        <KeyboardAvoidingView style={styles.back} behavior ={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset ={2}>
                <View style={styles.fundo}>
                    <Image style={styles.logo} source={require('../../imagens/logo.png')}></Image>
                </View>

            <ScrollView style={{width:'100%', backgroundColor: 'white', paddingLeft: 20}}>
                <View style={styles.conteiner}>
                    <TextInput style={styles.input} placeholder='Nome' placeholderTextColor={'#DABC1F'} autoCorrect={false} onChangeText={() => { }} />
                    <TextInput style={styles.inpu} placeholder='Email' placeholderTextColor={'#DABC1F'} autoCorrect={false} onChangeText={() => { }} />
                    <TextInput style={styles.inpu} placeholder='Senha' placeholderTextColor={'#DABC1F'} autoCorrect={false} onChangeText={() => { }} />
                    <TextInput style={styles.inpu} placeholder='Confirmar a Senha' placeholderTextColor={'#DABC1F'} autoCorrect={false} onChangeText={() => { }} />

                    <TouchableOpacity style={styles.submit} onPress={() => nav.navigation.navigate('Home')}>
                        <Text style={{color: 'black', fontSize: 18}} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    back:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    fundo:{
        backgroundColor: '#DABC1F',
        alignItems: 'center',
        justifyContent: 'center',
        height: 220,
        width:'100%',
    },

    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width:'99%',
        left: '-0.5%',
        top: 31
    },

    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        top: -10,
        borderBottomColor: 'white'
    },

    input:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#DABC1F',
        width: '80%',
        marginTop: 80,
        color: '#DABC1F',
        fontSize: 20
    },

    inpu:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#DABC1F',
        width: '80%',
        marginTop: 60,
        color: '#DABC1F',
        fontSize: 20
    },

    submit:{
        borderRadius: 50,
        width: '40%',
        height: 45,
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 60,
        backgroundColor: '#D9D9D9',
        borderColor: '#DABC1F',
        borderWidth: 1
    },
});