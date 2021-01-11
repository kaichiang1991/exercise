import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    render() {
        console.log('item prop', this.props)
        const {id, name, done} = this.props

        return (
            <li>
                <input type="checkbox"/>
                <p>{name}</p> 
                <input className="times" type="number"/>次
                <input className="times" type="number"/>組
            </li>
        )
    }
}
