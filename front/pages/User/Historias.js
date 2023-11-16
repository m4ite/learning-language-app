import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { HistoriaEscolher } from '../../components/HistoriaEscolher';
export function Historias(props) {
    return (
        <>
            <Image source={require("../../assets/hello.png")} style={style.img} />
            <View>
                <Text style={style.title}>MiauMundo Histórias</Text>
                <Text style={style.subtitle}>Melhore a sua leitura, escuta e fala com histórias curtinhas</Text>
            </View>


            <ScrollView>
                <Text style={style.h2}><Text style={style.span}>Série 1</Text></Text>
                <View style={style.grid}>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                </View>

                <Text style={style.h2}><Text style={style.span}>Série 2</Text></Text>
                <View style={style.grid}>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                    <HistoriaEscolher title="A Rainy Day" xp="15" image="rainyDay.png"/>
                </View>
            </ScrollView>
        </>
    )
}



const style = StyleSheet.create({
    title: {
        fontSize: "20px",
        textAlign: "center",
        fontWeight: "800",
        padding: "1em"
    },
    subtitle: {
        textAlign: "center",
        padding: "1em"
    },
    h2: {
        width: "100%",
        textAlign: "center",
        borderBottomColor: "#bebebe",
        borderBottomWidth: "1px",
        lineHeight: "0.1em",
        margin: "10px",
        marginVertical: "20px"
    },
    span: {
        paddingHorizontal: "10px",
        backgroundColor: "white",
        fontWeight: "900"
    },
    grid: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    button:{
        marginHorizontal: "10px"
    },
    img:{
        width: "120px",
        height: "108px",
        alignSelf: "center",
        margin: "10px"
    }
})