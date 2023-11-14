import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native"

export function HistoriaEscolher(props) {
    var navigation = useNavigation()
    return (
        <>
            <TouchableOpacity style={style.container} onPress={() => navigation.navigate("HistoriaDetail")}>
                <Image source={require("../assets/" + props.image)} style={style.img}/>
                <Text style={style.title}>{props.title}</Text>
                <Text style={style.xp}>+ {props.xp} XP</Text>
            </TouchableOpacity>
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