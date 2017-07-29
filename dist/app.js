(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Node = require('./helpers/Node');

var _Board = require('./components/Board');

var _Board2 = _interopRequireDefault(_Board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{ completed: false, hover: false, text: 'Buy milk' }, { completed: false, hover: true, text: 'Sing a song' }, { completed: true, hover: true, text: 'Write a poem' }];

var items2 = [{ completed: false, hover: false, text: 'Charge my computer' }];

var content = (0, _Node.Node)('section', { id: 'container' }, (0, _Node.Node)('div', { class: 'title' }, (0, _Node.Node)('h1', {}, 'My board')), (0, _Node.Node)('div', { class: 'content' }, (0, _Board2.default)({ title: 'TODO', list: items }), (0, _Board2.default)({ title: 'DONE', list: items2 }), (0, _Board2.default)({})));

var root = document.querySelector('#root');
root.appendChild(content);

},{"./components/Board":2,"./helpers/Node":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('../helpers/Node');

var _BoardItem = require('./BoardItem');

var _BoardItem2 = _interopRequireDefault(_BoardItem);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Board = function Board(props) {
  var title = props.title,
      list = props.list;


  return (0, _Node.Node)('div', { class: 'board ' + ((0, _helpers.isNil)(list) ? 'empty' : 'full') }, !(0, _helpers.isNil)(list) && (0, _Node.Node)('div', { class: 'title' }, title), !(0, _helpers.isNil)(list) && (0, _Node.Node)('div', { class: 'list' }, _Node.Node.apply(undefined, ['ul', {}].concat(_toConsumableArray(list.map(function (item) {
    return (0, _BoardItem2.default)(item);
  })))), (0, _Node.Node)('div', { class: 'item new' }, '+ New item')), (0, _helpers.isNil)(list) && (0, _Node.Node)('div', { class: 'plus' }, '+'));
};

exports.default = Board;

},{"../helpers":5,"../helpers/Node":4,"./BoardItem":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('../helpers/Node');

var BoardItem = function BoardItem(props) {
  var completed = props.completed,
      hover = props.hover,
      text = props.text;


  return (0, _Node.Node)('li', { class: 'item ' + (completed && 'completed') }, hover && (0, _Node.Node)('span', { class: 'checkbox' }, (0, _Node.Node)('input', { type: 'checkbox' })), text, hover && (0, _Node.Node)('span', { class: 'trash' }, '🗑'));
};

exports.default = BoardItem;

},{"../helpers/Node":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var d = document;

var EVENTS = {
  onClick: 'click',
  onKeyUp: 'keyup',
  onLoad: 'load',
  onFocus: 'focus',
  onBlur: 'blur'
};

var Node = exports.Node = function Node(elem, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var node = d.createElement(elem);

  if (attrs != null) {
    Object.keys(attrs).forEach(function (key) {
      if (EVENTS.hasOwnProperty(key)) {
        node.addEventListener(EVENTS[key], attrs[key]);
      } else {
        node.setAttribute(key, attrs[key]);
      }
    });
  }

  if (children.length > 0) {
    children.forEach(function (child) {
      if (child == null || child === false) return;

      if (typeof child === 'string') {
        child = d.createTextNode(child);
      }

      node.appendChild(child);
    });
  }

  return node;
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isNil = exports.isNil = function isNil(str) {
  return str == null;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvQm9hcmQuanMiLCJzcmMvY29tcG9uZW50cy9Cb2FyZEl0ZW0uanMiLCJzcmMvaGVscGVycy9Ob2RlLmpzIiwic3JjL2hlbHBlcnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVBOzs7Ozs7QUFFQSxJQUFNLFFBQVEsQ0FDWixFQUFFLFdBQVcsS0FBYixFQUFvQixPQUFPLEtBQTNCLEVBQWtDLE1BQU0sVUFBeEMsRUFEWSxFQUVaLEVBQUUsV0FBVyxLQUFiLEVBQW9CLE9BQU8sSUFBM0IsRUFBaUMsTUFBTSxhQUF2QyxFQUZZLEVBR1osRUFBRSxXQUFXLElBQWIsRUFBbUIsT0FBTyxJQUExQixFQUFnQyxNQUFNLGNBQXRDLEVBSFksQ0FBZDs7QUFNQSxJQUFNLFNBQVMsQ0FDYixFQUFFLFdBQVcsS0FBYixFQUFvQixPQUFPLEtBQTNCLEVBQWtDLE1BQU0sb0JBQXhDLEVBRGEsQ0FBZjs7QUFJQSxJQUFNLFVBQ0osZ0JBQUssU0FBTCxFQUFnQixFQUFFLElBQUksV0FBTixFQUFoQixFQUNFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sT0FBVCxFQUFaLEVBQ0UsZ0JBQUssSUFBTCxFQUFXLEVBQVgsRUFBZSxVQUFmLENBREYsQ0FERixFQUlFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sU0FBVCxFQUFaLEVBQ0UscUJBQU0sRUFBRSxPQUFPLE1BQVQsRUFBaUIsTUFBTSxLQUF2QixFQUFOLENBREYsRUFFRSxxQkFBTSxFQUFFLE9BQU8sTUFBVCxFQUFpQixNQUFNLE1BQXZCLEVBQU4sQ0FGRixFQUdFLHFCQUFNLEVBQU4sQ0FIRixDQUpGLENBREY7O0FBYUEsSUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsS0FBSyxXQUFMLENBQWlCLE9BQWpCOzs7Ozs7Ozs7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QUFDRCxDQTFCTTs7Ozs7Ozs7QUNWQSxJQUFNLHdCQUFRLFNBQVIsS0FBUTtBQUFBLFNBQU8sT0FBTyxJQUFkO0FBQUEsQ0FBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9oZWxwZXJzL05vZGUnXG5cbmltcG9ydCBCb2FyZCBmcm9tICcuL2NvbXBvbmVudHMvQm9hcmQnXG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7IGNvbXBsZXRlZDogZmFsc2UsIGhvdmVyOiBmYWxzZSwgdGV4dDogJ0J1eSBtaWxrJyB9LFxuICB7IGNvbXBsZXRlZDogZmFsc2UsIGhvdmVyOiB0cnVlLCB0ZXh0OiAnU2luZyBhIHNvbmcnIH0sXG4gIHsgY29tcGxldGVkOiB0cnVlLCBob3ZlcjogdHJ1ZSwgdGV4dDogJ1dyaXRlIGEgcG9lbScgfVxuXVxuXG5jb25zdCBpdGVtczIgPSBbXG4gIHsgY29tcGxldGVkOiBmYWxzZSwgaG92ZXI6IGZhbHNlLCB0ZXh0OiAnQ2hhcmdlIG15IGNvbXB1dGVyJyB9XG5dXG5cbmNvbnN0IGNvbnRlbnQgPSAoXG4gIE5vZGUoJ3NlY3Rpb24nLCB7IGlkOiAnY29udGFpbmVyJyB9LFxuICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICd0aXRsZScgfSxcbiAgICAgIE5vZGUoJ2gxJywge30sICdNeSBib2FyZCcpXG4gICAgKSxcbiAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnY29udGVudCcgfSxcbiAgICAgIEJvYXJkKHsgdGl0bGU6ICdUT0RPJywgbGlzdDogaXRlbXMgfSksXG4gICAgICBCb2FyZCh7IHRpdGxlOiAnRE9ORScsIGxpc3Q6IGl0ZW1zMiB9KSxcbiAgICAgIEJvYXJkKHt9KSxcbiAgICApXG4gIClcbilcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JylcbnJvb3QuYXBwZW5kQ2hpbGQoY29udGVudClcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL05vZGUnXG5cbmltcG9ydCBCb2FyZEl0ZW0gZnJvbSAnLi9Cb2FyZEl0ZW0nXG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJy4uL2hlbHBlcnMnXG5cbmNvbnN0IEJvYXJkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBsaXN0IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogYGJvYXJkICR7aXNOaWwobGlzdCkgPyAnZW1wdHknIDogJ2Z1bGwnfWAgfSxcbiAgICAgICFpc05pbChsaXN0KSAmJiBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndGl0bGUnIH0sIHRpdGxlKSxcbiAgICAgICFpc05pbChsaXN0KSAmJiAoXG4gICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdsaXN0JyB9LFxuICAgICAgICAgIE5vZGUoJ3VsJywge30sXG4gICAgICAgICAgICAuLi5saXN0Lm1hcChpdGVtID0+IEJvYXJkSXRlbShpdGVtKSlcbiAgICAgICAgICApLFxuICAgICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdpdGVtIG5ldycgfSwgJysgTmV3IGl0ZW0nKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgaXNOaWwobGlzdCkgJiYgTm9kZSgnZGl2JywgeyBjbGFzczogJ3BsdXMnIH0sICcrJylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL05vZGUnXG5cbmNvbnN0IEJvYXJkSXRlbSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjb21wbGV0ZWQsIGhvdmVyLCB0ZXh0IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgTm9kZSgnbGknLCB7IGNsYXNzOiBgaXRlbSAke2NvbXBsZXRlZCAmJiAnY29tcGxldGVkJ31gfSxcbiAgICAgIGhvdmVyICYmIChcbiAgICAgICAgTm9kZSgnc3BhbicsIHsgY2xhc3M6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICBOb2RlKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JyB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGV4dCxcbiAgICAgIGhvdmVyICYmIE5vZGUoJ3NwYW4nLCB7IGNsYXNzOiAndHJhc2gnIH0sICfwn5eRJylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRJdGVtXG4iLCJjb25zdCBkID0gZG9jdW1lbnRcblxuY29uc3QgRVZFTlRTID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbktleVVwOiAna2V5dXAnLFxuICBvbkxvYWQ6ICdsb2FkJyxcbiAgb25Gb2N1czogJ2ZvY3VzJyxcbiAgb25CbHVyOiAnYmx1cidcbn1cblxuZXhwb3J0IGNvbnN0IE5vZGUgPSAoZWxlbSwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBub2RlID0gZC5jcmVhdGVFbGVtZW50KGVsZW0pXG5cbiAgaWYgKGF0dHJzICE9IG51bGwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKEVWRU5UUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFNba2V5XSwgYXR0cnNba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZCA9PSBudWxsIHx8IGNoaWxkID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkID0gZC5jcmVhdGVUZXh0Tm9kZShjaGlsZClcbiAgICAgIH1cblxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsImV4cG9ydCBjb25zdCBpc05pbCA9IHN0ciA9PiBzdHIgPT0gbnVsbFxuIl19
