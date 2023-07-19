import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 6
 
export default function Login(nav) {

    return (
        <KeyboardAvoidingView style={styles.back} behavior ={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset ={1}>
            <View style={styles.fundo}>
                <Image style={styles.logo} source={require('../../imagens/logo.png')}></Image>
            </View>

            <ScrollView style={{width:'100%', backgroundColor: 'white', paddingLeft: 20}}>
                <View style={styles.conteiner}>
                    <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#DABC1F'} autoCorrect={false}/>
                    <TextInput style={styles.inpu} placeholder='Senha' placeholderTextColor={'#DABC1F'} autoCorrect={false}/>

                    <Text style={{color: 'black', left: -65, top: 5}}>Não tem uma conta? </Text>
                    <TouchableOpacity style={styles.register}>   
                        <Text style={styles.registerText} onPress={() => nav.navigation.navigate('Registro')}>Registar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.submit} onPress={() => nav.navigation.navigate('Home')}>
                        <Text style={styles.submitText}>Login</Text>
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

    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        top: -170,
        borderBottomColor: 'white'
    },

    input:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#DABC1F',
        width: '80%',
        marginTop: 300,
        color: '#DABC1F',
        fontSize: 20
    },

    inpu:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#DABC1F',
        width: '80%',
        marginTop: 100,
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
        backgroundColor: '#D9D9D9',
        borderColor:'#DABC1F',
        borderWidth: 1
    },

    submitText:{
        color: 'black',
        fontSize: 18
    },

    register:{
        marginTop: 10,
        top: -25,
        marginBottom: 40,
        flexDirection: 'row',
        marginRight: -62
    },

    registerText:{
        color: '#DABC1F'
    },
});