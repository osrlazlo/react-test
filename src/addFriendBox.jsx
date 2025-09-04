import { useRef } from "react"


function AddFriendBox(prop) {

    const addFriendBoxRef = useRef();

    const closeaddFriendBox = (e) => {
        if(addFriendBoxRef.current === e.target) {
            prop.onClose()
        }
    }

    return (
        <div ref={addFriendBoxRef} onClick={closeaddFriendBox} className="add-friend-box-container">
            <div className="add-friend-box">
                <div className="add-friend-box-header">
                    <h3>Add a Friend!</h3>
                    <button className="close-button" onClick={prop.onClose}>X</button>
                </div>
                <div className="add-friend-form">
                    <input id="add-friend-name" type="text" placeholder="Enter your friend's name"/>
                    <input id="add-friend-img-url" type="text" placeholder="URL to your friend's picture"/>
                    <div className="footer"><button className="button-add-friend" onClick={prop.addFriend}>Add friend</button></div>
                </div>
            </div>
        </div>
    )
}

export default AddFriendBox