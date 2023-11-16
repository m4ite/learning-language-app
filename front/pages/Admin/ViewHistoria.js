import { TouchableOpacity } from "react-native"
import { Icon } from "react-native-paper"

export function ViewHistoria(props){
    return(
    <>
        <TouchableOpacity onPress={() => props.navigation.navigate('HomeADM')} style={{padding: 10}}>
            <Icon source="chevron-left" size={20}/>
        </TouchableOpacity>
    </>
    )
}