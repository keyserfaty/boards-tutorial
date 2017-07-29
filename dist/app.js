(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Node = require('./helpers/Node');

var _BoardItem = require('./components/BoardItem');

var _BoardItem2 = _interopRequireDefault(_BoardItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = (0, _Node.Node)('section', { id: 'container' }, (0, _Node.Node)('div', { class: 'title' }, (0, _Node.Node)('h1', {}, 'My board')), (0, _Node.Node)('div', { class: 'content' }, (0, _Node.Node)('div', { class: 'board full' }, (0, _Node.Node)('div', { class: 'title' }, 'TODO'), (0, _Node.Node)('div', { class: 'list' }, (0, _Node.Node)('ul', {}, (0, _BoardItem2.default)({ completed: false, hover: false, text: 'Buy milk' }), (0, _BoardItem2.default)({ completed: false, hover: true, text: 'Sing a song' }), (0, _BoardItem2.default)({ completed: true, hover: true, text: 'Write a poem' })), (0, _Node.Node)('div', { class: 'item new' }, '+ New item'))), (0, _Node.Node)('div', { class: 'board full' }, (0, _Node.Node)('div', { class: 'title' }, 'TODO'), (0, _Node.Node)('div', { class: 'list' }, (0, _Node.Node)('ul', {}, (0, _BoardItem2.default)({ completed: false, hover: false, text: 'Charge my computer' })), (0, _Node.Node)('div', { class: 'item new' }, (0, _Node.Node)('div', { class: 'update' }, (0, _Node.Node)('input', { title: 'update', autofocus: 'true', type: 'text' }), (0, _Node.Node)('button', { class: 'save' }, '👍'))))), (0, _Node.Node)('div', { class: 'board empty' }, (0, _Node.Node)('div', { class: 'plus' }, '+'))));

var root = document.querySelector('#root');
root.appendChild(content);

},{"./components/BoardItem":2,"./helpers/Node":3}],2:[function(require,module,exports){
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

},{"../helpers/Node":3}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvQm9hcmRJdGVtLmpzIiwic3JjL2hlbHBlcnMvTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUE7Ozs7OztBQUVBLElBQU0sVUFDSixnQkFBSyxTQUFMLEVBQWdCLEVBQUUsSUFBSSxXQUFOLEVBQWhCLEVBQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxPQUFULEVBQVosRUFDRSxnQkFBSyxJQUFMLEVBQVcsRUFBWCxFQUFlLFVBQWYsQ0FERixDQURGLEVBSUUsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxTQUFULEVBQVosRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLFlBQVQsRUFBWixFQUNFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sT0FBVCxFQUFaLEVBQWdDLE1BQWhDLENBREYsRUFFRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE1BQVQsRUFBWixFQUNFLGdCQUFLLElBQUwsRUFBVyxFQUFYLEVBQ0UseUJBQVUsRUFBRSxXQUFXLEtBQWIsRUFBb0IsT0FBTyxLQUEzQixFQUFrQyxNQUFNLFVBQXhDLEVBQVYsQ0FERixFQUVFLHlCQUFVLEVBQUUsV0FBVyxLQUFiLEVBQW9CLE9BQU8sSUFBM0IsRUFBaUMsTUFBTSxhQUF2QyxFQUFWLENBRkYsRUFHRSx5QkFBVSxFQUFFLFdBQVcsSUFBYixFQUFtQixPQUFPLElBQTFCLEVBQWdDLE1BQU0sY0FBdEMsRUFBVixDQUhGLENBREYsRUFNRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLFVBQVQsRUFBWixFQUFtQyxZQUFuQyxDQU5GLENBRkYsQ0FERixFQVlFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sWUFBVCxFQUFaLEVBQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxPQUFULEVBQVosRUFBZ0MsTUFBaEMs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dCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vaGVscGVycy9Ob2RlJ1xuXG5pbXBvcnQgQm9hcmRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9Cb2FyZEl0ZW0nXG5cbmNvbnN0IGNvbnRlbnQgPSAoXG4gIE5vZGUoJ3NlY3Rpb24nLCB7IGlkOiAnY29udGFpbmVyJyB9LFxuICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICd0aXRsZScgfSxcbiAgICAgIE5vZGUoJ2gxJywge30sICdNeSBib2FyZCcpXG4gICAgKSxcbiAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnY29udGVudCcgfSxcbiAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdib2FyZCBmdWxsJyB9LFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndGl0bGUnIH0sICdUT0RPJyksXG4gICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdsaXN0JyB9LFxuICAgICAgICAgIE5vZGUoJ3VsJywge30sXG4gICAgICAgICAgICBCb2FyZEl0ZW0oeyBjb21wbGV0ZWQ6IGZhbHNlLCBob3ZlcjogZmFsc2UsIHRleHQ6ICdCdXkgbWlsaycgfSksXG4gICAgICAgICAgICBCb2FyZEl0ZW0oeyBjb21wbGV0ZWQ6IGZhbHNlLCBob3ZlcjogdHJ1ZSwgdGV4dDogJ1NpbmcgYSBzb25nJyB9KSxcbiAgICAgICAgICAgIEJvYXJkSXRlbSh7IGNvbXBsZXRlZDogdHJ1ZSwgaG92ZXI6IHRydWUsIHRleHQ6ICdXcml0ZSBhIHBvZW0nIH0pLFxuICAgICAgICAgICksXG4gICAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2l0ZW0gbmV3JyB9LCAnKyBOZXcgaXRlbScpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnYm9hcmQgZnVsbCcgfSxcbiAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3RpdGxlJyB9LCAnVE9ETycpLFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnbGlzdCcgfSxcbiAgICAgICAgICBOb2RlKCd1bCcsIHt9LFxuICAgICAgICAgICAgQm9hcmRJdGVtKHsgY29tcGxldGVkOiBmYWxzZSwgaG92ZXI6IGZhbHNlLCB0ZXh0OiAnQ2hhcmdlIG15IGNvbXB1dGVyJyB9KSxcbiAgICAgICAgICApLFxuICAgICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdpdGVtIG5ldycgfSxcbiAgICAgICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICd1cGRhdGUnIH0sXG4gICAgICAgICAgICAgIE5vZGUoJ2lucHV0JywgeyB0aXRsZTogJ3VwZGF0ZScsIGF1dG9mb2N1czogJ3RydWUnLCB0eXBlOiAndGV4dCcgfSksXG4gICAgICAgICAgICAgIE5vZGUoJ2J1dHRvbicsIHsgY2xhc3M6ICdzYXZlJyB9LCAn8J+RjScpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2JvYXJkIGVtcHR5JyB9LFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAncGx1cycgfSwgJysnKVxuICAgICAgKSxcbiAgICApXG4gIClcbilcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JylcbnJvb3QuYXBwZW5kQ2hpbGQoY29udGVudClcbiIsImltcG9ydCB7IE5vZGUgfSBmcm9tICcuLi9oZWxwZXJzL05vZGUnXG5cbmNvbnN0IEJvYXJkSXRlbSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjb21wbGV0ZWQsIGhvdmVyLCB0ZXh0IH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgTm9kZSgnbGknLCB7IGNsYXNzOiBgaXRlbSAke2NvbXBsZXRlZCAmJiAnY29tcGxldGVkJ31gfSxcbiAgICAgIGhvdmVyICYmIChcbiAgICAgICAgTm9kZSgnc3BhbicsIHsgY2xhc3M6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICBOb2RlKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JyB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgdGV4dCxcbiAgICAgIGhvdmVyICYmIE5vZGUoJ3NwYW4nLCB7IGNsYXNzOiAndHJhc2gnIH0sICfwn5eRJylcbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRJdGVtXG4iLCJjb25zdCBkID0gZG9jdW1lbnRcblxuY29uc3QgRVZFTlRTID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbktleVVwOiAna2V5dXAnLFxuICBvbkxvYWQ6ICdsb2FkJyxcbiAgb25Gb2N1czogJ2ZvY3VzJyxcbiAgb25CbHVyOiAnYmx1cidcbn1cblxuZXhwb3J0IGNvbnN0IE5vZGUgPSAoZWxlbSwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBub2RlID0gZC5jcmVhdGVFbGVtZW50KGVsZW0pXG5cbiAgaWYgKGF0dHJzICE9IG51bGwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKEVWRU5UUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFNba2V5XSwgYXR0cnNba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmIChjaGlsZCA9PSBudWxsIHx8IGNoaWxkID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkID0gZC5jcmVhdGVUZXh0Tm9kZShjaGlsZClcbiAgICAgIH1cblxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiJdfQ==
