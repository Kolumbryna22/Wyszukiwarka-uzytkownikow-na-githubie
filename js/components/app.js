class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            users: []
        };
    }

    onChangeHandle(event) {
        this.setState({searchText: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const {searchText} = this.state;
        const url = `https://api.github.com/search/users?q=${searchText}`;

        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({users: responseJson.items}));
    }

    render() {
        return (
            <div>
                <div className="filters">
                    <h2 className="chooseMedia">Choose platform</h2>
                    <div class="social-list">
                        <button class="twitter">
                            <i class="fa fa-twitter"></i>
                        </button>
                        <button class="facebook">
                            <i class="fa fa-facebook"></i>
                        </button>
                        <button class="google-plus">
                            <i class="fa fa-google-plus"></i>
                        </button>
                        <button class="instagram">
                            <i class="fa fa-instagram"></i>
                        </button>
                        <button class="github">
                            <i class="fa fa-github"></i>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit={event => this.onSubmit(event)}>
                        <label htmlFor="searchText">Search by user name</label>
                        <input 
                            type="text" 
                            id="searchText" 
                            onChange={event => this.onChangeHandle(event)} 
                            value={this.state.searchText}/>
                    </form>
                    <UsersList users={this.state.users}/>
                </div>
            </div>
        );
    }
}
