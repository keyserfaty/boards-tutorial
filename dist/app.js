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
        child = d.createTextNode(child);
      }

      node.appendChild(child);
    });
  }

  return node;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2hlbHBlcnMvTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsSUFBTSxVQUNKLGdCQUFLLFNBQUwsRUFBZ0IsRUFBRSxJQUFJLFdBQU4sRUFBaEIsRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE9BQVQsRUFBWixFQUNFLGdCQUFLLElBQUwsRUFBVyxFQUFYLEVBQWUsVUFBZixDQURGLENBREYsRUFJRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLFNBQVQsRUFBWixFQUNFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sWUFBVCxFQUFaLEVBQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxPQUFULEVBQVosRUFBZ0MsTUFBaEMsQ0FERixFQUVFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sTUFBVCxFQUFaLEVBQ0UsZ0JBQUssSUFBTCxFQUFXLEVBQVgsRUFDRSxnQkFBSyxJQUFMLEVBQVcsRUFBRSxPQUFPLE1BQVQsRUFBWCxFQUE4QixjQUE5QixDQURGLEVBRUUsZ0JBQUssSUFBTCxFQUFXLEVBQUUsT0FBTyxNQUFULEVBQVgsRUFDRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLFVBQVQsRUFBYixFQUNFLGdCQUFLLE9BQUwsRUFBYyxFQUFFLE1BQU0sVUFBUixFQUFkLENBREYsQ0FERixFQUlFLGNBSkYsRUFLRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLE9BQVQsRUFBYixFQUFpQyxJQUFqQyxDQUxGLENBRkYsRUFTRSxnQkFBSyxJQUFMLEVBQVcsRUFBRSxPQUFPLGdCQUFULEVBQVgsRUFDRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLFVBQVQsRUFBYixFQUNFLGdCQUFLLE9BQUwsRUFBYyxFQUFFLE1BQU0sVUFBUixFQUFkLENBREYsQ0FERixFQUlFLGNBSkYsRUFLRSxnQkFBSyxNQUFMLEVBQWEsRUFBRSxPQUFPLE9BQVQsRUFBYixFQUFpQyxJQUFqQyxDQUxGLENBVEYsQ0FERixFQWtCRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLFVBQVQsRUFBWixFQUFtQyxZQUFuQyxDQWxCRixDQUZGLENBREYsRUF3QkUsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxZQUFULEVBQVosRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE9BQVQsRUFBWixFQUFnQyxNQUFoQyxDQURGLEVBRUUsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxNQUFULEVBQVosRUFDRSxnQkFBSyxJQUFMLEVBQVcsRUFBWCxFQUNFLGdCQUFLLElBQUwsRUFBVyxFQUFFLE9BQU8sTUFBVCxFQUFYLEVBQThCLGNBQTlCLENBREYsQ0FERixFQUlFLGdCQUFLLEtBQUwsRUFBWSxFQUFFLE9BQU8sVUFBVCxFQUFaLEVBQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxRQUFULEVBQVosRUFDRSxnQkFBSyxPQUFMLEVBQWMsRUFBRSxPQUFPLFFBQVQsRUFBbUIsV0FBVyxNQUE5QixFQUFzQyxNQUFNLE1BQTVDLEVBQWQsQ0FERixFQUVFLGdCQUFLLFFBQUwsRUFBZSxFQUFFLE9BQU8sTUFBVCxFQUFmLEVBQWtDLElBQWxDLENBRkYsQ0FERixDQUpGLENBRkYsQ0F4QkYsRUFzQ0UsZ0JBQUssS0FBTCxFQUFZLEVBQUUsT0FBTyxhQUFULEVBQVosRUFDRSxnQkFBSyxLQUFMLEVBQVksRUFBRSxPQUFPLE1BQVQsRUFBWixFQUErQixHQUEvQixDQURGLENBdENGLENBSkYsQ0FERjs7QUFrREEsSUFBTSxPQUFPLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsS0FBSyxXQUFMLENBQWlCLE9BQWpCOzs7Ozs7OztBQ3JEQSxJQUFNLElBQUksUUFBVjs7QUFFQSxJQUFNLFNBQVM7QUFDYixXQUFTLE9BREk7QUFFYixXQUFTLE9BRkk7QUFHYixVQUFRLE1BSEs7QUFJYixXQUFTLE9BSkk7QUFLYixVQUFRO0FBTEssQ0FBZjs7QUFRTyxJQUFNLHNCQUFPLFNBQVAsSUFBTyxDQUFDLElBQUQsRUFBTyxLQUFQLEVBQThCO0FBQUEsb0NBQWIsUUFBYTtBQUFiLFlBQWE7QUFBQTs7QUFDaEQsTUFBSSxPQUFPLEVBQUUsYUFBRixDQUFnQixJQUFoQixDQUFYOztBQUVBLE1BQUksU0FBUyxJQUFiLEVBQW1CO0FBQ2pCLFdBQU8sSUFBUCxDQUFZLEtBQVosRUFBbUIsT0FBbkIsQ0FBMkIsZUFBTztBQUNoQyxVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQ2hDLGFBQUssZ0JBQUwsQ0FBc0IsT0FBTyxHQUFQLENBQXRCLEVBQW1DLE1BQU0sR0FBTixDQUFuQztBQUNELE9BRkMsTUFFSztBQUNMLGFBQUssWUFBTCxDQUFrQixHQUFsQixFQUF1QixNQUFNLEdBQU4sQ0FBdkI7QUFDRDtBQUNGLEtBTkM7QUFPRDs7QUFFRCxNQUFJLFNBQVMsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUN2QixhQUFTLE9BQVQsQ0FBaUIsaUJBQVM7QUFDeEIsVUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsZ0JBQVEsRUFBRSxjQUFGLENBQWlCLEtBQWpCLENBQVI7QUFDRDs7QUFFRCxXQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDSCxLQU5DO0FBT0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0F4Qk0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vaGVscGVycy9Ob2RlJ1xuXG5jb25zdCBjb250ZW50ID0gKFxuICBOb2RlKCdzZWN0aW9uJywgeyBpZDogJ2NvbnRhaW5lcicgfSxcbiAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAndGl0bGUnIH0sXG4gICAgICBOb2RlKCdoMScsIHt9LCAnTXkgYm9hcmQnKVxuICAgICksXG4gICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2NvbnRlbnQnIH0sXG4gICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnYm9hcmQgZnVsbCcgfSxcbiAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3RpdGxlJyB9LCAnVE9ETycpLFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnbGlzdCcgfSxcbiAgICAgICAgICBOb2RlKCd1bCcsIHt9LFxuICAgICAgICAgICAgTm9kZSgnbGknLCB7IGNsYXNzOiAnaXRlbScgfSwgJ015IHRvZG8gaXRlbScpLFxuICAgICAgICAgICAgTm9kZSgnbGknLCB7IGNsYXNzOiAnaXRlbScgfSxcbiAgICAgICAgICAgICAgTm9kZSgnc3BhbicsIHsgY2xhc3M6ICdjaGVja2JveCcgfSxcbiAgICAgICAgICAgICAgICBOb2RlKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JyB9KVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAnTXkgdG9kbyB0ZXh0JyxcbiAgICAgICAgICAgICAgTm9kZSgnc3BhbicsIHsgY2xhc3M6ICd0cmFzaCcgfSwgJ/Cfl5EnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIE5vZGUoJ2xpJywgeyBjbGFzczogJ2l0ZW0gY29tcGxldGVkJyB9LFxuICAgICAgICAgICAgICBOb2RlKCdzcGFuJywgeyBjbGFzczogJ2NoZWNrYm94JyB9LFxuICAgICAgICAgICAgICAgIE5vZGUoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnIH0pXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICdNeSB0b2RvIHRleHQnLFxuICAgICAgICAgICAgICBOb2RlKCdzcGFuJywgeyBjbGFzczogJ3RyYXNoJyB9LCAn8J+XkScpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICksXG4gICAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2l0ZW0gbmV3JyB9LCAnKyBOZXcgaXRlbScpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnYm9hcmQgZnVsbCcgfSxcbiAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3RpdGxlJyB9LCAnVE9ETycpLFxuICAgICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnbGlzdCcgfSxcbiAgICAgICAgICBOb2RlKCd1bCcsIHt9LFxuICAgICAgICAgICAgTm9kZSgnbGknLCB7IGNsYXNzOiAnaXRlbScgfSwgJ015IHRvZG8gaXRlbScpLFxuICAgICAgICAgICksXG4gICAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ2l0ZW0gbmV3JyB9LFxuICAgICAgICAgICAgTm9kZSgnZGl2JywgeyBjbGFzczogJ3VwZGF0ZScgfSxcbiAgICAgICAgICAgICAgTm9kZSgnaW5wdXQnLCB7IHRpdGxlOiAndXBkYXRlJywgYXV0b2ZvY3VzOiAndHJ1ZScsIHR5cGU6ICd0ZXh0JyB9KSxcbiAgICAgICAgICAgICAgTm9kZSgnYnV0dG9uJywgeyBjbGFzczogJ3NhdmUnIH0sICfwn5GNJylcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBOb2RlKCdkaXYnLCB7IGNsYXNzOiAnYm9hcmQgZW1wdHknIH0sXG4gICAgICAgIE5vZGUoJ2RpdicsIHsgY2xhc3M6ICdwbHVzJyB9LCAnKycpXG4gICAgICApLFxuICAgIClcbiAgKVxuKVxuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKVxucm9vdC5hcHBlbmRDaGlsZChjb250ZW50KVxuIiwiY29uc3QgZCA9IGRvY3VtZW50XG5cbmNvbnN0IEVWRU5UUyA9IHtcbiAgb25DbGljazogJ2NsaWNrJyxcbiAgb25LZXlVcDogJ2tleXVwJyxcbiAgb25Mb2FkOiAnbG9hZCcsXG4gIG9uRm9jdXM6ICdmb2N1cycsXG4gIG9uQmx1cjogJ2JsdXInXG59XG5cbmV4cG9ydCBjb25zdCBOb2RlID0gKGVsZW0sIGF0dHJzLCAuLi5jaGlsZHJlbikgPT4ge1xuICBsZXQgbm9kZSA9IGQuY3JlYXRlRWxlbWVudChlbGVtKVxuXG4gIGlmIChhdHRycyAhPSBudWxsKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChFVkVOVFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKEVWRU5UU1trZXldLCBhdHRyc1trZXldKVxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pXG4gICAgfVxuICB9KVxuICB9XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkID0gZC5jcmVhdGVUZXh0Tm9kZShjaGlsZClcbiAgICAgIH1cblxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iXX0=
