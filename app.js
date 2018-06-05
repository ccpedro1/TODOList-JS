const addListButton = document.querySelector('#task');
const todoList = document.querySelector('ul.collection');
//const heading = document.querySelector('h5');

// Click
 addListButton.addEventListener('keydown', createLi);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
//card.addEventListener('mousemove', runEvent);

// Event Handler
function createLi() {
  let listItem = document.createElement('li');
  listItem.className = "collection-item";
  listItem.textContent = "List Item"

  let listItemLink = document.createElement('a');
  listItemLink.className = 'delete-item secondary-content';
  listItemLink.href = "#";
  listItemLink.innerHTML = '<i class="fa fa-remove"></i>';

  listItem.appendChild(listItemLink);
  todoList.appendChild(listItem);
}