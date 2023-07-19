import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../componentes/Header';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 6;

export default function Perdidos(nav){
    return(
        <View style={styles.conteiner}>
            <Header></Header>

            <ScrollView>
                <View style={styles.lost1}>
                    <Text style={styles.txt}>Carteira</Text>

                    <TouchableOpacity style={{width: '95%', left: 12, top: 10}} onPress={() => nav.navigation.navigate('Artigos')}>
                        <Image style={styles.img1} source={require('../../imagens/Carteira.png')}></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.lost2}>
                    <Text style={styles.txt}>Bilhete de Identidade</Text>

                    <TouchableOpacity style={{width: '95%', left: 12, top: 10}} onPress={() => nav.navigation.navigate('Artigos')}>
                        <Image style={styles.img1} source={require('../../imagens/BI2.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.lost3}>
                    <Text style={styles.txt}>Cadernos</Text>

                    <TouchableOpacity style={{width: '95%', left: 12, top: 10}} onPress={() => nav.navigation.navigate('Artigos')}>
                        <Image style={styles.img1} source={require('../../imagens/caderno.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.lost4}>
                    <Text style={styles.txt}>Estojo</Text>

                    <TouchableOpacity style={{width: '95%', left: 12, top: 10}} onPress={() => nav.navigation.navigate('Artigos')}>
                        <Image style={styles.img1} source={require('../../imagens/Estojo.png')}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
            <StatusBar style="auto"/>
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

    lost1:{
        top: 10,
        left: 16,
        width: '90%',
        height: 250,
        marginTop: 18,
        borderTopWidth: 1
    },

    img1:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width:'85%',
        left: 25,
        justifyContent: 'center'
    },

    lost2:{
        left: 16,
        width: '90%',
        height: 250,
        borderTopWidth: 1
    },

    lost3:{
        left: 16,
        width: '90%',
        height: 250,
        borderTopWidth: 1
    },

    lost4:{
        left: 16,
        width: '90%',
        height: 250,
        marginBottom: 20,
        borderTopWidth: 1
    },

    txt:{
        top: 6,
        left: 7,
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
});