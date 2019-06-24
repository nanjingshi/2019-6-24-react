import React,{ Component } from 'react';
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [
                {
                    brand: '康师傅',
                    data: ['老谭酸菜', '统一', '鲜虾', '小鸡炖蘑菇']
                },
                {
                    brand: '统一',
                    data: ['老谭酸菜', '统一', '鲜虾', '小鸡炖蘑菇']
                }
            ]
        }
    }

    render () {
        return (
            <ul>
               {
                   this.state.list.map((item, index) => {
                       return (
                           <li key = {index}>
                               {item.brand}
                               <ul>
                                    {
                                        item.data.map((itm, idx) => {
                                            return (
                                                <li key ={idx}>
                                                    {itm}
                                                </li>
                                            )
                                        })
                                    }
                               </ul>
                           </li>
                       )
                   })
               }
            </ul>
        )
    }
}

export default App;
