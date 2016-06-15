import React from 'react'
import ReactDOM from 'react-dom'

import TreeNode,{Header} from '../index.js'

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
                <TreeNode node={Node} Header={this.getHeader}/>
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
}
ReactDOM.render(
    <Demo />,
    document.getElementById('stage')
)
