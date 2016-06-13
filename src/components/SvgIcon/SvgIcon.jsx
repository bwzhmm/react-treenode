import React,{PropTypes} from 'react'

function getTransform(position,direction,size,realIconSize){
    let scaleW=size[0]/realIconSize[0]
    let scaleH=size[1]/realIconSize[1]
    return (
        'translate('+position.join(', ')+
        ') scale('+direction.join(', ')+
        ') scale('+scaleW+', '+scaleH+')'
    )
}

function SvgIcon({paths,size,position,direction,realIconSize,style,className,onClick}){
    return (
        <svg style={style} className={className}
            width={size[0]} height={size[1]} onClick={onClick}>
            <g transform={getTransform(position,direction,size,realIconSize)}>
                {
                    paths.map((path,i)=>{
                        return <path key={i} d={path} />
                    })
                }
            </g>
        </svg>
    )
}

SvgIcon.defaultProps={
    size:[16,16],
    position:[0,0],
    direction:[1,1],
    realIconSize:[1024,1024]
}
SvgIcon.propTypes={
    style:PropTypes.object,
    className:PropTypes.string,
    onClick:PropTypes.func,
    paths:PropTypes.arrayOf(PropTypes.string).isRequired,
    size:PropTypes.arrayOf(PropTypes.number),
    position:PropTypes.arrayOf(PropTypes.number),
    direction:PropTypes.arrayOf(PropTypes.number),
    realIconSize:PropTypes.arrayOf(PropTypes.number)
}
module.exports = SvgIcon
