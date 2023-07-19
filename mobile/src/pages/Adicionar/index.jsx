import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 6;

export default function Perdidos(nav){
    return(
        <View style={styles.conteiner}>
            <ScrollView>
                <View style={styles.add}>
                    <Text style={{fontSize: 20}}>Nome do Artigo</Text>
                    <TextInput style={styles.input} placeholder='ex.: Samsung A32' placeholderTextColor={'grey'} autoCorrect={false}/>
                    
                    <Text style={{fontSize: 20}}>Descrição</Text>
                    <TextInput style={styles.input} placeholder='ex.: Telefone encontrado na universidade' placeholderTextColor={'grey'} autoCorrect={false}/>
                    
                    <Text style={{fontSize: 20}}>Contactos</Text>
                    <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'grey'} autoCorrect={false}/>
                    <TextInput style={styles.input} placeholder='Telefone' placeholderTextColor={'grey'} autoCorrect={false}/>
                    
                    <Text style={{fontSize: 20, marginBottom: 10}}>Estado do Artigo</Text>
                    <View style={styles.radio}></View><Text style={{fontSize: 20, marginBottom: 5, left: 40, top: -13}}>Perdido</Text>
                    <View style={styles.radio}></View><Text style={{fontSize: 20, marginBottom: 10,  left: 40, top: -13}}>Achado</Text>

                    <Text style={{fontSize: 20, marginBottom: 10}}>Fotografia do Artigo</Text>
                    <View style={styles.foto}><Text style={{fontSize: 17, color: 'grey', textAlign: 'center'}}>Insira uma foto do artigo</Text></View>

                    <TouchableOpacity style={styles.submit} onPress={() => nav.navigation.navigate('Adicionar')}>
                        <Text style={{color: 'white', fontSize: 20}} >Adicionar Artigo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({   
    conteiner:{
        flex: 1,
        alignContent: 'center',
        paddingTop: statusBarHeigth,
        backgroundColor: 'white'
    },

    add:{
        width: '100%',
        height: 830,
        marginTop: 3,
        paddingLeft: 20,
        backgroundColor: 'white'
    },

    input:{
        backgroundColor: '#F6F2F2',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        height: 50,
        width: '93%',
        marginTop: 10,
        paddingLeft: 20,
        marginBottom: 20,
        color: 'black',
        fontSize: 17
    },

    radio:{
        backgroundColor: '#F6F2F2',
        borderRadius: 100,
        height: 20,
        width: 20,
        top: 12
    },

    foto:{
        backgroundColor: '#F6F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 180
    },

    submit:{
        borderRadius: 15,
        width: '80%',
        height: 50,
        left: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#DABC1F',
        borderColor: '#black',
        borderWidth: 1
    },
});