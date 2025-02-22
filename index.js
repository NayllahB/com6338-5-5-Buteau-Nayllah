
var form = document.getElementById('add-todo')

form.onsubmit = function(e) {
    e.preventDefault()
    //grab inputed item
    var formField = document.querySelector('input')
    var data = formField.value.trim()

    // does not add todo if field is empty
    if (data === ''){
        return
    }
    
    // display todo below form
    var ulElement = document.getElementById('todo-list')
    var liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    var listButton = document.createElement('button')
    liElement.appendChild(listButton)
    listButton.textContent = data

    //clears form field after input
    formField.value = ""

    var clickCount = 0

    // strikes through list item when clicked
    listButton.addEventListener('click', function(e) {
        listButton.style.textDecoration = 'line-through'
        clickCount ++
        
        // removes todo after 2 clicks
        if(clickCount === 2){
            liElement.remove()
        }
    })

}

