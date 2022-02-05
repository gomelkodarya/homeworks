export type LoadingType = {
    loading: boolean
}

export type LoadingActionType = {
    type: 'LOADING',
    loading: boolean
}

export type ActionType = LoadingActionType

const initState: LoadingType = {
   loading: false
}

export const loadingReducer = (state = initState, action: ActionType): LoadingType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                loading: action.loading
            }
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean): LoadingActionType => {
    return {type: 'LOADING', loading}
} // fix any