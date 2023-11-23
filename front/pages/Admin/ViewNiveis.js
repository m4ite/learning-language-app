import axios from "axios"
import { TouchableOpacity, ScrollView, Text, StyleSheet, Image } from "react-native"
import { Icon, List, MD3Colors } from "react-native-paper"

export function ViewNiveis(props) {

    const getNiveis = async () => {
        var res = await axios.get("http://localhost:8080/level",{headers: {"Authorization":"Bearer "+jwt}})
        console.log(res)
    }
   

    return (
        <>
            <TouchableOpacity onPress={() => props.navigation.navigate('HomeADM')} style={{ padding: 10 }}>
                <Icon source="chevron-left" size={20} />
            </TouchableOpacity>

            <Image source={require("../../assets/initial.png")} style={style.img} />

            <Text style={style.title}>Níveis Criados</Text>

            <ScrollView style={style.Accordion}>
                <List.AccordionGroup>
                    <List.Accordion title="Nivel 1" id='1' >
                        <TouchableOpacity><List.Item style={style.List} title="Atividade 1" left={props => <List.Icon {...props} icon="file-document-outline" />}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("CreateAtividade")}><List.Item style={style.List} title="Criar atividade" left={props => <List.Icon {...props} icon="plus" />}/></TouchableOpacity>
                    </List.Accordion>
                    <List.Accordion title="Nivel 2" id='2'>
                        <TouchableOpacity><List.Item style={style.List} title="Atividade 1" left={props => <List.Icon {...props} icon="file-document-outline" />}/></TouchableOpacity>
                        <TouchableOpacity><List.Item style={style.List} title="Atividade 2" left={props => <List.Icon {...props} icon="file-document-outline" />}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("CreateAtividade")}><List.Item style={style.List} title="Criar atividade" left={props => <List.Icon {...props} icon="plus" />}/></TouchableOpacity>
                    </List.Accordion>
                </List.AccordionGroup>
            </ScrollView>
            <TouchableOpacity style={style.plus} onPress={() => props.navigation.navigate("CreateNivel")}><Icon source="plus" color={MD3Colors.error100} size={40} /></TouchableOpacity>
        </>
    )
}


const style = StyleSheet.create({
    Accordion: {
        margin: 30
    },
    List: {
        backgroundColor: "white"
    },
    title:{
        fontSize: 20,
        textAlign: "center",
        color: "#EF5454",
        fontWeight: "900",
        margin: 15
    },
    plus:{
        position: "fixed",
        bottom: 0,
        right: 0,
        margin: 15,
        backgroundColor: "#EF5454",
        borderRadius: "50%",
        padding: ".5em"
    },
    img: {
        width: "200px",
        height: "200px",
        alignSelf: 'center',
        margin: 10
    }
})