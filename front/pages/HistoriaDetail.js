import { Text, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Audio } from "expo-av"

export function HistoriaDetail(props) {
    const sound = new Audio.Sound()

    const load = async() => {
        await sound.loadAsync({
            uri: "https://soundcloud.com/iamdesertstar/airport-song?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        })
    }

    load()

    const play = async() => {
        await sound.playAsync()
    }
    

    return (
        <>
            <ScrollView>
                <Image source={require("../assets/rainyDay.png")} style={{ width: 200, height: 200, alignSelf: "center" }} />
                <Text style={style.title}>Rainy Day</Text>

                <View style={style.lines}>
                    <Text style={style.line}>bgaose ouefey yfweoyr yrwpq yrwy 8yewr8yr y ro8weq yr roweq8 y8te rty8yrt8ew ert7w tr tew rwet ter89 tr8ewr98ew  trew9otr98  ewtr9rtew  rt9ew8 9ew8t tterte rwe89rt rwt9rt</Text>
                </View>
                <TouchableOpacity onPress={() => play()}><Text>play</Text></TouchableOpacity>
            </ScrollView>

        </>
    )
}


const style = StyleSheet.create({
    title: {
        fontSize: "20px",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "800"
    },
    lines:{
        padding: "3rem"
    },
})