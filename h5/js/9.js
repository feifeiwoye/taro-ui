(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"143":function(e,t,a){},"15":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),l=a(45),o=_interopRequireDefault(a(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(143);var i=function(e){function BasicTypo(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BasicTypo);for(var r=arguments.length,n=Array(r),l=0;l<r;l++)n[l]=arguments[l];return t=a=_possibleConstructorReturn(this,(e=BasicTypo.__proto__||Object.getPrototypeOf(BasicTypo)).call.apply(e,[this].concat(n))),a.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BasicTypo,n.default.Component),r(BasicTypo,[{"key":"render","value":function render(){return n.default.createElement(l.View,{"className":"page"},n.default.createElement(o.default,{"title":"Typography 字体"}),n.default.createElement(l.View,{"className":"doc-body"},n.default.createElement(l.View,{"className":"panel"},n.default.createElement(l.View,{"className":"panel__title"},"示例"),n.default.createElement(l.View,{"className":"panel__content"},n.default.createElement(l.View,{"className":"table-typo"},n.default.createElement(l.View,{"className":"table-typo__head"},n.default.createElement(l.View,{"className":"thead"},"类型"),n.default.createElement(l.View,{"className":"thead"},"行高"),n.default.createElement(l.View,{"className":"thead"},"用途")),n.default.createElement(l.View,{"className":"table-typo__body"},n.default.createElement(l.View,{"className":"table-typo__line"},n.default.createElement(l.View,{"className":"col h0"},"H0，40PX"),n.default.createElement(l.View,{"className":"col"},"60PX"),n.default.createElement(l.View,{"className":"col"},"仅用于数字")),n.default.createElement(l.View,{"className":"table-typo__line"},n.default.createElement(l.View,{"className":"col h1"},"H1，36PX"),n.default.createElement(l.View,{"className":"col"},"54PX"),n.default.createElement(l.View,{"className":"col"},"大模块标题")),n.default.createElement(l.View,{"className":"table-typo__line"},n.default.createElement(l.View,{"className":"col h2"},"H2，32PX"),n.default.createElement(l.View,{"className":"col"},"48PX"),n.default.createElement(l.View,{"className":"col"},"常规标题")),n.default.createElement(l.View,{"className":"table-typo__line"},n.default.createElement(l.View,{"className":"col h3"},"H3，28PX"),n.default.createElement(l.View,{"className":"col"},"42PX"),n.default.createElement(l.View,{"className":"col"},"正文")),n.default.createElement(l.View,{"className":"table-typo__line"},n.default.createElement(l.View,{"className":"col h4"},"H4，24PX"),n.default.createElement(l.View,{"className":"col"},"36PX"),n.default.createElement(l.View,{"className":"col"},"辅助信息、注释")),n.default.createElement(l.View,{"className":"table-typo__line"},n.default.createElement(l.View,{"className":"col h5"},"H5，20PX"),n.default.createElement(l.View,{"className":"col"},"30PX"),n.default.createElement(l.View,{"className":"col"},"标签"))))))))}}]),BasicTypo}();t.default=i},"46":function(e,t,a){e.exports=a(47)()},"47":function(e,t,a){"use strict";var r=a(48);function emptyFunction(){}e.exports=function(){function shim(e,t,a,n,l,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(1),l=_interopRequireDefault(a(0)),o=_interopRequireDefault(a(46)),i=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(50);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"50":function(e,t,a){}}]);