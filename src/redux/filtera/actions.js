import { COLOECHANGED, STATUSCHANGED } from "./actionTypes";

export const colorChanged = (color, changeType) => {
    return{
        type: COLOECHANGED,
        payload: {
            color,
            changeType
        }
    }
}

export const statusChanged = (status) => {
    return{
        type: COLOECHANGED,
        payload: {
            status
        }
    }
}


