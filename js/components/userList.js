export default class UserList extends RTCIceCandidate.Component {
    get users() {
        return this.props.users.map(user => <User key={user.id} user={user}/>);
    }
    render() {
        return (
            <div>
                {this.users}
            </div>
        )
    }
}
