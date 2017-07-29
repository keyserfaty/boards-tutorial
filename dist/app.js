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

var content = (0, _Node.Node)('section', { id: 'container' }, (0, _Node.Node)('div', { class: 'title' }, (0, _Node.Node)('h1', {}, 'My board')), _Node.Node.apply(undefined, ['div', { class: 'content' }].concat(_toConsumableArray(boardsList.map(function (board) {
  return (0, _Board2.default)(_extends({}, board));
})), [(0, _BoardEmpty2.default)()])));

var root = document.querySelector('#root');
root.appendChild(content);

},{"./components/Board":2,"./components/BoardEmpty":3,"./helpers/Node":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      isCreating = props.isCreating;


  return (0, _Node.Node)('div', { class: 'board ' + ((0, _helpers.isNil)(list) ? 'empty' : 'full') }, (0, _Node.Node)('div', { class: 'title' }, title), (0, _Node.Node)('div', { class: 'list' }, _Node.Node.apply(undefined, ['ul', {}].concat(_toConsumableArray(list.map(function (item) {
    return (0, _BoardItem2.default)(item);
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
      text = props.text;


  return (0, _Node.Node)('li', { class: 'item ' + (completed && 'completed') }, hover && (0, _Node.Node)('span', { class: 'checkbox' }, (0, _Node.Node)('input', { type: 'checkbox' })), text, hover && (0, _Node.Node)('span', { class: 'trash' }, '🗑'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvQm9hcmQuanMiLCJzcmMvY29tcG9uZW50cy9Cb2FyZEVtcHR5LmpzIiwic3JjL2NvbXBvbmVudHMvQm9hcmRJdGVtLmpzIiwic3JjL2NvbXBvbmVudHMvVGV4dFVwZGF0ZS5qcyIsInNyYy9oZWxwZXJzL05vZGUuanMiLCJzcmMvaGVscGVycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7QUFFQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sUUFBUSxDQUNaLEVBQUUsV0FBVyxLQUFiLEVBQW9CLE9BQU8sS0FBM0IsRUFBa0MsTUFBTSxVQUF4QyxFQURZLEVBRVosRUFBRSxXQUFXLEtBQWIsRUFBb0IsT0FBTyxJQUEzQixFQUFpQyxNQUFNLGFBQXZDLEVBRlksRUFHWixFQUFFLFdBQVcsSUFBYixFQUFtQixPQUFPLElBQTFCLEVBQWdDLE1BQU0sY0FBdEMsRUFIWSxDQUFkOztBQU1BLElBQU0sU0FBUyxDQUNiLEVBQUUsV0FBVyxLQUFiLEVBQW9CLE9BQU8sS0FBM0IsRUFBa0MsTUFBTSxvQkFBeEMsRUFEYSxDQUFmOztBQUlBLElBQU0sYUFBYSxDQUNqQixFQUFFLE9BQU8sTUFBVCxFQUFpQixNQUFNLEtBQXZCLEVBRGlCLEVBRWpCLEVBQUUsT0FBTyxNQUFULEVBQWlCLE1BQU0sTUFBdkIsRUFBK0IsWUFBWSxJQUEzQyxFQUZpQixDQUFuQjs7QUFLQSxJQUFNLFVBQ0osZ0JBQUssU0FBTCxFQUFnQixFQUFFLElBQUksV0FBTixFQUFoQixFQUNFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sT0FBVCxFQUFaLEVBQ0UsZ0JBQUssSUFBTCxFQUFXLEVBQVgsRUFBZSxVQUFmLENBREYsQ0FERixFQUlFLDZCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sU0FBVCxFQUFaLDRCQUNLLFdBQVcsR0FB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QUFFQSxNQUFJLFNBQVMsSUFBYixFQUFtQjtBQUNqQixXQUFPLElBQVAsQ0FBWSxLQUFaLEVBQW1CLE9BQW5CLENBQTJCLGVBQU87QUFDaEMsVUFBSSxPQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FBSixFQUFnQztBQUM5QixhQUFLLGdCQUFMLENBQXNCLE9BQU8sR0FBUCxDQUF0QixFQUFtQyxNQUFNLEdBQU4sQ0FBbkM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLFlBQUwsQ0FBa0IsR0FBbEIsRUFBdUIsTUFBTSxHQUFOLENBQXZCO0FBQ0Q7QUFDRixLQU5EO0FBT0Q7O0FBRUQsTUFBSSxTQUFTLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsYUFBUyxPQUFULENBQWlCLGlCQUFTO0FBQ3hCLFVBQUksU0FBUyxJQUFULElBQWlCLFVBQVUsS0FBL0IsRUFBc0M7O0FBRXRDLFVBQUksT0FBTyxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLGdCQUFRLEVBQUUsY0FBRixDQUFpQixLQUFqQixDQUFSO0FBQ0Q7O0FBRUQsV0FBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0QsS0FSRDtBQVNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBMUJNOzs7Ozs7OztBQ1ZBLElBQU0sd0JBQVEsU0FBUixLQUFRO0FBQUEsU0FBTyxPQUFPLElBQWQ7QUFBQSxDQUFkIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuL2hlbHBlcnMvTm9kZSdcblxuaW1wb3J0IEJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9Cb2FyZCdcbmltcG9ydCBCb2FyZEVtcHR5IGZyb20gJy4vY29tcG9uZW50cy9Cb2FyZEVtcHR5J1xuXG5jb25zdCBpdGVtcyA9IFtcbiAgeyBjb21wbGV0ZWQ6IGZhbHNlLCBob3ZlcjogZmFsc2UsIHRleHQ6ICdCdXkgbWlsaycgfSxcbiAgeyBjb21wbGV0ZWQ6IGZhbHNlLCBob3ZlcjogdHJ1ZSwgdGV4dDogJ1NpbmcgYSBzb25nJyB9LFxuICB7IGNvbXBsZXRlZDogdHJ1ZSwgaG92ZXI6IHRydWUsIHRleHQ6ICdXcml0ZSBhIHBvZW0nIH1cbl1cblxuY29uc3QgaXRlbXMyID0gW1xuICB7IGNvbXBsZXRlZDogZmFsc2UsIGhvdmVyOiBmYWxzZSwgdGV4dDogJ0NoYXJnZSBteSBjb21wdXRlcicgfVxuXVxuXG5jb25zdCBib2FyZHNMaXN0ID0gW1xuICB7IHRpdGxlOiAnVE9ETycsIGxpc3Q6IGl0ZW1zIH0sXG4gIHsgdGl0bGU6ICdET05FJywgbGlzdDogaXRlbXMyLCBpc0NyZWF0aW5nOiB0cnVlIH1cbl1cblxuY29uc3QgY29udGVudCA9IChcbiAgTm9kZSgnc2VjdGlvbicsIHsgaWQ6ICdjb250YWluZXInIH0sXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3RpdGxlJyB9LFxuICAgICAgTm9kZSgnaDEnLCB7fSwgJ015IGJvYXJkJylcbiAgICApLFxuICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdjb250ZW50JyB9LFxuICAgICAgLi4uYm9hcmRzTGlzdC5tYXAoYm9hcmQgPT4gQm9hcmQoeyAuLi5ib2FyZCB9KSksXG4gICAgICBCb2FyZEVtcHR5KCksXG4gICAgKVxuICApXG4pXG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG5yb290LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi4vaGVscGVycy9Ob2RlJ1xuXG5pbXBvcnQgQm9hcmRJdGVtIGZyb20gJy4vQm9hcmRJdGVtJ1xuaW1wb3J0IFRleHRVcGRhdGUgZnJvbSAnLi9UZXh0VXBkYXRlJ1xuXG5pbXBvcnQgeyBpc05pbCB9IGZyb20gJy4uL2hlbHBlcnMnXG5cbmNvbnN0IEJvYXJkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBsaXN0LCBpc0NyZWF0aW5nIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogYGJvYXJkICR7aXNOaWwobGlzdCkgPyAnZW1wdHknIDogJ2Z1bGwnfWAgfSxcbiAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICd0aXRsZScgfSwgdGl0bGUpLFxuICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2xpc3QnIH0sXG4gICAgICAgIE5vZGUoJ3VsJywge30sXG4gICAgICAgICAgLi4ubGlzdC5tYXAoaXRlbSA9PiBCb2FyZEl0ZW0oaXRlbSkpXG4gICAgICAgICksXG4gICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdpdGVtIG5ldycgfSxcbiAgICAgICAgICBpc0NyZWF0aW5nICYmIFRleHRVcGRhdGUoKSxcbiAgICAgICAgICAhaXNDcmVhdGluZyAmJiAnKyBOZXcgaXRlbSdcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL05vZGUnXG5cbmNvbnN0IEJvYXJkRW1wdHkgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2JvYXJkIGVtcHR5JyB9LFxuICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3BsdXMnIH0sICcrJylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRFbXB0eVxuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uL2hlbHBlcnMvTm9kZSdcblxuY29uc3QgQm9hcmRJdGVtID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNvbXBsZXRlZCwgaG92ZXIsIHRleHQgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICBOb2RlKCdsaScsIHsgY2xhc3M6IGBpdGVtICR7Y29tcGxldGVkICYmICdjb21wbGV0ZWQnfWB9LFxuICAgICAgaG92ZXIgJiYgKFxuICAgICAgICBOb2RlKCdzcGFuJywgeyBjbGFzczogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgIE5vZGUoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICB0ZXh0LFxuICAgICAgaG92ZXIgJiYgTm9kZSgnc3BhbicsIHsgY2xhc3M6ICd0cmFzaCcgfSwgJ/Cfl5EnKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEl0ZW1cbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL05vZGUnXG5cbmNvbnN0IFRleHRVcGRhdGUgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3VwZGF0ZScgfSxcbiAgICAgIE5vZGUoJ2lucHV0JywgeyB0aXRsZTogJ3VwZGF0ZScsIGF1dG9mb2N1czogJ3RydWUnLCB0eXBlOiAndGV4dCcgfSksXG4gICAgICBOb2RlKCdidXR0b24nLCB7IGNsYXNzOiAnc2F2ZScgfSwgJ/CfkY0nKVxuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0VXBkYXRlXG4iLCJjb25zdCBkID0gZG9jdW1lbnRcblxuY29uc3QgRVZFTlRTID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbktleVVwOiAna2V5dXAnLFxuICBvbkxvYWQ6ICdsb2FkJyxcbiAgb25Gb2N1czogJ2ZvY3VzJyxcbiAgb25CbHVyOiAnYmx1cidcbn1cblxuZXhwb3J0IGNvbnN0IE5vZGUgPSAoZWxlbSwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBub2RlID0gZC5jcmVhdGVFbGVtZW50KGVsZW0pXG5cbiAgaWYgKGF0dHJzICE9IG51bGwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKEVWRU5UUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFNba2V5XSwgYXR0cnNba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZCA9PSBudWxsIHx8IGNoaWxkID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkID0gZC5jcmVhdGVUZXh0Tm9kZShjaGlsZClcbiAgICAgIH1cblxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsImV4cG9ydCBjb25zdCBpc05pbCA9IHN0ciA9PiBzdHIgPT0gbnVsbFxuIl19
