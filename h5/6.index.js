(window.webpackJsonptaro_ui_test=window.webpackJsonptaro_ui_test||[]).push([[6],{"14":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=_interopRequireDefault(n(1)),r=_interopRequireDefault(n(0)),i=n(10),o=_interopRequireDefault(n(53)),c=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(97);var u=function(e){function ButtonPage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ButtonPage);for(var a=arguments.length,l=Array(a),r=0;r<a;r++)l[r]=arguments[r];return t=n=_possibleConstructorReturn(this,(e=ButtonPage.__proto__||Object.getPrototypeOf(ButtonPage)).call.apply(e,[this].concat(l))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ButtonPage,r.default.Component),a(ButtonPage,[{"key":"onButtonClick","value":function onButtonClick(){var e=l.default.getEnv();"WEAPP"===e?l.default.showModal({"content":"\b您点击了！","showCancel":!1}):"WEB"===e&&alert("\b您点击了！")}},{"key":"render","value":function render(){return r.default.createElement(i.View,{"className":"page"},r.default.createElement(c.default,{"title":"Button 按钮"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"主操作"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"primary"},"主操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"primary","loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"primary","disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"次要操作"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"secondary"},"次操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"secondary","loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"type":"secondary","disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"次次要操作"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,null,"次次要操作按钮")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"loading":!0},"Loading")),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(o.default,{"disabled":!0},"不可操作")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"小按钮"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small"},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small"},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small"},"按钮"))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","loading":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","loading":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","loading":!0}))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","disabled":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","disabled":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","disabled":!0},"按钮"))))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"圆角按钮"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","circle":!0},"按钮"))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","loading":!0,"circle":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","loading":!0,"circle":!0})),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","loading":!0,"circle":!0}))),r.default.createElement(i.View,{"className":"btn-item"},r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"primary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"type":"secondary","size":"small","disabled":!0,"circle":!0},"按钮")),r.default.createElement(i.View,{"className":"subitem"},r.default.createElement(o.default,{"size":"small","disabled":!0,"circle":!0},"按钮")))))))}}]),ButtonPage}();t.default=u},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var a=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,l,r,i){if(i!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),r=n(10),i=_interopRequireDefault(n(46)),o=_interopRequireDefault(n(50));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(54);var c={"normal":"normal","small":"small"},u={"primary":"primary","secondary":"secondary"},s=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,l.default.Component),a(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.size,n=void 0===t?"normal":t,a=e.type,i=void 0===a?"":a,s=e.circle,m=e.loading,d=e.disabled,f=["at-button"],p=c[n]||"",b=d?"at-button--disabled":"",h=u[i]?"at-button--"+i:"",y=s?"at-button--circle":"";f.push("at-button--"+p,h,y,b),f=f.filter(function(e){return""!==e});var g=void 0;return m&&(g=l.default.createElement(r.View,{"className":"at-button__icon"},l.default.createElement(o.default,{"value":"loading","size":"20"})),f.push("at-button--icon")),l.default.createElement(r.View,{"className":f,"onClick":this.onClick.bind(this)},g,l.default.createElement(r.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=s,s.defaultProps={"size":"normal","type":"","circle":!1,"loading":!1,"disabled":!1},s.propTypes={"size":i.default.oneOf(["normal","small"]),"type":i.default.oneOf(["primary","secondary"]),"circle":i.default.bool,"loading":i.default.bool,"disabled":i.default.bool}},"54":function(e,t,n){var a=n(55);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(a,l);a.locals&&(e.exports=a.locals)},"55":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset \"UTF-8\";\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Mixins\n */\n/* library */\n/**\n * 元素居中定位\n */\n/**\n * @example scss\n *\n * .element {\n *   @include clearfix;\n * }\n *\n * // CSS Output\n * .element::after {\n *   clear: both;\n *   content: '';\n *   display: block;\n * }\n */\n/**\n * 通用的遮罩\n */\n/**\n * Mixes a color with black. It's different from darken()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amount of black to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: shade(#ffbb52, 60%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #664a20;\n *   }\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* Flex Item */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 点击态\n */\n/**\n * 禁止态\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 设置placeholder 颜色\n */\n.at-button {\n  margin: 0 auto;\n  padding: 0 0.68267rem;\n  height: 1.96267rem;\n  color: #333;\n  font-size: 0.68267rem;\n  line-height: 1.92rem;\n  text-align: center;\n  border-radius: 0.17067rem;\n  border: 1PX solid #C5D9E8;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .at-button:active {\n    opacity: 0.6; }\n  .at-button--active {\n    opacity: 0.6; }\n  .at-button--disabled {\n    opacity: 0.3; }\n    .at-button--disabled:active {\n      opacity: 0.3; }\n  .at-button--primary {\n    background-color: #5c89e4;\n    color: #fff;\n    border: 1PX solid #5c89e4; }\n  .at-button--secondary {\n    background-color: #fff;\n    color: #5c89e4;\n    border: 1PX solid #5c89e4; }\n  .at-button--small {\n    display: inline-block;\n    padding: 0 0.34133rem;\n    width: auto;\n    min-width: 2.13333rem;\n    max-width: 15.14667rem;\n    height: 1.28rem;\n    font-size: 0.59733rem;\n    line-height: 1.23733rem; }\n  .at-button--circle {\n    border-radius: 2.13333rem;\n    overflow: hidden;\n    background-clip: border-box; }\n  .at-button__icon {\n    margin: 0 0.42667rem;\n    display: inline-block;\n    -webkit-animation: loading-rotate 1s linear infinite;\n            animation: loading-rotate 1s linear infinite; }\n  .at-button__text {\n    display: inline; }\n\n@-webkit-keyframes loading-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loading-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n",""])},"97":function(e,t,n){var a=n(98);"string"==typeof a&&(a=[[e.i,a,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(a,l);a.locals&&(e.exports=a.locals)},"98":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".panel__content .btn-item {\n  margin-bottom: 0.42667rem; }\n  .panel__content .btn-item:last-child {\n    margin-bottom: 0; }\n  .panel__content .btn-item .subitem {\n    display: inline-block;\n    margin-left: 0.512rem; }\n    .panel__content .btn-item .subitem:first-child {\n      margin-left: 0; }\n",""])}}]);