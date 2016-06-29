'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTransform(position, direction, size, realIconSize) {
    var scaleW = size[0] / realIconSize[0];
    var scaleH = size[1] / realIconSize[1];
    return 'translate(' + position.join(', ') + ') scale(' + direction.join(', ') + ') scale(' + scaleW + ', ' + scaleH + ')';
}

function SvgIcon(_ref) {
    var paths = _ref.paths;
    var size = _ref.size;
    var position = _ref.position;
    var direction = _ref.direction;
    var realIconSize = _ref.realIconSize;
    var style = _ref.style;
    var className = _ref.className;
    var onClick = _ref.onClick;

    return _react2.default.createElement(
        'svg',
        { style: style, className: className,
            width: size[0], height: size[1], onClick: onClick },
        _react2.default.createElement(
            'g',
            { transform: getTransform(position, direction, size, realIconSize) },
            paths.map(function (path, i) {
                return _react2.default.createElement('path', { key: i, d: path });
            })
        )
    );
}

SvgIcon.defaultProps = {
    size: [16, 16],
    position: [0, 0],
    direction: [1, 1],
    realIconSize: [1024, 1024]
};
SvgIcon.propTypes = {
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    paths: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
    size: _react.PropTypes.arrayOf(_react.PropTypes.number),
    position: _react.PropTypes.arrayOf(_react.PropTypes.number),
    direction: _react.PropTypes.arrayOf(_react.PropTypes.number),
    realIconSize: _react.PropTypes.arrayOf(_react.PropTypes.number)
};
module.exports = SvgIcon;