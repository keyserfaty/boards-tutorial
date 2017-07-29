import { Node } from '../helpers/Node'

const BoardItem = props => {
  const { completed, hover, text } = props

  return (
    Node('li', { class: `item ${completed && 'completed'}`},
      hover && (
        Node('span', { class: 'checkbox' },
          Node('input', { type: 'checkbox' })
        )
      ),
      text,
      hover && Node('span', { class: 'trash' }, '🗑')
    )
  )
}

export default BoardItem
