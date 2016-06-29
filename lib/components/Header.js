'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('./SvgIcon/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _icons = require('./icons.json');

var _icons2 = _interopRequireDefault(_icons);

var _Radium = require('Radium');

var _Radium2 = _interopRequireDefault(_Radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultStyles = {
    header: {
        position: 'relative',
        width: '100%',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        color: '#9DA5AB',
        cursor: 'pointer'
    },
    active: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    },
    arrow: {
        transition: 'transform 300ms ease'
    },
    open: {
        transform: 'rotate(90deg)'
    }
};

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

        _this.handleClick = function (e) {
            var _this$props = _this.props;
            var node = _this$props.node;
            var onClick = _this$props.onClick;

            if (onClick) {
                onClick(e, node);
            }
        };

        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var node = _props.node;
            var depth = _props.depth;
            var styles = _props.styles;
            var depthSize = _props.depthSize;
            var fileIcon = _props.fileIcon;
            var dirIcon = _props.dirIcon;
            var rootIcon = _props.rootIcon;

            var parentIcon = depth == 0 ? rootIcon : dirIcon;

            if (node.leaf) {
                depth += 1;
            }

            var headerStyles = [defaultStyles.header, { paddingLeft: depth * depthSize + 'px' }];
            if (node.active) {
                headerStyles.push(defaultStyles.active, styles.active);
            }
            headerStyles.push(styles.header);

            var arrowStyles = [defaultStyles.arrow, _icons2.default.arrow.style];
            if (node.open) {
                arrowStyles.push(defaultStyles.open, styles.open);
            }
            arrowStyles.push(styles.arrow);

            return _react2.default.createElement(
                'div',
                { style: headerStyles, onClick: this.handleClick, name: 'header' },
                node.leaf ? null : _react2.default.createElement(_SvgIcon2.default, _extends({ style: arrowStyles }, _icons2.default.arrow)),
                node.leaf ? _react2.default.createElement(_SvgIcon2.default, fileIcon) : _react2.default.createElement(_SvgIcon2.default, parentIcon),
                node.name
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

Header.defaultProps = {
    styles: {},
    depthSize: 20,
    fileIcon: _icons2.default.file,
    dirIcon: _icons2.default.dir,
    rootIcon: _icons2.default.root
};
Header.propTypes = {
    node: _react.PropTypes.object.isRequired,
    depth: _react.PropTypes.number.isRequired,
    styles: _react.PropTypes.object,
    fileIcon: _react.PropTypes.object,
    dirIcon: _react.PropTypes.object,
    rootIcon: _react.PropTypes.object,
    depthSize: _react.PropTypes.number,
    onClick: _react.PropTypes.func
};
exports.default = (0, _Radium2.default)(Header);