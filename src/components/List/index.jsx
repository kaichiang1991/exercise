import React, { Component } from 'react'
import Footer from '../Footer'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    render() {
        const {title, items, addNewItemToList} = this.props

        return (
            <details className="item-container">
                <summary>{title}</summary>
                <ul>
                    {
                        items.map(item => <Item key={item.id} {...item}/>)
                    }
                </ul>
                <Footer addNewItemToList={addNewItemToList} title={title}/>
            </details>
        )
    }
}
