import React from 'react';
import Table from './Table';
import Search from './Search';

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
        this.onChange = this.onChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    } 

    onChange(e) {
        this.setState({searched: e.target.value});
    }

    onDismiss(id) {
        const updatedList = this.state.list.filter(el => el.objectID !== id);
        this.setState({list: updatedList});
    }

    onSubmit(event) {
        this.fetchingProcess(this.state.searched);
        event.preventDefault();
    }

    assigningProcess(result) {
        console.log(result.hits);
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
        if(!this.state.list) return (<i style={{fontSize: "100px", textAlign: "center"}} className="fas fa-spinner fa-pulse"></i>); 
        return (
            <>
                <Search searched={this.state.searched} onChange={this.onChange} onSubmit={this.onSubmit}>Search</Search>
                <Table 
                    list={this.state.list} 
                    onDismiss={this.onDismiss} 
                />
            </>
        )
    }
}

export default App;