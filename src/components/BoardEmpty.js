import { Node } from '../helpers/Node'

const BoardEmpty = props => {
  return (
    Node('div', { class: 'board empty' },
      Node('div', { class: 'plus' }, '+')
    )
  )
}

export default BoardEmpty
