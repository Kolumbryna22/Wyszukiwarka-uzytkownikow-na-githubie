class UsersList extends React.Component {
    get users() {
        console.log(this.props.users);
        const list = this.props.users.map(user => <User key={user.id} user={user}/>);
        return list;
    }

    render() {
        return (
            <div className="gallery">
                {this.users}
            </div>
        )
    }
}
