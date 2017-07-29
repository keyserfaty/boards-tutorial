import { Node } from './helpers/Node'

import Board from './components/Board'

const items = [
  { completed: false, hover: false, text: 'Buy milk' },
  { completed: false, hover: true, text: 'Sing a song' },
  { completed: true, hover: true, text: 'Write a poem' }
]

const items2 = [
  { completed: false, hover: false, text: 'Charge my computer' }
]

const content = (
  Node('section', { id: 'container' },
    Node('div', { class: 'title' },
      Node('h1', {}, 'My board')
    ),
    Node('div', { class: 'content' },
      Board({ title: 'TODO', list: items }),
      Board({ title: 'DONE', list: items2 }),
      Board({}),
    )
  )
)

const root = document.querySelector('#root')
root.appendChild(content)
