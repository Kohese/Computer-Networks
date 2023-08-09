const h2 = document.getElementById('main_text')
function showSection(el) {
  let section = getId(el)
  if (section.id == el) { 
    document.querySelectorAll('section').forEach(e => {
      e.classList.remove('showing')
    })
    section.classList.add('showing')
    let mainText = document.querySelector(`#${section.id} h2`)
    if (mainText !== null) {
      h2.textContent = mainText.textContent
      mainText.style.display = 'none'
    } else {
      h2.textContent = 'Components'
    }
   }
}

function getId(id) {
const arr = Array.from(document.querySelectorAll('section'))
for(let i = 0; i < arr.length; i++) {
  if (arr[i].id == id) { return arr[i] }
  }
}