import React, { Component } from 'react'
import Item from './components/Item'
import List from './components/List'

export default class App extends Component {

    state = {
        listArr: [
            {
                title: '上半身',
                items: [
                    { id: '001', name: '飛鳥', done: false },
                    { id: '002', name: '俯臥撐', done: false },
                ]
            },

            {
                title: '下半身',
                items: [
                    { id: '001', name: '深蹲', done: false },
                ]
            }

        ]
    }

    addNewItemToList = (title, item) => {
        const {listArr} = this.state
        const list = listArr.find(list => list.title == title)
        list.items.push({
            id: `00${list.items.length + 1}`, name: item.name, done: true
        })

        this.setState({listArr: listArr})
    }
    

    render() {
        const { listArr} = this.state

        return (
            <div>
                {
                    listArr.map(list => <List {...list} addNewItemToList={this.addNewItemToList}/>)
                }
            </div>
        )
    }
}
