//Document object Model
const p = document.querySelector('p')

const  new_paragraph = document.createElement('p')
new_paragraph.textContent = "New paragraph Created from JavaScript"
document.querySelector('body').appendChild(new_paragraph)
docume