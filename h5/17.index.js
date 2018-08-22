(window.webpackJsonptaro_ui_test=window.webpackJsonptaro_ui_test||[]).push([[17],{"147":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(10),i=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(50));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(148);var c=function(e){function AtProgress(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtProgress),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtProgress.__proto__||Object.getPrototypeOf(AtProgress)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtProgress,a.default.Component),r(AtProgress,[{"key":"render","value":function render(){var e=this.props.percent,t=this.props.color,n=this.props,r=n.strokeWidth,i=n.status,c=n.isHidePercent,s={};e<0?e=0:e>100&&(e=100);var u=["at-progress"];i&&u.push("at-progress--"+i),"error"===i?(s={"color":"#FF4949","value":"close-circle"},t="#FF4949"):"success"===i&&(s={"color":"#13CE66","value":"check-circle"},t="#13CE66");var m={"width":e&&+e+"%","height":r&&+r+"px","backgroundColor":t};return a.default.createElement(o.View,{"className":u},a.default.createElement(o.View,{"className":"at-progress__outer"},a.default.createElement(o.View,{"className":"at-progress__outer-inner"},a.default.createElement(o.View,{"className":"at-progress__outer-inner-background","style":m}))),!c&&a.default.createElement(o.View,{"className":"at-progress__content"},i&&"progress"!==i?a.default.createElement(l.default,{"value":s.value,"color":s.color,"size":"18"}):e+"%"))}}]),AtProgress}();t.default=c,c.propTypes={"color":i.default.string,"status":i.default.string,"percent":i.default.number,"strokeWidth":i.default.number,"isHidePercent":i.default.bool}},"148":function(e,t,n){var r=n(149);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},"149":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'@charset "UTF-8";\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It\'s different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n@-webkit-keyframes progress-active {\n  from {\n    opacity: 0.5;\n    -webkit-transform: translate(-100%);\n            transform: translate(-100%); }\n  to {\n    opacity: 0.1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n@keyframes progress-active {\n  from {\n    opacity: 0.5;\n    -webkit-transform: translate(-100%);\n            transform: translate(-100%); }\n  to {\n    opacity: 0.1;\n    -webkit-transform: translate(0);\n            transform: translate(0); } }\n\n.at-progress {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center; }\n  .at-progress__outer {\n    -webkit-flex: 1 1 100%;\n            flex: 1 1 100%;\n    margin-right: 0;\n    padding-right: 0; }\n    .at-progress__outer-inner {\n      width: 100%;\n      background-color: #F7F7F7;\n      border-radius: 2.13333rem;\n      vertical-align: middle; }\n      .at-progress__outer-inner-background {\n        height: 0.34133rem;\n        border-radius: 2.13333rem;\n        background-color: #78A4F4;\n        -webkit-transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n        transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n        position: relative;\n        overflow: hidden; }\n  .at-progress__content {\n    -webkit-flex: 1 1 1.49333rem;\n            flex: 1 1 1.49333rem;\n    font-size: 0.512rem;\n    margin-left: 0.21333rem;\n    text-align: center; }\n\n.at-progress--progress .at-progress__outer-inner-background::before {\n  content: "";\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  border-radius: 2.13333rem;\n  -webkit-animation: progress-active 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;\n          animation: progress-active 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }\n',""])},"150":function(e,t,n){var r=n(151);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},"151":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".progress-page .example-item__buttons {\n  margin-top: 0.42667rem; }\n  .progress-page .example-item__buttons .btn {\n    display: inline-block;\n    margin-left: 0.256rem; }\n    .progress-page .example-item__buttons .btn:first-child {\n      margin-left: 0; }\n",""])},"25":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(10),i=_interopRequireDefault(n(53)),l=_interopRequireDefault(n(50)),c=_interopRequireDefault(n(147)),s=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(150);var u=15,m=function(e){function ProgressPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ProgressPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ProgressPage.__proto__||Object.getPrototypeOf(ProgressPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.reduce=function(){var t=e.state.percent;0!==t&&(t=t-u<0?0:t-u,e.setState({"percent":t}))},e.increase=function(){var t=e.state.percent;100!==t&&(t=t+u>100?100:t+u,e.setState({"percent":t}))},e.state={"percent":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ProgressPage,a.default.Component),r(ProgressPage,[{"key":"render","value":function render(){var e=this.state.percent;return a.default.createElement(o.View,{"className":"page progress-page"},a.default.createElement(s.default,{"title":"Progress 进度条"}),a.default.createElement(o.View,{"className":"doc-body"},a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"基础进度条"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"25"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"50"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"75"})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"隐藏进度文案"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"25","isHidePercent":!0})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"75","isHidePercent":!0})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"自定义进度条线宽"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"25","strokeWidth":"6"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"50","strokeWidth":"8"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"75","strokeWidth":"10"})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"自定义颜色"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"25","color":"#FF4949"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"50","color":"#13CE66"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":"75","color":"#FFC82C"})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"不同的状态"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"example-item__desc"},"暂停"),a.default.createElement(c.default,{"percent":"25"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"example-item__desc"},"进行中"),a.default.createElement(c.default,{"percent":"50","status":"progress"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"example-item__desc"},"错误"),a.default.createElement(c.default,{"percent":"75","status":"error"})),a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(o.View,{"className":"example-item__desc"},"已完成"),a.default.createElement(c.default,{"percent":"100","status":"success"})))),a.default.createElement(o.View,{"className":"panel"},a.default.createElement(o.View,{"className":"panel__title"},"实际案例"),a.default.createElement(o.View,{"className":"panel__content"},a.default.createElement(o.View,{"className":"example-item"},a.default.createElement(c.default,{"percent":e}),a.default.createElement(o.View,{"className":"example-item__buttons"},a.default.createElement(o.View,{"className":"btn"},a.default.createElement(i.default,{"size":"small","onClick":this.reduce},a.default.createElement(l.default,{"value":"subtract","size":"12"}))),a.default.createElement(o.View,{"className":"btn"},a.default.createElement(i.default,{"size":"small","onClick":this.increase},a.default.createElement(l.default,{"value":"add","size":"12"})))))))))}}]),ProgressPage}();t.default=m},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var r=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,o,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(10),i=_interopRequireDefault(n(46)),l=_interopRequireDefault(n(50));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(54);var c={"normal":"normal","small":"small"},s={"primary":"primary","secondary":"secondary"},u=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,a.default.Component),r(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.size,n=void 0===t?"normal":t,r=e.type,i=void 0===r?"":r,u=e.circle,m=e.loading,f=e.disabled,p=["at-button"],d=c[n]||"",b=f?"at-button--disabled":"",h=s[i]?"at-button--"+i:"",g=u?"at-button--circle":"";p.push("at-button--"+d,h,g,b),p=p.filter(function(e){return""!==e});var _=void 0;return m&&(_=a.default.createElement(o.View,{"className":"at-button__icon"},a.default.createElement(l.default,{"value":"loading","size":"20"})),p.push("at-button--icon")),a.default.createElement(o.View,{"className":p,"onClick":this.onClick.bind(this)},_,a.default.createElement(o.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=u,u.defaultProps={"size":"normal","type":"","circle":!1,"loading":!1,"disabled":!1},u.propTypes={"size":i.default.oneOf(["normal","small"]),"type":i.default.oneOf(["primary","secondary"]),"circle":i.default.bool,"loading":i.default.bool,"disabled":i.default.bool}},"54":function(e,t,n){var r=n(55);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},"55":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset \"UTF-8\";\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Mixins\n */\n/* library */\n/**\n * 元素居中定位\n */\n/**\n * @example scss\n *\n * .element {\n *   @include clearfix;\n * }\n *\n * // CSS Output\n * .element::after {\n *   clear: both;\n *   content: '';\n *   display: block;\n * }\n */\n/**\n * 通用的遮罩\n */\n/**\n * Mixes a color with black. It's different from darken()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amount of black to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: shade(#ffbb52, 60%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #664a20;\n *   }\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* Flex Item */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 点击态\n */\n/**\n * 禁止态\n */\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n/**\n * 设置placeholder 颜色\n */\n.at-button {\n  margin: 0 auto;\n  padding: 0 0.68267rem;\n  height: 1.96267rem;\n  color: #333;\n  font-size: 0.68267rem;\n  line-height: 1.92rem;\n  text-align: center;\n  border-radius: 0.17067rem;\n  border: 1PX solid #C5D9E8;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .at-button:active {\n    opacity: 0.6; }\n  .at-button--active {\n    opacity: 0.6; }\n  .at-button--disabled {\n    opacity: 0.3; }\n    .at-button--disabled:active {\n      opacity: 0.3; }\n  .at-button--primary {\n    background-color: #5c89e4;\n    color: #fff;\n    border: 1PX solid #5c89e4; }\n  .at-button--secondary {\n    background-color: #fff;\n    color: #5c89e4;\n    border: 1PX solid #5c89e4; }\n  .at-button--small {\n    display: inline-block;\n    padding: 0 0.34133rem;\n    width: auto;\n    min-width: 2.13333rem;\n    max-width: 15.14667rem;\n    height: 1.28rem;\n    font-size: 0.59733rem;\n    line-height: 1.23733rem; }\n  .at-button--circle {\n    border-radius: 2.13333rem;\n    overflow: hidden;\n    background-clip: border-box; }\n  .at-button__icon {\n    margin: 0 0.42667rem;\n    display: inline-block;\n    -webkit-animation: loading-rotate 1s linear infinite;\n            animation: loading-rotate 1s linear infinite; }\n  .at-button__text {\n    display: inline; }\n\n@-webkit-keyframes loading-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes loading-rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n",""])}}]);