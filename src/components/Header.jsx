import React,{PropTypes} from 'react'

import SvgIcon from './SvgIcon/SvgIcon.jsx'
import icons from './icons.json'

import _ from 'lodash'

const styles = {
    header:{
        position:'relative',
        width: '100%',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        color: '#888888'
    },
    active:{
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    },
    arrow:{
        transition: 'transform 300ms ease'
    },
    updown: {
        transform: 'rotate(90deg)'
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {node,depth} = this.props
        const dirIcon = depth==0?icons.root:icons.dir
        if (node.leaf) {
            depth += 1
        }

        if (node.active) {
            styles.header = _.merge({}, styles.header, styles.active)
        }
        if (node.open) {
            styles.arrow = _.merge({}, styles.arrow, styles.updown)
        }
        styles.header.paddingLeft = `${depth*20}px`
        return (
            <div style={styles.header}>

                {node.leaf?null:<SvgIcon {...icons.arrow} style={styles.arrow}/>}

                {node.leaf?<SvgIcon {...icons.file}/>:<SvgIcon {...dirIcon}/>}

                {node.name}

            </div>
        )
    }
}
Header.propTypes={
    node:PropTypes.object.isRequired,
    depth:PropTypes.number.isRequired
}
export default  Header
