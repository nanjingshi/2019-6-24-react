import React from 'react';
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            msg: 'hello'
        }
    }
    render () {
        return (
            <div>
                <h1>haha</h1>
                { this.state.msg }
            </div>
        )
    }
}

export default App;
