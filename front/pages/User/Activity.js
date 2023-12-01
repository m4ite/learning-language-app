import { View } from "react-native";
import { ListeningActivity } from "../../components/Activity/ListeningActivity";
import { WriteActivity } from "../../components/Activity/WriteActivity";
import { OptionsActivity } from "../../components/Activity/OptionsActivity";
import { useContext } from "react";
import { activityContext } from "../../context/activityContext";

export function Activity(props){
    const {typeActivity, setTypeActivity} = useContext(activityContext)

    return(
        <View style={{backgroundColor: "white", height: "100%"}}>
            {typeActivity.type == "write" ? <WriteActivity name={props.name}/> : ""}
            {typeActivity.type == "listening" ? <ListeningActivity name={props.name}/> : ""}
            {typeActivity.type == "option" ? <OptionsActivity name={props.name}/> : ""}
            
        </View>
    )
}