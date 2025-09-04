import gohanPic from "./assets/gohan.jpg"
import gokuPic from "./assets/goku.jpg"
import piccoloPic from "./assets/piccolo.jpg"
import vegetaPic from "./assets/vegeta.jpg"
import trunksPic from "./assets/trunks.jpg"
import Card from "./card"
import { useRef, useState } from "react"
import AddFriendBox from "./addFriendBox"


function List() {

    const [showAddFriendBox, setShowAddFriendBox] = useState(false)

    const nextId = useRef(0)
    function giveId() {
        return nextId.current++
    }

    const [friends, setFriendList] = useState([
        {id:giveId(), name:"goku", img:gokuPic},
        {id:giveId(), name:"gohan", img:gohanPic},
        {id:giveId(), name:"vegeta", img:vegetaPic},
        {id:giveId(), name:"piccolo", img:piccoloPic},
        {id:giveId(), name:"trunks", img:trunksPic}
    ])

    function addFriendCard(friend) {
        return(
            <li key={friend.id}>
                <Card name={friend.name.toUpperCase()} 
                      img={friend.img} 
                      desc={"this is your friend "+friend.name.toUpperCase()+"'s description"}
                      removeFriend={() => removeFriend(friend.id)}/>
             </li>
        )
    }

    function addFriend() {
        let friendName = document.getElementById("add-friend-name").value
        let imgUrl = document.getElementById("add-friend-img-url").value
        if (friendName == "" || imgUrl == "") {
            alert("Please enter a name and an image URL")
            return
        }
        setShowAddFriendBox(false)
        let newId = giveId()
        let newFriend = {id:newId, name:friendName, img:imgUrl}
        setFriendList(f => [...f, newFriend])
    }  

    function removeFriend(id) {
        let updtFriendList = friends.filter((element, _) => id != element.id)
        setFriendList(f => updtFriendList)
    }

    return (
        <>
        <button onClick={() => setShowAddFriendBox(true)} id="add-friend-button">Add a Friend</button>
        <div className="friend-list">
            {friends.map(friend => addFriendCard(friend))}
        </div>
        
        {showAddFriendBox ? <AddFriendBox addFriend={() => addFriend()} onClose={() => setShowAddFriendBox(false)}/> : null}
        </>
    )
}

export default List