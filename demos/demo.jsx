import React from 'react'
import ReactDOM from 'react-dom'

import TreeNode from 'TreeNode'
import Header from 'Header'

const styles = {
    demo:{
        backgroundColor: '#191919',
        width: '300px',
        paddingTop: '5px'
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={styles.demo}>
                <TreeNode Header={Header} />
            </div>
        )
    }
}
ReactDOM.render(
    <Demo />,
    document.getElementById('stage')
)
