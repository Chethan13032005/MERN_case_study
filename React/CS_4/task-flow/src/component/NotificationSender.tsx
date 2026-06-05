import React from "react";
import {  useNotificationStore } from "../notificationStore"

export function NotificationSender(){
    const addNotification = useNotificationStore((state)=>state.addNotification)

    const buttonStyle={
        padding:'10px 16px',
        marginRight:'10px',
        border:'none',
        borderRadius:'4px',
        backgroundColor:'#f9f9f9',
        cursor:'pointer',
        fontSize:'14px'
    };

    return (
        <div style={{marginBottom:'30px'}}>
            <button style={buttonStyle} onClick={()=>addNotification("Info notification added!",'info')}>Add info Notification</button>

            <button style={buttonStyle} onClick={()=>addNotification("An error has occurred!",'error')}>Add error Notification</button>

            <button style={buttonStyle} onClick={()=>addNotification("Task completed successfully",'success')}>Add success Notification</button>
        </div>

    )
}