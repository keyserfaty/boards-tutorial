import { Node } from '../helpers/Node'

import BoardItem from './BoardItem'
import TextUpdate from './TextUpdate'

import { isNil } from '../helpers'

const Board = props => {
  const { title, list, isCreating } = props

  return (
    Node('div', { class: `board ${isNil(list) ? 'empty' : 'full'}` },
      Node('div', { class: 'title' }, title),
      Node('div', { class: 'list' },
        Node('ul', {},
          ...list.map(item => BoardItem(item))
        ),
        Node('div', { class: 'item new' },
          isCreating && TextUpdate(),
          !isCreating && '+ New item'
        ),
      )
    )
  )
}

export default Board
