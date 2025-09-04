import { useEffect, useRef, useState } from "react";
import SendMessageButton from "./buttonSendMessage.jsx"
import MessageBox from "./messageBox.jsx";
import binIcon from "./assets/bin-icon.png"
import RemoveFriendBox from "./removeFriendBox.jsx";

function Card(prop) {

    const [showMessageBox, setShowMessageBox] = useState(false)
    const [showRemoveBox, setShowRemoveBox] = useState(false)

    const removeFriendBoxRef = useRef(null)

    useEffect(() => {
        function handler(e) {
            if (removeFriendBoxRef.current){
                if (!removeFriendBoxRef.current.contains(e.target)) {
                    setShowRemoveBox(false)
                }
            }
        }

        document.addEventListener("click", handler)
        return () => {
            document.removeEventListener("click", handler)
        }
    })

    return(
        <div className="card">
            <div className="cardPicBox">
                <img src={prop.img} alt="an image" className="cardpic"></img>
            </div>
            <h2>{prop.name}</h2>
            <p>{prop.desc}</p>
            <div 
                onClick={() => setShowMessageBox(true)}>
                {prop.type!="user" ? 
                    <SendMessageButton 
                        name={prop.name} 
                        type="cardButton"/> 
                    : null}
            </div>            
            {prop.type!="user" && showMessageBox ? 
                <MessageBox 
                    onClose={() => setShowMessageBox(false)} 
                    name={prop.name}/> 
                : null}
            <div ref={removeFriendBoxRef}>
            {prop.type!="user" ? 
                <button 
                    className="remove-friend-button" 
                    onClick={() => setShowRemoveBox(true)}>
                    <img src={binIcon} width={25} className="bin-icon"></img>
                </button> 
                : null}

            {prop.type!="user" && showRemoveBox ? 
               
                    <RemoveFriendBox
                    name={prop.name} 
                    onConfirm = {prop.removeFriend} 
                    onCancel = {() => setShowRemoveBox(false)}/> 
                
                : null}
            </div>
        </div>
    );
}


export default Card