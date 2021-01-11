import React, { Component } from 'react'
import './index.css'
import '../Item/index.css'

export default class Footer extends Component {

    state = {
        name: '',
        times: 0,
        group: 0
    }

    refName = React.createRef()
    refTimes = React.createRef()
    refGroup = React.createRef()

    handleChange = (key) => {       // 沒用到
        return (event) => {
            const {target} = event
            this.setState({[key]: target.value})
        }
    }

    confirmEvent = () => {
        const name = this.refName.current.value
        const times = this.refTimes.current.value
        const group = this.refGroup.current.value
        
        if(name.trim() === '')  return      // 沒有名稱
        if(times <= 0 || group <= 0) return     // 次數或組數小於0

        const {title, addNewItemToList} = this.props
        addNewItemToList(title, {name: name, times: times, group: group} )
    }

    render() {
        return (
            <div className="footer">
                <label> 新增 </label>
                <input ref={this.refName} onChange={this.handleChange('name')} type="text"/>
                <input ref={this.refTimes} onChange={this.handleChange('times')} className="times" type="number"/> 次
                <input ref={this.refGroup} onChange={this.handleChange('group')} className="times" type="number"/> 組

                <button onClick={this.confirmEvent} className="btn">確認</button>
            </div>
        )
    }
}
