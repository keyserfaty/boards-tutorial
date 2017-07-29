import { Node } from '../helpers/Node'

const TextUpdate = props => {
  return (
    Node('div', { class: 'update' },
      Node('input', { title: 'update', autofocus: 'true', type: 'text' }),
      Node('button', { class: 'save' }, '👍')
    )
  )
}

export default TextUpdate
