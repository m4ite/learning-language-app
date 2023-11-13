import {View, Text, Image, StyleSheet} from 'react-native'

export function HistoriaEscolher(props) {
    return (
        <>
            <View style={style.container}>
                <Image source={require("../assets/initial.png")} style={style.img}/>
                <Text style={style.title}>{props.title}</Text>
                <Text style={style.xp}>+ {props.xp} XP</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    img:{
        width: "150px",
        height: "150px",
        alignSelf: 'center'
        
        
    },
    title:{
        fontWeight: "600",
        textAlign: 'center'
    },
    xp:{
        textAlign: 'center'
    },
    container:{
        width: "50%",
        padding: "2em"
    }

})