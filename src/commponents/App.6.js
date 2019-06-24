import React,{ Component } from 'react';
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: ['a', <h1>ha</h1>]
        }
    }

    render () {
        let arr = [];
        this.state.list.map((item, index) => {
            arr.push(<li key = {index}>{item}</li>)
        })
        return (
            <ul>
               {this.state.list}
               { arr }
            </ul>
        )
    }
}

export default App;
