import {initialPeople, UserType} from "../HW8";

type PayloadType = 'up' | 'down'

type SortActionType = {
    type: 'sort'
    payload: PayloadType
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionsType = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<UserType> = initialPeople, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let copyState = [...state]
                copyState.sort( (a,b) => a.name>b.name ? 1 : -1)
                return copyState
            }

            if (action.payload === 'down') {
                let copyState = [...state]
                copyState.sort((a,b) => b.name>a.name ? 1 : -1)
                return copyState
            }

            return state
        }

        case 'check': {
            let copyState = [...state]
            return copyState.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}

export const sortAC = (payload:PayloadType): SortActionType => {
    return {type: 'sort', payload: payload}
}

export const checkAC = (payload: number): CheckActionType => {
    return {type: 'check', payload: payload}
}