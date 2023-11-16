import { Text, Image, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'

export function HistoriaDetail(props) {

    return (
        <>
            <ScrollView style={{backgroundColor: "white"}}>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => props.navigation.navigate('Home')}>
                    <Icon source="chevron-left" size={25} />
                </TouchableOpacity>

                <Image source={require("../../assets/rainyDay.png")} style={{ width: 200, height: 200, alignSelf: "center" }} />
                <Text style={style.title}>Rainy Day</Text>

                <View style={style.lines}>
                    <Text style={style.line}>bgaose ouefey yfweoyr yrwpq yrwy 8yewr8yr y ro8weq yr roweq8 y8te rty8yrt8ew ert7w tr tew rwet ter89 tr8ewr98ew  trew9otr98  ewtr9rtew  rt9ew8 9ew8t tterte rwe89rt rwt9rt</Text>
                </View>
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
    lines: {
        padding: "3rem"
    },
})