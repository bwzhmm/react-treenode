import React,{PropTypes} from 'react'

import SvgIcon from './SvgIcon/SvgIcon.jsx'
import icons from './icons.json'

import _ from 'lodash'

const STYLES = {
    header:{
        position:'relative',
        width: '100%',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        color: '#cccccc'
    },
    arrow:{
        transition: 'transform 300ms ease'
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

        let styles = {}

        if (node.active) {
            styles.header = {backgroundColor: 'rgba(255, 255, 255, 0.15)'}
        }
        styles.header = _.merge({}, styles.header, {paddingLeft:`${depth*20}px`})

        if (node.open) {
            styles.arrow = {transform: 'rotate(90deg)'}
        }

        styles.arrow = _.merge({}, icons.arrow.style, styles.arrow)

        styles = _.merge(styles,STYLES)
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
