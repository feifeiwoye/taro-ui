(window.webpackJsonptaro_ui_test=window.webpackJsonptaro_ui_test||[]).push([[13],{"121":function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},"122":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"",""])},"123":function(e,t,n){var r=n(124);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},"124":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'@charset "UTF-8";\n/**\n * Default Theme\n */\n/**\n * Mixes a color with white. It\'s different from lighten()\n *\n * @param {color} $color\n * @param {number (percentage)} $percent [The amout of white to be mixed in]\n * @return {color}\n *\n * @example\n *   .element {\n *     background-color: tint(#6ecaa6 , 40%);\n *   }\n *\n *   // CSS Output\n *   .element {\n *     background-color: #a8dfc9;\n *   }\n */\n/* The Color of O2Team Brand */\n/* Color */\n/* Color Palette */\n/* Text Color */\n/* Link */\n/* 背景色 */\n/* 边框颜色 */\n/* 图标颜色 */\n/* Border Radius */\n/* 透明度 */\n/* Font */\n/* Line Height */\n/* 水平间距 */\n/* 垂直间距 */\n/* 图标尺寸 */\n/* z-index */\n/* timing function */\n/**\n * CSS cubic-bezier timing functions\n * http://bourbon.io/docs/#timing-functions\n */\n.at-article {\n  word-break: break-all;\n  word-wrap: break-word;\n  line-height: 1.5; }\n  .at-article__h1, .at-article__h2, .at-article__h3 {\n    color: #333;\n    margin: 0 0.64rem; }\n  .at-article__h1 {\n    margin-top: 0.64rem;\n    font-size: 1.024rem;\n    line-height: 1.536rem; }\n  .at-article__info {\n    font-size: 0.59733rem;\n    color: #CCC;\n    line-height: 0.896rem;\n    margin: 0 0.64rem; }\n  .at-article__h2 {\n    font-size: 0.85333rem;\n    line-height: 1.28rem;\n    margin-top: 0.64rem; }\n  .at-article__h3 {\n    font-size: 0.68267rem;\n    line-height: 1.024rem; }\n  .at-article__p {\n    font-size: 0.59733rem;\n    color: #666;\n    line-height: 0.896rem;\n    margin: 0.53333rem 0.64rem 0; }\n  .at-article__img {\n    width: 14.72rem;\n    display: block;\n    margin: 0.42667rem auto 0;\n    border-radius: 0.08533rem; }\n',""])},"21":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(10),o=_interopRequireDefault(n(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(121),n(123);var l=function(e){function ArticlePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ArticlePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ArticlePage.__proto__||Object.getPrototypeOf(ArticlePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Article 文章"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ArticlePage,a.default.Component),r(ArticlePage,[{"key":"render","value":function render(){return a.default.createElement(i.View,{"className":"page"},a.default.createElement(o.default,{"title":"Article 文章"}),a.default.createElement(i.View,{"className":"doc-body"},a.default.createElement(i.View,{"className":"panel"},a.default.createElement(i.View,{"className":"panel__title"},"示例"),a.default.createElement(i.View,{"className":"panel__content no-padding"},a.default.createElement(i.View,{"className":"at-article"},a.default.createElement(i.View,{"className":"at-article__h1"},"这是一级标题这是一级标题"),a.default.createElement(i.View,{"className":"at-article__info"},"2017-05-07   这是作者"),a.default.createElement(i.View,{"className":"at-article__content"},a.default.createElement(i.View,{"className":"at-article__section"},a.default.createElement(i.View,{"className":"at-article__h2"},"这是二级标题"),a.default.createElement(i.View,{"className":"at-article__h3"},"这是三级标题"),a.default.createElement(i.View,{"className":"at-article__p"},"这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a.default.createElement(i.View,{"className":"at-article__p"},"这是文本段落。这是文本段落。"),a.default.createElement(i.Image,{"className":"at-article__img","src":"http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg","mode":"widthFix"})),a.default.createElement(i.View,{"className":"at-article__section"},a.default.createElement(i.View,{"className":"at-article__h2"},"这是二级标题"),a.default.createElement(i.View,{"className":"at-article__h3"},"这是三级标题"),a.default.createElement(i.View,{"className":"at-article__p"},"这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a.default.createElement(i.Image,{"className":"at-article__img","src":"https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg","mode":"widthFix"}))))))))}}]),ArticlePage}();t.default=l},"46":function(e,t,n){e.exports=n(47)()},"47":function(e,t,n){"use strict";var r=n(48);function emptyFunction(){}e.exports=function(){function shim(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),i=_interopRequireDefault(n(0)),o=_interopRequireDefault(n(46)),l=n(10);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(51);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,a.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(l.View,{"className":"doc-header"},i.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"51":function(e,t,n){var r=n(52);"string"==typeof r&&(r=[[e.i,r,""]]);var a={"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(r,a);r.locals&&(e.exports=r.locals)},"52":function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".doc-header {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 1.28rem;\n  height: 3.84rem; }\n  .doc-header__title {\n    position: relative;\n    height: 1.92rem;\n    color: #333;\n    font-size: 0.85333rem;\n    font-weight: bold; }\n    .doc-header__title::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      display: inline-block;\n      width: 2.56rem;\n      height: 2PX;\n      border-radius: 1PX;\n      background-color: #6190E8; }\n",""])}}]);