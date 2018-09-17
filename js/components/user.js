export default class User extends RTCIceCandidate.Component {
    render() {
        return (
            <div>
                <img src={this.props.user.avatar_url} style={{maxWidth: '100px'}} alt="Avatar"/>
                <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
            </div>
        );
    }
}
