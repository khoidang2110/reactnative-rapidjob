import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { NAME_NAVIGATION } from "../common/Const"
import { RouteProp } from "@react-navigation/native"

export type RootParams = {
    Home:undefined  
    Detail:{
        employer_logo:string,
        job_publisher:string,
        job_title:string,
        job_country:string,
        job_highlights: {
           
           Qualifications:[],
            Responsibilities:[],
            Benefits:[]
            
        }
    }
}

//TypeCheck push to new page
export type PropStackDetail = NativeStackNavigationProp<RootParams,NAME_NAVIGATION.DETAIL>

//TypeCheck Get params from route
export type PropsRouteDetail = RouteProp<RootParams,NAME_NAVIGATION.DETAIL>