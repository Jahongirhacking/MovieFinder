import React from 'react';

// https://hn.algolia.com/api/v1/search?query=redux

const PATH_BASE = 'https://hn.algolia.com/api/v1/';
const PATH_SEARCH = 'search';
const PARAM_SEARCH = 'query=';
const DEFAULT_QUERY = 'redux';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: null,
            searched: DEFAULT_QUERY
        }
        this.fetchingProcess = this.fetchingProcess.bind(this);
        this.assigningProcess = this.assigningProcess.bind(this);
    } 

    assigningProcess(result) {
        this.setState({list: result.hits});
    }

    fetchingProcess(searched) {
        const fullURL = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searched}`
        fetch(fullURL)
            .then(response => response.json())
            .then(result => this.assigningProcess(result))
    }

    componentDidMount() {
        const {searched} = this.state;
        this.fetchingProcess(searched);
    }

    render() {
        return (
            <>
                <h1>Hello World!!!</h1>
                {this.state.list 
                    ? <div>
                        {
                            this.state.list.map(
                                (el,key) => <p key={key}>{el.title}</p>
                            )
                        }
                    </div> 
                    : "Empty"}
            </>
        )
    }
}

export default App;