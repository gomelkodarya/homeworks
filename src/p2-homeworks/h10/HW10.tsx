import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        const action = loadingAC(true)
        dispatch(action)

        setTimeout(()=> {
            const action = loadingAC(false)
            dispatch(action)
        }, 2000)
    }



    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (<div>
                        <img src={'https://t3.ftcdn.net/jpg/03/13/47/34/360_F_313473495_gOeaIo8H9nM3YgyS6LgqEebBZfyBZVV5.jpg'} width={100} height={50}/>
                   </div>

                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
