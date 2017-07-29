import { Node } from '../helpers/Node'

import BoardItem from './BoardItem'
import TextUpdate from './TextUpdate'

import { isNil } from '../helpers'

const Board = props => {
  const { title, list, isCreating, key } = props

  return (
    Node('div', { class: `board ${isNil(list) ? 'empty' : 'full'}`, id: key },
      Node('div', { class: 'title' }, title),
      Node('div', { class: 'list' },
        Node('ul', {},
          ...list.map((item, i) => BoardItem({ ...item, key: i }))
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
