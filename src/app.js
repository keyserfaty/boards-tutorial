import { Node } from './helpers/Node'

import BoardItem from './components/BoardItem'

const content = (
  Node('section', { id: 'container' },
    Node('div', { class: 'title' },
      Node('h1', {}, 'My board')
    ),
    Node('div', { class: 'content' },
      Node('div', { class: 'board full' },
        Node('div', { class: 'title' }, 'TODO'),
        Node('div', { class: 'list' },
          Node('ul', {},
            BoardItem({ completed: false, hover: false, text: 'Buy milk' }),
            BoardItem({ completed: false, hover: true, text: 'Sing a song' }),
            BoardItem({ completed: true, hover: true, text: 'Write a poem' }),
          ),
          Node('div', { class: 'item new' }, '+ New item')
        )
      ),
      Node('div', { class: 'board full' },
        Node('div', { class: 'title' }, 'TODO'),
        Node('div', { class: 'list' },
          Node('ul', {},
            BoardItem({ completed: false, hover: false, text: 'Charge my computer' }),
          ),
          Node('div', { class: 'item new' },
            Node('div', { class: 'update' },
              Node('input', { title: 'update', autofocus: 'true', type: 'text' }),
              Node('button', { class: 'save' }, '👍')
            )
          )
        )
      ),
      Node('div', { class: 'board empty' },
        Node('div', { class: 'plus' }, '+')
      ),
    )
  )
)

const root = document.querySelector('#root')
root.appendChild(content)
