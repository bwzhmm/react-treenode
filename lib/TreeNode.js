'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = {
    treenode: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto'
    },
    hide: {
        display: 'none'
    }
};

var TreeNode = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeNode).call(this, props));

        _this.renderChilds = function (node, Header, depth, sortFn) {
            if (!node.childs) {
                return;
            }
            if (sortFn) {
                node.childs.sort(sortFn);
            }
            return _react2.default.createElement(
                'div',
                { name: 'childs', style: node.open ? null : STYLES.hide },
                node.childs.map(function (child, key) {
                    return _react2.default.createElement(TreeNode, {
                        key: key,
                        Header: Header,
                        node: child,
                        depth: depth + 1,
                        sortFn: sortFn
                    });
                })
            );
        };

        return _this;
    }

    _createClass(TreeNode, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var node = _props.node;
            var Header = _props.Header;
            var depth = _props.depth;
            var sortFn = _props.sortFn;

            return _react2.default.createElement(
                'div',
                { name: 'treenode', style: STYLES.treenode },
                _react2.default.createElement(Header, { node: node, depth: depth }),
                node.childs ? this.renderChilds(node, Header, depth, sortFn) : null
            );
        }
    }]);

    return TreeNode;
}(_react2.default.Component);

TreeNode.defaultProps = {
    node: { name: 'root' },
    depth: 0
};
TreeNode.propTypes = {
    node: _react.PropTypes.object,
    Header: _react.PropTypes.func.isRequired,
    depth: _react.PropTypes.number,
    sortFn: _react.PropTypes.func
};
exports.default = TreeNode;