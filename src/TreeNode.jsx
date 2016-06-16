import React, {PropTypes} from 'react'

const STYLES = {
    treenode:{
        position:'relative',
        width: '100%',
        height: '100%'
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
        const {node,Header,depth,sortFn} = this.props
        return (
            <div name="treenode" style={STYLES.treenode}>
                <Header node={node} depth={depth}/>
                {
                    node.childs?
                    this.renderChilds(node,Header,depth,sortFn):null
                }
            </div>
        )
    }
    renderChilds=(node,Header,depth,sortFn)=>{
        if (!node.childs) {
            return
        }
        if (sortFn) {
            node.childs.sort(sortFn)
        }
        return (
            <div name="childs" style={node.open?null:STYLES.hide}>
                {
                    node.childs.map((child,key)=>{
                        return (
                            <TreeNode
                                key={key}
                                Header={Header}
                                node={child}
                                depth={depth+1}
                                sortFn={sortFn}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

TreeNode.defaultProps={
    node:{name:'root'},
    depth:0
}
TreeNode.propTypes={
    node:PropTypes.object,
    Header:PropTypes.func.isRequired,
    depth:PropTypes.number,
    sortFn:PropTypes.func
}
export default TreeNode
