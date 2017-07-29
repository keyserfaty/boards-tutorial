import { Node } from './helpers/Node'

import Board from './components/Board'
import BoardEmpty from './components/BoardEmpty'

const items = [
  { completed: false, hover: false, text: 'Buy milk' },
  { completed: false, hover: true, text: 'Sing a song' },
  { completed: true, hover: true, text: 'Write a poem' }
]

const items2 = [
  { completed: false, hover: false, text: 'Charge my computer' }
]

const boardsList = [
  { title: 'TODO', list: items },
  { title: 'DONE', list: items2, isCreating: true }
]

const content = (
  Node('section', { id: 'container' },
    Node('div', { class: 'title' },
      Node('h1', {}, 'My board')
    ),
    Node('div', { class: 'content' },
      ...boardsList.map((board, i) => Board({ ...board, key: i })),
      BoardEmpty(),
    )
  )
)

const root = document.querySelector('#root')
root.appendChild(content)
