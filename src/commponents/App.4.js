import React,{ Component } from 'react';
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: ['a', 'b', 'c']
        }
    }

    render () {
        return (
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return (<li key = {index}>
                            { item }
                        </li>)
                    })
                }
            </ul>
        )
    }
}

export default App;
