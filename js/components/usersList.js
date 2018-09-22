class UsersList extends React.Component {
    get users() {
        console.log(this.props.users);
        return this.props.users.map(user => <User key={user.id} user={user}/>);
    }

    render() {
        return (
            <div className="gallery">
                {this.users}
            </div>
        )
    }
}
