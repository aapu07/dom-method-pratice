let bodyElement = document.querySelector('body')

let buttonDiv = document.createElement('button')
let text =document.createTextNode('Remove')
buttonDiv.appendChild(text)

bodyElement.append(buttonDiv)

let makeMainDiv = document.createElement('main')
bodyElement.append(makeMainDiv)

let reset_button = document.querySelector('button')
reset_button.addEventListener('click', function() {
      makeMainDiv.remove('main')
})

let imgDiv = document.createElement('img')
imgDiv.className = 'image'
imgDiv.src = 'https://i.imgur.com/BkH1rzC.png'

let mainElement = document.querySelector('main')
mainElement.append(imgDiv)

let aDiv = document.createElement('A')
aDiv.className = 'link'
aDiv.append('Dom Method') 
aDiv.href = 'https://www.impressivewebs.com/10-essential-dom-methods-techniques-for-practical-javascript/'
mainElement.append(aDiv)