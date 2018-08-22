(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"277":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),o=a(45),i=_interopRequireDefault(a(46));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(278);var l=function(e){function AtCard(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtCard),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtCard.__proto__||Object.getPrototypeOf(AtCard)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtCard,r.default.Component),n(AtCard,[{"key":"render","value":function render(){var e=this.props,t=e.title,a=e.note,n=e.extra,i=e.thumb,l=e.isFull,c=e.onClick,u=["at-card"];return l&&u.push("at-card--full"),r.default.createElement(o.View,{"className":u,"onClick":c},r.default.createElement(o.View,{"className":"at-card-header"},i&&r.default.createElement(o.View,{"className":"at-card-header__thumb"},r.default.createElement(o.Image,{"className":"at-card-header__thumb-info","mode":"scaleToFill","src":i})),r.default.createElement(o.Text,{"className":"at-card-header__title"},t),n&&r.default.createElement(o.Text,{"className":"at-card-header__extra"},n)),r.default.createElement(o.View,{"className":"at-card-content"},r.default.createElement(o.View,{"className":"at-card-content__info"},this.props.children),a&&r.default.createElement(o.View,{"className":"at-card-content__note"},a)))}}]),AtCard}();t.default=l,l.propTypes={"note":i.default.string,"isFull":i.default.bool,"thumb":i.default.string,"title":i.default.string,"extra":i.default.string,"onClick":i.default.func}},"278":function(e,t,a){},"280":function(e,t,a){},"36":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),o=a(45),i=_interopRequireDefault(a(277)),l=_interopRequireDefault(a(49));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(280);var c=function(e){function CardPage(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CardPage);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=a=_possibleConstructorReturn(this,(e=CardPage.__proto__||Object.getPrototypeOf(CardPage)).call.apply(e,[this].concat(r))),a.config={"navigationBarTitleText":"Taro UI"},a.handleClick=function(){console.log("Card handleClick")},_possibleConstructorReturn(a,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CardPage,r.default.Component),n(CardPage,[{"key":"render","value":function render(){return r.default.createElement(o.View,{"className":"page"},r.default.createElement(l.default,{"title":"Card 卡片"}),r.default.createElement(o.View,{"className":"doc-body"},r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"基础卡片"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"title":"这是个标题","onClick":this.handleClick},"这也是内容区 可以随意定义功能")))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"带缩略图的卡片"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},"这也是内容区 可以随意定义功能")))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"带小信息的卡片"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"note":"小Tips","title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},"这也是内容区 可以随意定义功能")))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"完整的卡片"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"note":"小Tips","extra":"额外信息","title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},"这也是内容区 可以随意定义功能")))),r.default.createElement(o.View,{"className":"panel"},r.default.createElement(o.View,{"className":"panel__title"},"通栏卡片"),r.default.createElement(o.View,{"className":"panel__content no-padding"},r.default.createElement(o.View,{"className":"example-item"},r.default.createElement(i.default,{"isFull":!0,"note":"小Tips","extra":"额外信息","title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},"这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能"))))))}}]),CardPage}();t.default=c},"46":function(e,t,a){e.exports=a(47)()},"47":function(e,t,a){"use strict";var n=a(48);function emptyFunction(){}e.exports=function(){function shim(e,t,a,r,o,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"48":function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"49":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(1),o=_interopRequireDefault(a(0)),i=_interopRequireDefault(a(46)),l=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(50);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return o.default.createElement(l.View,{"className":"doc-header"},o.default.createElement(l.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":i.default.string}},"50":function(e,t,a){}}]);