(window.webpackJsonptaro_ui_test=window.webpackJsonptaro_ui_test||[]).push([[14],{"125":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(46))),a=_interopRequireDefault(n(0)),r=n(10),o=_interopRequireDefault(n(50));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(126);var c=function(e){function AtTimeline(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTimeline);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTimeline.__proto__||Object.getPrototypeOf(AtTimeline)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTimeline,a.default.Component),i(AtTimeline,[{"key":"onClick","value":function onClick(){}},{"key":"render","value":function render(){var e=this.props,t=e.pending,n=e.items,i=["at-timeline"],l=t?"at-timeline--pending":"";i.push(l),i=i.filter(function(e){return""!==e});var c=n.map(function(e,t){var n=e.title,i=void 0===n?"":n,l=e.color,c=e.icon,m=e.content,s=void 0===m?[]:m,u=["at-timelineitem"],f=l?"at-timelineitem--"+l:"";u.push(f),u=u.filter(function(e){return""!==e});var p=["at-timelineitem__dot"];return c&&p.push("at-timelineitem__icon"),a.default.createElement(r.View,{"className":u,"key":t},a.default.createElement(r.View,{"className":"at-timelineitem__tail"}),a.default.createElement(r.View,{"className":p},c&&a.default.createElement(o.default,{"value":c,"size":"16"})),a.default.createElement(r.View,{"className":"at-timelineitem__content"},a.default.createElement(r.View,{"className":"at-timelineitem__content-item"},i),s.map(function(e,t){return a.default.createElement(r.View,{"className":"at-timelineitem__content-item at-timelineitem__content--sub","key":t},e)})))});return a.default.createElement(r.View,{"className":i},c)}}]),AtTimeline}();t.default=c,c.defaultProps={"pending":!1,"items":[]},c.propTypes={"pending":l.default.bool,"items":l.default.arrayOf(l.default.object)}},"126":function(e,t,n){var i=n(127);"string"==typeof i&&(i=[[e.i,i,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(i,l);i.locals&&(e.exports=i.locals)},"127":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"@charset \"UTF-8\";\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It's different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n.at-timelineitem {\n  position: relative;\n  padding: 0 0 0.256rem; }\n  .at-timelineitem__content {\n    margin-left: 0.85333rem;\n    min-height: 1.19467rem;\n    color: #333;\n    font-size: 0.59733rem;\n    line-height: 1.5;\n    text-align: left; }\n    .at-timelineitem__content--sub {\n      color: #666;\n      font-size: 0.512rem; }\n  .at-timelineitem__dot, .at-timelineitem__icon {\n    position: absolute;\n    left: 0;\n    top: 0.10667rem;\n    width: 0.68267rem;\n    height: 0.68267rem;\n    font-size: 0;\n    text-align: left;\n    vertical-align: middle;\n    box-sizing: border-box;\n    background-color: #FFF;\n    z-index: 1; }\n  .at-timelineitem__dot {\n    left: -0.02133rem; }\n    .at-timelineitem__dot::after {\n      content: '';\n      margin-top: 0.10667rem;\n      display: inline-block;\n      box-sizing: border-box;\n      width: 0.512rem;\n      height: 0.512rem;\n      border: 1PX solid transparent;\n      border-radius: 50%;\n      border-color: #78A4FA; }\n    .at-timelineitem__dot.at-timelineitem__icon::after {\n      display: none; }\n  .at-timelineitem__icon {\n    left: -0.08533rem;\n    color: #78A4FA; }\n  .at-timelineitem--green .at-timelineitem__icon {\n    color: #13CE66; }\n  .at-timelineitem--green .at-timelineitem__dot::after {\n    border-color: #13CE66; }\n  .at-timelineitem--red .at-timelineitem__icon {\n    color: #FF4949; }\n  .at-timelineitem--red .at-timelineitem__dot::after {\n    border-color: #FF4949; }\n  .at-timelineitem--yellow .at-timelineitem__icon {\n    color: #FFC82C; }\n  .at-timelineitem--yellow .at-timelineitem__dot::after {\n    border-color: #FFC82C; }\n  .at-timelineitem__tail {\n    position: absolute;\n    top: 0.384rem;\n    bottom: -0.21333rem;\n    left: 0.21333rem;\n    border-left: 0.04267rem solid #e2ecf4; }\n\n.at-timeline .at-timelineitem:last-child .at-timelineitem__tail {\n  display: none; }\n\n.at-timeline--pending .at-timelineitem:nth-last-child(2) .at-timelineitem__content {\n  min-height: 1.70667rem; }\n\n.at-timeline--pending .at-timelineitem:nth-last-child(2) .at-timelineitem__tail {\n  border-left-style: dotted; }\n",""])},"128":function(e,t,n){var i=n(129);"string"==typeof i&&(i=[[e.i,i,""]]);var l={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(i,l);i.locals&&(e.exports=i.locals)},"129":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"",""])},"22":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),l=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),a=n(10),r=_interopRequireDefault(n(125)),o=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(128);var c=function(e){function TimelinePage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TimelinePage);for(var i=arguments.length,l=Array(i),a=0;a<i;a++)l[a]=arguments[a];return t=n=_possibleConstructorReturn(this,(e=TimelinePage.__proto__||Object.getPrototypeOf(TimelinePage)).call.apply(e,[this].concat(l))),n.config={"navigationBarTitleText":"Taro UI"},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TimelinePage,l.default.Component),i(TimelinePage,[{"key":"render","value":function render(){return l.default.createElement(a.View,{"className":"page"},l.default.createElement(o.default,{"title":"Timeline 时间轴"}),l.default.createElement(a.View,{"className":"doc-body"},l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"基础用法"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"自定义颜色"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐","color":"green"},{"title":"上班","color":"red"},{"title":"睡觉","color":"yellow"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"自定义图标"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"items":[{"title":"刷牙洗脸","icon":"check-circle"},{"title":"吃早餐","icon":"clock"},{"title":"上班","icon":"clock"},{"title":"睡觉","icon":"clock"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"幽灵节点"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"pending":!0,"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),l.default.createElement(a.View,{"className":"panel"},l.default.createElement(a.View,{"className":"panel__title"},"丰富内容"),l.default.createElement(a.View,{"className":"panel__content"},l.default.createElement(a.View,{"className":"example-item"},l.default.createElement(r.default,{"pending":!0,"items":[{"title":"刷牙洗脸","content":["大概8:00"],"icon":"check-circle"},{"title":"吃早餐","content":["牛奶+面包","餐后记得吃药"],"icon":"clock"},{"title":"上班","content":["查看邮件","写PPT","发送PPT给领导"],"icon":"clock"},{"title":"睡觉","content":["不超过23:00"],"icon":"clock"}]}))))))}}]),TimelinePage}();t.default=c},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var i=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,l,a,r){if(r!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);