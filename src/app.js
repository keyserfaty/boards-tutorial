import { Node } from './helpers/Node'

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
            Node('li', { class: 'item' }, 'My todo item'),
            Node('li', { class: 'item' },
              Node('span', { class: 'checkbox' },
                Node('input', { type: 'checkbox' })
              ),
              'My todo text',
              Node('span', { class: 'trash' }, '🗑')
            ),
            Node('li', { class: 'item completed' },
              Node('span', { class: 'checkbox' },
                Node('input', { type: 'checkbox' })
              ),
              'My todo text',
              Node('span', { class: 'trash' }, '🗑')
            ),
          ),
          Node('div', { class: 'item new' }, '+ New item')
        )
      ),
      Node('div', { class: 'board full' },
        Node('div', { class: 'title' }, 'TODO'),
        Node('div', { class: 'list' },
          Node('ul', {},
            Node('li', { class: 'item' }, 'My todo item'),
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
