handleMenu()
handleHeader()
handleCards()
handleList()

function handleMenu() {
  const menuElement = document.querySelector('.btn-group-vertical')

  menuElement.classList.remove('btn-group-vertical')
}

function handleHeader() {
  const headerElement = document.querySelector('.jumbotron')
  const buttonElement = headerElement.querySelector('.btn')

  headerElement.classList.add(
    'bg-secondary',
    'text-white',
    'text-right'
  )

  buttonElement.classList.remove('btn-primary')
  buttonElement.classList.add('btn-success')
}

function handleCards() {
  const cardElements = document.querySelectorAll('.card')
  const buttonElement = cardElements[0].querySelector('.btn')

  cardElements[0].parentNode.classList.add('order-2')
  cardElements[1].parentNode.classList.add('order-4')
  cardElements[2].parentNode.classList.add('order-3')
  cardElements[3].parentNode.classList.add('order-1')

  buttonElement.classList.remove('btn-primary')
  buttonElement.classList.add('btn-success')
}

function handleList() {
  const listElement = document.querySelector('.list-group')
  const activeItemElement = listElement.querySelector('.active')

  const fourthItemElement = document.createElement('li')
  const fifthItemElement = document.createElement('li')

  activeItemElement.classList.remove('active')
  
  fourthItemElement.append('Quarto item')
  fourthItemElement.classList.add('list-group-item','active')
  
  fifthItemElement.append('Quinto item')
  fifthItemElement.classList.add('list-group-item')

  listElement.append(fourthItemElement, fifthItemElement)
}