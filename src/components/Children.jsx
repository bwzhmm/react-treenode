import React,{PropTypes} from 'react'

function Children({TreeNode,childs,depth,Header,onClick}) {
    return (
        <div style={{width:'100%'}}>
            {
                childs.map((child,key)=>{
                    return (
                        <TreeNode
                            key={key}
                            Header={Header}
                            node={child}
                            depth={depth}
                            onClick={onClick}
                        />
                    )
                })
            }
        </div>
    )
}
Children.defaultProps={
    childs:[]
}
Children.propTypes={
    childs:PropTypes.object,
    TreeNode:PropTypes.func.isRequired,
    depth:PropTypes.number.isRequired,
    Header:PropTypes.func.isRequired,
    onClick:PropTypes.func.isRequired
}
module.exports = Children
