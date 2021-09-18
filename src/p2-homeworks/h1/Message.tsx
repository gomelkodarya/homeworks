import React from 'react'
import classes from "./Message.module.css";

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.container}>
            <img src={props.avatar}/>

            <div className={classes.message}>
                <div className={classes.message_content}>
                    <div className={classes.message_text}>
                        <h1>{props.name}</h1>
                        <p>{props.message}</p>
                    </div>
                    <div className={classes.message_time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
{}