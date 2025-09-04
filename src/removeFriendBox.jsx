
function RemoveFriendBox(prop) {

    return(
        <div className="remove-friend-box">
            <h3>Are you sure you want to remove {prop.name} as a friend?</h3>
            <button onClick={prop.onConfirm}>Yes</button>
            <button onClick={prop.onCancel}>Cancel</button>
        </div>
    )
}

export default RemoveFriendBox