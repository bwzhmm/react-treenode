import React, {PropTypes} from 'react'

import Children from './components/Children.jsx'

const STYLES = {
    treenode:{
        position:'relative',
        width: '100%',
        height: '100%'
    },
    header:{
        position: 'relative',
        width: '100%',
        cursor: 'pointer'
    },
    hide:{
        display: 'none'
    }
}

class TreeNode extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {node,Header,depth,onClick,Childs} = this.props
        return (
            <div className={STYLES.treenode}>
                <div className={STYLES.header} onClick={(e)=>{onClick(e,node)}}>
                    <Header node={node} depth={depth}/>
                </div>
                {
                    node.childs?
                    this.renderChilds(node,Header,depth,onClick,Childs):null
                }
            </div>
        )
    }
    renderChilds=(node,Header,depth,onClick,Childs)=>{
        return (
            <div className={node.open?null:STYLES.hide}>
                <Childs
                    TreeNode={TreeNode}
                    Header={Header}
                    childs={node.childs}
                    depth={depth+1}
                    onClick={onClick}
                />
            </div>
        )
    }
}

TreeNode.defaultProps={
    node:{name:'root'},
    depth:0,
    onClick:()=>{},
    Childs:Children
}
TreeNode.propTypes={
    node:PropTypes.object,
    Header:PropTypes.func.isRequired,
    depth:PropTypes.number,
    onClick:PropTypes.func,
    Childs:PropTypes.func.isRequired
}
module.exports = TreeNode
