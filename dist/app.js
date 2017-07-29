(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Node = require('./helpers/Node');

var _Board = require('./components/Board');

var _Board2 = _interopRequireDefault(_Board);

var _BoardEmpty = require('./components/BoardEmpty');

var _BoardEmpty2 = _interopRequireDefault(_BoardEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var items = [{ completed: false, hover: false, text: 'Buy milk' }, { completed: false, hover: true, text: 'Sing a song' }, { completed: true, hover: true, text: 'Write a poem' }];

var items2 = [{ completed: false, hover: false, text: 'Charge my computer' }];

var boardsList = [{ title: 'TODO', list: items }, { title: 'DONE', list: items2, isCreating: true }];

var content = (0, _Node.Node)('section', { id: 'container' }, (0, _Node.Node)('div', { class: 'title' }, (0, _Node.Node)('h1', {}, 'My board')), _Node.Node.apply(undefined, ['div', { class: 'content' }].concat(_toConsumableArray(boardsList.map(function (board, i) {
  return (0, _Board2.default)(_extends({}, board, { key: i }));
})), [(0, _BoardEmpty2.default)()])));

var root = document.querySelector('#root');
root.appendChild(content);

},{"./components/Board":2,"./components/BoardEmpty":3,"./helpers/Node":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Node = require('../helpers/Node');

var _BoardItem = require('./BoardItem');

var _BoardItem2 = _interopRequireDefault(_BoardItem);

var _TextUpdate = require('./TextUpdate');

var _TextUpdate2 = _interopRequireDefault(_TextUpdate);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Board = function Board(props) {
  var title = props.title,
      list = props.list,
      isCreating = props.isCreating,
      key = props.key;


  return (0, _Node.Node)('div', { class: 'board ' + ((0, _helpers.isNil)(list) ? 'empty' : 'full'), id: key }, (0, _Node.Node)('div', { class: 'title' }, title), (0, _Node.Node)('div', { class: 'list' }, _Node.Node.apply(undefined, ['ul', {}].concat(_toConsumableArray(list.map(function (item, i) {
    return (0, _BoardItem2.default)(_extends({}, item, { key: i }));
  })))), (0, _Node.Node)('div', { class: 'item new' }, isCreating && (0, _TextUpdate2.default)(), !isCreating && '+ New item')));
};

exports.default = Board;

},{"../helpers":7,"../helpers/Node":6,"./BoardItem":4,"./TextUpdate":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('../helpers/Node');

var BoardEmpty = function BoardEmpty(props) {
  return (0, _Node.Node)('div', { class: 'board empty' }, (0, _Node.Node)('div', { class: 'plus' }, '+'));
};

exports.default = BoardEmpty;

},{"../helpers/Node":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('../helpers/Node');

var BoardItem = function BoardItem(props) {
  var completed = props.completed,
      hover = props.hover,
      text = props.text,
      key = props.key;


  return (0, _Node.Node)('li', { class: 'item ' + (completed && 'completed'), id: key }, hover && (0, _Node.Node)('span', { class: 'checkbox' }, (0, _Node.Node)('input', { type: 'checkbox' })), text, hover && (0, _Node.Node)('span', { class: 'trash' }, '🗑'));
};

exports.default = BoardItem;

},{"../helpers/Node":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = require('../helpers/Node');

var TextUpdate = function TextUpdate(props) {
  return (0, _Node.Node)('div', { class: 'update' }, (0, _Node.Node)('input', { title: 'update', autofocus: 'true', type: 'text' }), (0, _Node.Node)('button', { class: 'save' }, '👍'));
};

exports.default = TextUpdate;

},{"../helpers/Node":6}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isNil = exports.isNil = function isNil(str) {
  return str == null;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvQm9hcmQuanMiLCJzcmMvY29tcG9uZW50cy9Cb2FyZEVtcHR5LmpzIiwic3JjL2NvbXBvbmVudHMvQm9hcmRJdGVtLmpzIiwic3JjL2NvbXBvbmVudHMvVGV4dFVwZGF0ZS5qcyIsInNyYy9oZWxwZXJzL05vZGUuanMiLCJzcmMvaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sUUFBUSxDQUNaLEVBQUUsV0FBVyxLQUFiLEVBQW9CLE9BQU8sS0FBM0IsRUFBa0MsTUFBTSxVQUF4QyxFQURZLEVBRVosRUFBRSxXQUFXLEtBQWIsRUFBb0IsT0FBTyxJQUEzQixFQUFpQyxNQUFNLGFBQXZDLEVBRlksRUFHWixFQUFFLFdBQVcsSUFBYixFQUFtQixPQUFPLElBQTFCLEVBQWdDLE1BQU0sY0FBdEMsRUFIWSxDQUFkOztBQU1BLElBQU0sU0FBUyxDQUNiLEVBQUUsV0FBVyxLQUFiLEVBQW9CLE9BQU8sS0FBM0IsRUFBa0MsTUFBTSxvQkFBeEMsRUFEYSxDQUFmOztBQUlBLElBQU0sYUFBYSxDQUNqQixFQUFFLE9BQU8sTUFBVCxFQUFpQixNQUFNLEtBQXZCLEVBRGlCLEVBRWpCLEVBQUUsT0FBTyxNQUFULEVBQWlCLE1BQU0sTUFBdkIsRUFBK0IsWUFBWSxJQUEzQyxFQUZpQixDQUFuQjs7QUFLQSxJQUFNLFVBQ0osZ0JBQUssU0FBTCxFQUFnQixFQUFFLElBQUksV0FBTixFQUFoQixFQUNFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sT0FBVCxFQUFaLEVBQ0UsZ0JBQUssSUFBTCxFQUFXLEVBQVgsRUFBZSxVQUFmLENBREYsQ0FERixFQUlFLDZCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sU0FBVCxFQUFaLDRCQUNLLFdBQVcsR0FB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QUFTLE9BRkk7QUFHYixVQUFRLE1BSEs7QUFJYixXQUFTLE9BSkk7QUFLYixVQUFRO0FBTEssQ0FBZjs7QUFRTyxJQUFNLHNCQUFPLFNBQVAsSUFBTyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQThCO0FBQUEsb0NBQWIsUUFBYTtBQUFiLFlBQWE7QUFBQTs7QUFDaEQsTUFBSSxPQUFPLEVBQUUsYUFBRixDQUFnQixJQUFoQixDQUFYOztBQUVBLE1BQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFdBQU8sSUFBUCxDQUFZLEtBQVosRUFBbUIsT0FBbkIsQ0FBMkIsZUFBTztBQUNoQyxVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLGFBQUssZ0JBQUwsQ0FBc0IsT0FBTyxHQUFQLENBQXRCLEVBQW1DLE1BQU0sR0FBTixDQUFuQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssWUFBTCxDQUFrQixHQUFsQixFQUF1QixNQUFNLEdBQU4sQ0FBdkI7QUFDRDtBQUNGLEtBTkQ7QUFPRDs7QUFFRCxNQUFJLFNBQVMsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN2QixhQUFTLE9BQVQsQ0FBaUIsaUJBQVM7QUFDeEIsVUFBSSxTQUFTLElBQVQsSUFBaUIsVUFBVSxLQUEvQixFQUFzQzs7QUFFdEMsVUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsZ0JBQVEsRUFBRSxjQUFGLENBQWlCLEtBQWpCLENBQVI7QUFDRDs7QUFFRCxXQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDRCxLQVJEO0FBU0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0ExQk07Ozs7Ozs7O0FDVkEsSUFBTSx3QkFBUSxTQUFSLEtBQVE7QUFBQSxTQUFPLE9BQU8sSUFBZDtBQUFBLENBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vaGVscGVycy9Ob2RlJ1xuXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0JvYXJkJ1xuaW1wb3J0IEJvYXJkRW1wdHkgZnJvbSAnLi9jb21wb25lbnRzL0JvYXJkRW1wdHknXG5cbmNvbnN0IGl0ZW1zID0gW1xuICB7IGNvbXBsZXRlZDogZmFsc2UsIGhvdmVyOiBmYWxzZSwgdGV4dDogJ0J1eSBtaWxrJyB9LFxuICB7IGNvbXBsZXRlZDogZmFsc2UsIGhvdmVyOiB0cnVlLCB0ZXh0OiAnU2luZyBhIHNvbmcnIH0sXG4gIHsgY29tcGxldGVkOiB0cnVlLCBob3ZlcjogdHJ1ZSwgdGV4dDogJ1dyaXRlIGEgcG9lbScgfVxuXVxuXG5jb25zdCBpdGVtczIgPSBbXG4gIHsgY29tcGxldGVkOiBmYWxzZSwgaG92ZXI6IGZhbHNlLCB0ZXh0OiAnQ2hhcmdlIG15IGNvbXB1dGVyJyB9XG5dXG5cbmNvbnN0IGJvYXJkc0xpc3QgPSBbXG4gIHsgdGl0bGU6ICdUT0RPJywgbGlzdDogaXRlbXMgfSxcbiAgeyB0aXRsZTogJ0RPTkUnLCBsaXN0OiBpdGVtczIsIGlzQ3JlYXRpbmc6IHRydWUgfVxuXVxuXG5jb25zdCBjb250ZW50ID0gKFxuICBOb2RlKCdzZWN0aW9uJywgeyBpZDogJ2NvbnRhaW5lcicgfSxcbiAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndGl0bGUnIH0sXG4gICAgICBOb2RlKCdoMScsIHt9LCAnTXkgYm9hcmQnKVxuICAgICksXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2NvbnRlbnQnIH0sXG4gICAgICAuLi5ib2FyZHNMaXN0Lm1hcCgoYm9hcmQsIGkpID0+IEJvYXJkKHsgLi4uYm9hcmQsIGtleTogaSB9KSksXG4gICAgICBCb2FyZEVtcHR5KCksXG4gICAgKVxuICApXG4pXG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG5yb290LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vaGVscGVycy9Ob2RlJ1xuXG5pbXBvcnQgQm9hcmRJdGVtIGZyb20gJy4vQm9hcmRJdGVtJ1xuaW1wb3J0IFRleHRVcGRhdGUgZnJvbSAnLi9UZXh0VXBkYXRlJ1xuXG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJy4uL2hlbHBlcnMnXG5cbmNvbnN0IEJvYXJkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBsaXN0LCBpc0NyZWF0aW5nLCBrZXkgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiBgYm9hcmQgJHtpc05pbChsaXN0KSA/ICdlbXB0eScgOiAnZnVsbCd9YCwgaWQ6IGtleSB9LFxuICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3RpdGxlJyB9LCB0aXRsZSksXG4gICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnbGlzdCcgfSxcbiAgICAgICAgTm9kZSgndWwnLCB7fSxcbiAgICAgICAgICAuLi5saXN0Lm1hcCgoaXRlbSwgaSkgPT4gQm9hcmRJdGVtKHsgLi4uaXRlbSwga2V5OiBpIH0pKVxuICAgICAgICApLFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnaXRlbSBuZXcnIH0sXG4gICAgICAgICAgaXNDcmVhdGluZyAmJiBUZXh0VXBkYXRlKCksXG4gICAgICAgICAgIWlzQ3JlYXRpbmcgJiYgJysgTmV3IGl0ZW0nXG4gICAgICAgICksXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vaGVscGVycy9Ob2RlJ1xuXG5jb25zdCBCb2FyZEVtcHR5ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdib2FyZCBlbXB0eScgfSxcbiAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdwbHVzJyB9LCAnKycpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkRW1wdHlcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL05vZGUnXG5cbmNvbnN0IEJvYXJkSXRlbSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjb21wbGV0ZWQsIGhvdmVyLCB0ZXh0LCBrZXkgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBOb2RlKCdsaScsIHsgY2xhc3M6IGBpdGVtICR7Y29tcGxldGVkICYmICdjb21wbGV0ZWQnfWAsIGlkOiBrZXkgfSxcbiAgICAgIGhvdmVyICYmIChcbiAgICAgICAgTm9kZSgnc3BhbicsIHsgY2xhc3M6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICBOb2RlKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JyB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGV4dCxcbiAgICAgIGhvdmVyICYmIE5vZGUoJ3NwYW4nLCB7IGNsYXNzOiAndHJhc2gnIH0sICfwn5eRJylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRJdGVtXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vaGVscGVycy9Ob2RlJ1xuXG5jb25zdCBUZXh0VXBkYXRlID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICd1cGRhdGUnIH0sXG4gICAgICBOb2RlKCdpbnB1dCcsIHsgdGl0bGU6ICd1cGRhdGUnLCBhdXRvZm9jdXM6ICd0cnVlJywgdHlwZTogJ3RleHQnIH0pLFxuICAgICAgTm9kZSgnYnV0dG9uJywgeyBjbGFzczogJ3NhdmUnIH0sICfwn5GNJylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFVwZGF0ZVxuIiwiY29uc3QgZCA9IGRvY3VtZW50XG5cbmNvbnN0IEVWRU5UUyA9IHtcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25LZXlVcDogJ2tleXVwJyxcbiAgb25Mb2FkOiAnbG9hZCcsXG4gIG9uRm9jdXM6ICdmb2N1cycsXG4gIG9uQmx1cjogJ2JsdXInXG59XG5cbmV4cG9ydCBjb25zdCBOb2RlID0gKGVsZW0sIGF0dHJzLCAuLi5jaGlsZHJlbikgPT4ge1xuICBsZXQgbm9kZSA9IGQuY3JlYXRlRWxlbWVudChlbGVtKVxuXG4gIGlmIChhdHRycyAhPSBudWxsKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChFVkVOVFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTW2tleV0sIGF0dHJzW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQgPT0gbnVsbCB8fCBjaGlsZCA9PT0gZmFsc2UpIHJldHVyblxuXG4gICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZCA9IGQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpXG4gICAgICB9XG5cbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCJleHBvcnQgY29uc3QgaXNOaWwgPSBzdHIgPT4gc3RyID09IG51bGxcbiJdfQ==
