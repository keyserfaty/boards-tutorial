import { Node } from '../helpers/Node'

import BoardItem from './BoardItem'
import { isNil } from '../helpers'

const Board = props => {
  const { title, list } = props

  return (
    Node('div', { class: `board ${isNil(list) ? 'empty' : 'full'}` },
      !isNil(list) && Node('div', { class: 'title' }, title),
      !isNil(list) && (
        Node('div', { class: 'list' },
          Node('ul', {},
            ...list.map(item => BoardItem(item))
          ),
          Node('div', { class: 'item new' }, '+ New item')
        )
      ),
      isNil(list) && Node('div', { class: 'plus' }, '+')
    )
  )
}

export default Board
