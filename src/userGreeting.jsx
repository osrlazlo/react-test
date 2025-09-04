import Card from "./card";
import FriendList from "./list";
import mypic from "./assets/mypic.jpg";
import MessageBox from "./messageBox";

function UserGreeting(props) {
    if (props.isLoggedIn) {
        return (
            <div className="user-page">
                <h2>Welcome {props.userName}!</h2>
                <Card name="Me" desc="this is my description" img={mypic} type="user"/>
                <h3>My friends</h3>
                <p>
                    Add friends with theses pictures<br></br>
                    krillin: <a href="https://static.wikia.nocookie.net/27fcb33f-5b21-4617-90e4-3f59aee8c6ab/scale-to-width/370" target="blank">
                    https://static.wikia.nocookie.net/27fcb33f-5b21-4617-90e4-3f59aee8c6ab/scale-to-width/370</a> <br></br>
                    bulma: <a href="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/3e324332910289.569815b93bd38.jpg" target="blank">
                    https://mir-s3-cdn-cf.behance.net/project_modules/max_632/3e324332910289.569815b93bd38.jpg</a>
                </p>
                <FriendList/>
            </div>
        );
    }
    return (
        <h2>Log in to continue</h2>
    );
}

export default UserGreeting