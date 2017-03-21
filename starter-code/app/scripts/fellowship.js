console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middleEarth'

  var article
  var h1
  lands.forEach(function (land) {
    h1 = document.createElement('h1')
    h1.textContent = land
    article = document.createElement('article')
    article.appendChild(h1)
    middleEarth.appendChild(article)
  })
  body.appendChild(middleEarth)
}

makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var article = body.querySelector('article:first-child')
  var unordList = document.createElement('ul')
  var listitem
  hobbits.forEach(function (hobbit) {
    listitem = document.createElement('li')
    listitem.textContent = hobbit
    listitem.setAttribute('class', 'hobbit')
    unordList.appendChild(listitem)
  })
  article.appendChild(unordList)
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ringDiv = document.createElement('div')
  ringDiv.setAttribute('id', 'the-ring')
  ringDiv.setAttribute('class', 'magic-imbued-jewelry')
  ringDiv.addEventListener('click', function () {
    nazgulScreech()
  })
  var frodo = document.querySelectorAll('li.hobbit')[0]
  frodo.appendChild(ringDiv)
}

keepItSecretKeepItSafe()

// Part 4

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var asideTag = document.createElement('aside')
  var unordList = document.createElement('ul')
  var listitem
  var rivendell = body.querySelector('article:nth-child(2)')
  buddies.forEach(function (buddy) {
    listitem = document.createElement('li')
    listitem.textContent = buddy
    listitem.setAttribute('class', 'buddies')
    unordList.appendChild(listitem)
  })
  asideTag.appendChild(unordList)
  rivendell.appendChild(asideTag)
}

makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var striderLiItem = body.querySelectorAll('li.buddies')[3]
  striderLiItem.textContent = 'Aragorn'
}

beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbitsUL = body.querySelectorAll('ul')[0]
  // var hobbitsArr = body.querySelectorAll('li.hobbit')
  // var buddiesUl = body.querySelectorAll('ul')[1]
  // hobbitsArr.forEach(function (hobbit) {
  //   buddiesUl.appendChild()
  // })
  var rivendell = body.querySelector('article:nth-child(2)')
  rivendell.appendChild(hobbitsUL)
}

leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var fellowshipDiv = document.createElement('div')
  fellowshipDiv.setAttribute('id', 'the-fellowship')
  var allLi = body.querySelectorAll('li')

  // var buddiesArr = body.querySelectorAll('li.buddies')
  allLi.forEach(function (item) {
    fellowshipDiv.appendChild(item)
  })
  var rivendell = body.querySelector('article:nth-child(2)')
  rivendell.appendChild(fellowshipDiv)
}

forgeTheFellowShip()
// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalfListIt = document.querySelectorAll('li')[0]
  gandalfListIt.textContent = 'Gandalf the White'
  gandalfListIt.style = 'background-color:white;border: 3px solid gray'
}

theBalrog()

// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('horn of Gondor has been blown')
  var boromirListIt = body.querySelectorAll('li')[4]
  boromirListIt.style = 'text-decoration: line-through'
  body.querySelector('#the-fellowship').removeChild(boromirListIt)
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mordorDiv = document.createElement('div')
  mordorDiv.id = 'mount-doom'
  mordorDiv.appendChild(body.querySelectorAll('li')[4]) // frodo
  mordorDiv.appendChild(body.querySelectorAll('li')[4]) // sam
  var mordor = body.querySelector('article:nth-child(3)')
  mordor.appendChild(mordorDiv)
}

itsDangerousToGoAlone()

// Part 11

function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollumDiv = document.createElement('div')
  gollumDiv.id = 'gollum'
  // var frodo = document.querySelectorAll('#mount-doom li')[0]
  var ringDiv = document.querySelector('#the-ring')
  var mordorDiv = document.querySelector('#mount-doom')
  gollumDiv.appendChild(ringDiv)
  mordorDiv.appendChild(gollumDiv)
}

weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var mordorDiv = body.querySelector('#mount-doom')
  document.querySelector('#gollum').removeChild(document.querySelector('#the-ring'))
  mordorDiv.removeChild(document.querySelector('#gollum'))
  var shire = body.querySelector('article:first-child')
  var hobbitsArr = document.querySelectorAll('li.hobbit')
  hobbitsArr.forEach(function (hobbit) {
    shire.appendChild(hobbit)
  })
}

thereAndBackAgain()
