import { View } from "react-native";
import { ListeningActivity } from "../../components/Activity/ListeningActivity";
import { WriteActivity } from "../../components/Activity/WriteActivity";

export function Activity(props){
    return(
        <View style={{backgroundColor: "white", height: "100%"}}>
            {/* <ListeningActivity/> */}
            {props.type == write ? <WriteActivity/> : ""}
            
        </View>
    )
}