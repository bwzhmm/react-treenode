import React from 'react'
import ReactDOM from 'react-dom'

import { TreeNode, Header } from '../index.js'

import Node from './node.json'

const styles = {
    demo:{
        backgroundColor: '#191919',
        width: '300px',
        paddingTop: '5px',
        height:'100%'
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            cursor:{}
        }
    }
    render() {
        return (
            <div style={styles.demo}>
                <TreeNode node={Node} Header={this.getHeader} sortFn={this.sortFn}/>
            </div>
        )
    }
    getHeader=(props)=>{
        return <Header {...props} onClick={this.onClick}/>
    }
    onClick=(e,node)=>{
        e.preventDefault()
        let cursor = this.state.cursor
        cursor.active = false
        node.open=!node.open
        node.active = true
        this.setState({
            cursor:node
        })
    }
    sortFn=(node1,node2)=>{
        if (node1.leaf === node2.leaf) {
            return node1.name > node2.name?1:-1
        }else if (!node1.leaf) {
            return -1
        }
        return 1
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('stage')
)
