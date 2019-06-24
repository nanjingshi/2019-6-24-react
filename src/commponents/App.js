import React,{ Component } from 'react';
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            flag: true
        }
    }

    render () {
        if (this.state.flag) {
            return (
                <div>zhen</div>
            )
        } else {
            return (
                <div>jia</div>
            )
        }
    }
}

export default App;
