import { useRef } from "react"
import ButtonSendMessage from "./buttonSendMessage"

function MessageBox(prop) {

    const messageBoxRef = useRef();

    const closeMessageBox = (e) => {
        if(messageBoxRef.current === e.target) {
            prop.onClose()
        }
    }

    return (
        <div ref={messageBoxRef} onClick={closeMessageBox} className="message-box-container">
            <div className="message-box">
                <div className="message-box-header">
                    <h3>Send a message to {prop.name}</h3>
                    <button className="close-button" onClick={prop.onClose}>X</button>
                </div>
                <textarea id="send-message-txta"></textarea>
                <div className="send"><ButtonSendMessage/></div>
            </div>
        </div>
    )
}

export default MessageBox