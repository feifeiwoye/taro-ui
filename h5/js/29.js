(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"272":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),r=n(45),i=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(59)),u=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(273);var s=function(e){function AtFloatLayout(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtFloatLayout);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtFloatLayout.__proto__||Object.getPrototypeOf(AtFloatLayout)).apply(this,arguments));t.handleClose=function(){(0,l.default)(t.props.onClose)&&t.props.onClose()},t.close=function(){t.setState({"isOpened":!1},t.handleClose)};var n=e.isOpened;return t.state={"isOpened":n},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtFloatLayout,a.default.Component),o(AtFloatLayout,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;t!==this.state.isOpened&&(this.setState({"isOpened":t}),!t&&this.handleClose())}},{"key":"render","value":function render(){var e=this.state.isOpened,t=this.props.title,n=["at-float-layout"];return e&&n.push("at-float-layout--active"),a.default.createElement(r.View,{"className":n},a.default.createElement(r.View,{"onClick":this.close,"className":"at-float-layout__overlay"}),a.default.createElement(r.View,{"className":"at-float-layout__container layout"},a.default.createElement(r.View,{"className":"layout-header"},a.default.createElement(r.Text,{"className":"layout-header__title"},t),a.default.createElement(r.View,{"className":"layout-header__icon","onClick":this.close},a.default.createElement(u.default,{"value":"close","size":"18","color":"#CCC"}))),a.default.createElement(r.View,{"className":"layout-body"},a.default.createElement(r.ScrollView,{"scrollY":!0,"className":"layout-body__content"},this.props.children))))}}]),AtFloatLayout}();t.default=s,s.propTypes={"title":i.default.string,"isOpened":i.default.bool}},"273":function(e,t,n){},"275":function(e,t,n){},"35":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),r=n(45),i=_interopRequireDefault(n(272)),l=_interopRequireDefault(n(55)),u=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}n(275);var s=function(e){function FloatLayoutPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FloatLayoutPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FloatLayoutPage.__proto__||Object.getPrototypeOf(FloatLayoutPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.handleClick=function(t){e.setState(_defineProperty({},"isOpened"+t,!0))},e.handleClose=function(t){console.log("handleClose"),e.setState(_defineProperty({},"isOpened"+t,!1))},e.state={"isOpened1":!1,"isOpened2":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FloatLayoutPage,a.default.Component),o(FloatLayoutPage,[{"key":"render","value":function render(){var e=this.state,t=e.isOpened1,n=e.isOpened2;return a.default.createElement(r.View,{"className":"page float-layout-page"},a.default.createElement(u.default,{"title":"Float Layout 浮动弹层"}),a.default.createElement(r.View,{"className":"doc-body"},a.default.createElement(r.View,{"className":"panel"},a.default.createElement(r.View,{"className":"panel__title"},"基本用法"),a.default.createElement(r.View,{"className":"panel__content"},a.default.createElement(r.View,{"className":"example-item"},a.default.createElement(l.default,{"onClick":this.handleClick.bind(this,1)},"打开 Float Layout")))),a.default.createElement(r.View,{"className":"panel"},a.default.createElement(r.View,{"className":"panel__title"},"最大高度"),a.default.createElement(r.View,{"className":"panel__content"},a.default.createElement(r.View,{"className":"example-item"},a.default.createElement(l.default,{"onClick":this.handleClick.bind(this,2)},"打开 Float Layout"))))),a.default.createElement(i.default,{"title":"这是个标题","isOpened":t,"onClose":this.handleClose.bind(this,"1")},a.default.createElement(r.View,{"className":"content-wrapper"},"这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写")),a.default.createElement(i.default,{"title":"这是个标题这是个标题这是个标题这是个标题这是个标题这是个标题","isOpened":n,"onClose":this.handleClose.bind(this,"2")},a.default.createElement(r.View,{"className":"content-wrapper"},"《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生： 封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子 外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过 指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息 邻居当中有个永生不死的老头 … 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生： 封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子 外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过 指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息 邻居当中有个永生不死的老头 … 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。")))}}]),FloatLayoutPage}();t.default=s},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var o=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,r,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"56":function(e,t,n){var o=n(60).Symbol;e.exports=o},"57":function(e,t){e.exports=function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"58":function(e,t,n){var o=n(56),a=n(62),r=n(63),i="[object Null]",l="[object Undefined]",u=o?o.toStringTag:void 0;e.exports=function baseGetTag(e){return null==e?void 0===e?l:i:u&&u in Object(e)?a(e):r(e)}},"59":function(e,t,n){var o=n(58),a=n(57),r="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=function isFunction(e){if(!a(e))return!1;var t=o(e);return t==i||t==l||t==r||t==u}},"60":function(e,t,n){var o=n(61),a="object"==typeof self&&self&&self.Object===Object&&self,r=o||a||Function("return this")();e.exports=r},"61":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(2))},"62":function(e,t,n){var o=n(56),a=Object.prototype,r=a.hasOwnProperty,i=a.toString,l=o?o.toStringTag:void 0;e.exports=function getRawTag(e){var t=r.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(e){}var a=i.call(e);return o&&(t?e[l]=n:delete e[l]),a}},"63":function(e,t){var n=Object.prototype.toString;e.exports=function objectToString(e){return n.call(e)}}}]);