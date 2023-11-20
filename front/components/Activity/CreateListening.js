import { TextInput } from "react-native-paper"
import { StyleSheet } from "react-native";

export function CreateListening(){
    return(
        <>
            {/* Audio */}
            <TextInput
                    label="Alternativa Correta"
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setEmail(text)} />
            <TextInput
                    label="Alternativa 1"                  
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setEmail(text)} />
            <TextInput
                    label="Alternativa 2"                  
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setEmail(text)} />
            <TextInput
                    label="Alternativa 3"                    
                    style={style.input}
                    activeUnderlineColor="green"
                    underlineColor="#EF5454"
                    onChangeText={(text) => setEmail(text)} />
        </>
    )
}



const style = StyleSheet.create({
    input: {
        backgroundColor: "#F9F9F9",
        margin: 10,
        borderColor: "gray",
        marginHorizontal: 50,
    },
})