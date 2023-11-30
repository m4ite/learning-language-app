import { ProgressBar, MD3Colors } from 'react-native-paper';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export function ActivityPreview(props) {
    const navigatin = useNavigation()
    function pages(){
        if(props.type == write)
            console.log("write")
    }
    return (
        <TouchableOpacity>
            <View style={style.lesson}>
                <View style={{ padding: "1em" }}>
                    <View style={style.circle}>
                        <Image source={require("../../assets/arrow.png")} style={{ width: 65, height: 65 }} />
                    </View>
                </View>
                <View style={{ padding: "1em" }}>
                    <Text style={style.name}>{props.nome}</Text>
                    <ProgressBar progress={0.5} color={MD3Colors.onBackground} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    circle: {
        backgroundColor: "#CB6BE6",
        padding: "1em",
        borderRadius: "50%"
    },
    name: {
        fontSize: "18px",
        width: "8em",
        marginVertical: 8
    },
    lesson: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "70%",
        alignSelf: "center",
        alignItems: "center"
    }
})