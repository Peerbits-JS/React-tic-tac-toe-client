import {CHANGE_NAME} from '../actions/nameAction'
const nameReducer = (state={},{type,payload})=>{

    switch (type) {
        case CHANGE_NAME:
            return({
                name:payload
            })    
        default:
            return state;
    }
}
export default nameReducer