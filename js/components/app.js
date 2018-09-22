class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            users: [],
            isActive: false
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

    showFilters(event) {
        event.preventDefault();

        this.setState({isActive: true});
    }

    render() {
        return (
            <div>
                <div className="filters">
                    <h2 className="chooseMedia">Choose platform</h2>
                    <div className="social-list">
                        <button className="twitter">
                            <i className="fa fa-twitter"></i>
                        </button>
                        <button className="facebook">
                            <i className="fa fa-facebook"></i>
                        </button>
                        <button className="google-plus">
                            <i className="fa fa-google-plus"></i>
                        </button>
                        <button className="instagram">
                            <i className="fa fa-instagram"></i>
                        </button>
                        <button className="github" onClick={event => this.showFilters(event)}>
                            <i className="fa fa-github"></i>
                        </button>
                    </div>
                    <div className={this.state.isActive ? 'show specifiedFilter':'specifiedFilter'}>
                        <h2>Filter by:</h2>
                        <p>Repositories</p>
                        <p>Stars</p>
                        <p>Followers</p>
                        <p>Following</p>
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
