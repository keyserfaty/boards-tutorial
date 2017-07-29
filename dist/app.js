(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Node = require('./helpers/Node');

var content = (0, _Node.Node)('section', { id: 'container' }, (0, _Node.Node)('div', { class: 'title' }, (0, _Node.Node)('h1', {}, 'My board')), (0, _Node.Node)('div', { class: 'content' }, (0, _Node.Node)('div', { class: 'board full' }, (0, _Node.Node)('div', { class: 'title' }, 'TODO'), (0, _Node.Node)('div', { class: 'list' }, (0, _Node.Node)('ul', {}, (0, _Node.Node)('li', { class: 'item' }, 'My todo item'), (0, _Node.Node)('li', { class: 'item' }, (0, _Node.Node)('span', { class: 'checkbox' }, (0, _Node.Node)('input', { type: 'checkbox' })), 'My todo text', (0, _Node.Node)('span', { class: 'trash' }, '🗑')), (0, _Node.Node)('li', { class: 'item completed' }, (0, _Node.Node)('span', { class: 'checkbox' }, (0, _Node.Node)('input', { type: 'checkbox' })), 'My todo text', (0, _Node.Node)('span', { class: 'trash' }, '🗑'))), (0, _Node.Node)('div', { class: 'item new' }, '+ New item'))), (0, _Node.Node)('div', { class: 'board full' }, (0, _Node.Node)('div', { class: 'title' }, 'TODO'), (0, _Node.Node)('div', { class: 'list' }, (0, _Node.Node)('ul', {}, (0, _Node.Node)('li', { class: 'item' }, 'My todo item')), (0, _Node.Node)('div', { class: 'item new' }, (0, _Node.Node)('div', { class: 'update' }, (0, _Node.Node)('input', { title: 'update', autofocus: 'true', type: 'text' }), (0, _Node.Node)('button', { class: 'save' }, '👍'))))), (0, _Node.Node)('div', { class: 'board empty' }, (0, _Node.Node)('div', { class: 'plus' }, '+'))));

var root = document.querySelector('#root');
root.appendChild(content);

},{"./helpers/Node":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
      if (typeof child === 'string') {
        node.innerHTML = child;
      }

      if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
        node.appendChild(child);
      }
    });
  }

  return node;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2hlbHBlcnMvTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsSUFBTSxVQUNKLGdCQUFLLFNBQUwsRUFBZ0IsRUFBRSxJQUFJLFdBQU4sRUFBaEIsRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE9BQVQsRUFBWixFQUNFLGdCQUFLLElBQUwsRUFBVyxFQUFYLEVBQWUsVUFBZixDQURGLENBREYsRUFJRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLFNBQVQsRUFBWixFQUNFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sWUFBVCxFQUFaLEVBQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxPQUFULEVBQVosRUFBZ0MsTUFBaEMsQ0FERixFQUVFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sTUFBVCxFQUFaLEVBQ0UsZ0JBQUssSUFBTCxFQUFXLEVBQVgsRUFDRSxnQkFBSyxJQUFMLEVBQVcsRUFBRSxPQUFPLE1BQVQsRUFBWCxFQUE4QixjQUE5QixDQURGLEVBRUUsZ0JBQUssSUFBTCxFQUFXLEVBQUUsT0FBTyxNQUFULEVBQVgsRUFDRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLFVBQVQsRUFBYixFQUNFLGdCQUFLLE9BQUwsRUFBYyxFQUFFLE1BQU0sVUFBUixFQUFkLENBREYsQ0FERixFQUlFLGNBSkYsRUFLRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLE9BQVQsRUFBYixFQUFpQyxJQUFqQyxDQUxGLENBRkYsRUFTRSxnQkFBSyxJQUFMLEVBQVcsRUFBRSxPQUFPLGdCQUFULEVBQVgsRUFDRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLFVBQVQsRUFBYixFQUNFLGdCQUFLLE9BQUwsRUFBYyxFQUFFLE1BQU0sVUFBUixFQUFkLENBREYsQ0FERixFQUlFLGNBSkYsRUFLRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLE9BQVQsRUFBYixFQUFpQyxJQUFqQyxDQUxGLENBVEYsQ0FERixFQWtCRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLFVBQVQsRUFBWixFQUFtQyxZQUFuQyxDQWxCRixDQUZGLENBREYsRUF3QkUsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxZQUFULEVBQVosRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE9BQVQsRUFBWixFQUFnQyxNQUFoQyxDQURGLEVBRUUsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxNQUFULEVBQVosRUFDRSxnQkFBSyxJQUFMLEVBQVcsRUFBWCxFQUNFLGdCQUFLLElBQUwsRUFBVyxFQUFFLE9BQU8sTUFBVCxFQUFYLEVBQThCLGNBQTlCLENBREYsQ0FERixFQUlFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sVUFBVCxFQUFaLEVBQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxRQUFULEVBQVosRUFDRSxnQkFBSyxPQUFMLEVBQWMsRUFBRSxPQUFPLFFBQVQsRUFBbUIsV0FBVyxNQUE5QixFQUFzQyxNQUFNLE1BQTVDLEVBQWQsQ0FERixFQUVFLGdCQUFLLFFBQUwsRUFBZSxFQUFFLE9BQU8sTUFBVCxFQUFmLEVBQWtDLElBQWxDLENBRkYsQ0FERixDQUpGLENBRkYsQ0F4QkYsRUFzQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxhQUFULEVBQVosRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE1BQVQsRUFBWixFQUErQixHQUEvQixDQURGLENBdENGLENBSkYsQ0FERjs7QUFrREEsSUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsS0FBSyxXQUFMLENBQWlCLE9BQWpCOzs7Ozs7Ozs7OztBQ3JEQSxJQUFNLElBQUksUUFBVjs7QUFFQSxJQUFNLFNBQVM7QUFDYixXQUFTLE9BREk7QUFFYixXQUFTLE9BRkk7QUFHYixVQUFRLE1BSEs7QUFJYixXQUFTLE9BSkk7QUFLYixVQUFRO0FBTEssQ0FBZjs7QUFRTyxJQUFNLHNCQUFPLFNBQVAsSUFBTyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQThCO0FBQUEsb0NBQWIsUUFBYTtBQUFiLFlBQWE7QUFBQTs7QUFDaEQsTUFBSSxPQUFPLEVBQUUsYUFBRixDQUFnQixJQUFoQixDQUFYOztBQUVBLE1BQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFdBQU8sSUFBUCxDQUFZLEtBQVosRUFBbUIsT0FBbkIsQ0FBMkIsZUFBTztBQUNoQyxVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQ2hDLGFBQUssZ0JBQUwsQ0FBc0IsT0FBTyxHQUFQLENBQXRCLEVBQW1DLE1BQU0sR0FBTixDQUFuQztBQUNELE9BRkMsTUFFSztBQUNMLGFBQUssWUFBTCxDQUFrQixHQUFsQixFQUF1QixNQUFNLEdBQU4sQ0FBdkI7QUFDRDtBQUNGLEtBTkM7QUFPRDs7QUFFRCxNQUFJLFNBQVMsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN2QixhQUFTLE9BQVQsQ0FBaUIsaUJBQVM7QUFDeEIsVUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDL0IsYUFBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7O0FBRUQsVUFBSSxRQUFPLEtBQVAseUNBQU8sS0FBUCxPQUFpQixRQUFyQixFQUErQjtBQUM3QixhQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDRDtBQUNGLEtBUkM7QUFTRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQTFCTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9oZWxwZXJzL05vZGUnXG5cbmNvbnN0IGNvbnRlbnQgPSAoXG4gIE5vZGUoJ3NlY3Rpb24nLCB7IGlkOiAnY29udGFpbmVyJyB9LFxuICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICd0aXRsZScgfSxcbiAgICAgIE5vZGUoJ2gxJywge30sICdNeSBib2FyZCcpXG4gICAgKSxcbiAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnY29udGVudCcgfSxcbiAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdib2FyZCBmdWxsJyB9LFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndGl0bGUnIH0sICdUT0RPJyksXG4gICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdsaXN0JyB9LFxuICAgICAgICAgIE5vZGUoJ3VsJywge30sXG4gICAgICAgICAgICBOb2RlKCdsaScsIHsgY2xhc3M6ICdpdGVtJyB9LCAnTXkgdG9kbyBpdGVtJyksXG4gICAgICAgICAgICBOb2RlKCdsaScsIHsgY2xhc3M6ICdpdGVtJyB9LFxuICAgICAgICAgICAgICBOb2RlKCdzcGFuJywgeyBjbGFzczogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIE5vZGUoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnIH0pXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICdNeSB0b2RvIHRleHQnLFxuICAgICAgICAgICAgICBOb2RlKCdzcGFuJywgeyBjbGFzczogJ3RyYXNoJyB9LCAn8J+XkScpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgTm9kZSgnbGknLCB7IGNsYXNzOiAnaXRlbSBjb21wbGV0ZWQnIH0sXG4gICAgICAgICAgICAgIE5vZGUoJ3NwYW4nLCB7IGNsYXNzOiAnY2hlY2tib3gnIH0sXG4gICAgICAgICAgICAgICAgTm9kZSgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcgfSlcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgJ015IHRvZG8gdGV4dCcsXG4gICAgICAgICAgICAgIE5vZGUoJ3NwYW4nLCB7IGNsYXNzOiAndHJhc2gnIH0sICfwn5eRJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKSxcbiAgICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnaXRlbSBuZXcnIH0sICcrIE5ldyBpdGVtJylcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdib2FyZCBmdWxsJyB9LFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndGl0bGUnIH0sICdUT0RPJyksXG4gICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdsaXN0JyB9LFxuICAgICAgICAgIE5vZGUoJ3VsJywge30sXG4gICAgICAgICAgICBOb2RlKCdsaScsIHsgY2xhc3M6ICdpdGVtJyB9LCAnTXkgdG9kbyBpdGVtJyksXG4gICAgICAgICAgKSxcbiAgICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnaXRlbSBuZXcnIH0sXG4gICAgICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndXBkYXRlJyB9LFxuICAgICAgICAgICAgICBOb2RlKCdpbnB1dCcsIHsgdGl0bGU6ICd1cGRhdGUnLCBhdXRvZm9jdXM6ICd0cnVlJywgdHlwZTogJ3RleHQnIH0pLFxuICAgICAgICAgICAgICBOb2RlKCdidXR0b24nLCB7IGNsYXNzOiAnc2F2ZScgfSwgJ/CfkY0nKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdib2FyZCBlbXB0eScgfSxcbiAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3BsdXMnIH0sICcrJylcbiAgICAgICksXG4gICAgKVxuICApXG4pXG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG5yb290LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4iLCJjb25zdCBkID0gZG9jdW1lbnRcblxuY29uc3QgRVZFTlRTID0ge1xuICBvbkNsaWNrOiAnY2xpY2snLFxuICBvbktleVVwOiAna2V5dXAnLFxuICBvbkxvYWQ6ICdsb2FkJyxcbiAgb25Gb2N1czogJ2ZvY3VzJyxcbiAgb25CbHVyOiAnYmx1cidcbn1cblxuZXhwb3J0IGNvbnN0IE5vZGUgPSAoZWxlbSwgYXR0cnMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBub2RlID0gZC5jcmVhdGVFbGVtZW50KGVsZW0pXG5cbiAgaWYgKGF0dHJzICE9IG51bGwpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKEVWRU5UUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTW2tleV0sIGF0dHJzW2tleV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSlcbiAgICB9XG4gIH0pXG4gIH1cblxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gY2hpbGRcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0Jykge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9XG4gIH0pXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIl19
