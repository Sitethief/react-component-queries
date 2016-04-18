!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-sizeme")):"function"==typeof define&&define.amd?define("react-component-queries",["react","react-sizeme"],t):"object"==typeof exports?exports["react-component-queries"]=t(require("react"),require("react-sizeme")):e["react-component-queries"]=t(e.React,e.SizeMe)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(1),i=n(o);t.default=i.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)<0&&Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(){function e(e,t){return r.reduce(function(r,n){return Object.assign({},r,n(e,t))},{})}for(var t=arguments.length,r=Array(t),n=0;t>n;n++)r[n]=arguments[n];return(0,h.default)(r.length>0,"You must provide at least one query to ComponentQueries."),(0,h.default)(0===r.filter(function(e){return"function"!=typeof e}).length,"All provided queries for ComponentQueries should be functions."),function(t){var r=function(r){function n(){var e,t,r,o;i(this,n);for(var a=arguments.length,s=Array(a),c=0;a>c;c++)s[c]=arguments[c];return t=r=u(this,(e=Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),r.state={queryResult:{}},o=t,u(r,o)}return a(n,r),f(n,[{key:"componentWillMount",value:function(){this.runQueries(this.props.size)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.size,r=e.size;return this.hasSizeChanged(t,r)&&this.runQueries(r),!0}},{key:"hasSizeChanged",value:function(e,t){var r=e.height,n=e.width,o=t.height,i=t.width;return r!==o||n!==i}},{key:"runQueries",value:function(t){var r=t.width,n=t.height,o=e(r,n);this.setState({queryResult:o})}},{key:"render",value:function(){var e=this.props,r=o(e,["size"]);return p.default.createElement(t,c({},this.state.queryResult,r))}}]),n}(l.Component);return r.propTypes={size:l.PropTypes.shape({width:l.PropTypes.number.isRequired,height:l.PropTypes.number.isRequired}).isRequired},(0,v.default)({monitorWidth:!0,monitorHeight:!0})(r)}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(){function e(e,t){for(var r=0;t.length>r;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(3),p=n(l),d=r(2),h=n(d),y=r(4),v=n(y);t.default=s},function(e,t,r){"use strict";var n=function(e,t,r,n,o,i,u,a){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,u,a],f=0;s=Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}};e.exports=n},function(t,r){t.exports=e},function(e,r){e.exports=t}])});