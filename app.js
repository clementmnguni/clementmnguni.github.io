document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'puppy',
        img: 'images/puppy.jpg'
      },
      /*{
        name: 'dog',
        img: 'images/dog.jpg'
      },
      {
        name: 'penguins',
        img: 'images/penguins.jpg'
      },*/
      {
        name: 'frog',
        img: 'images/frog.jpg'
      },
      {
        name: 'horse',
        img: 'images/horse.jpg'
      },
      {
        name: 'puppy',
        img: 'images/puppy.jpg'
      },
      /*{
        name: 'dog',
        img: 'images/dog.jpg'
      },
      {
        name: 'penguins',
        img: 'images/penguins.jpg'
      },*/
      {
        name: 'frog',
        img: 'images/frog.jpg'
      },
      {
        name: 'horse',
        img: 'images/horse.jpg'
      },
      {
        name: 'lamb',
        img: 'images/lamb.jpg'
      },
      /*{
        name: 'snake',
        img: 'images/snake.jpg'
      },*/
      {
        name: 'lamb',
        img: 'images/lamb.jpg'
      },
      /*{
        name: 'snake',
        img: 'images/snake.jpg'
      },*/
      {
        name: 'lion',
        img: 'images/lion.jpg'
      },
      {
        name: 'lion',
        img: 'images/lion.jpg'
      },
      {
        name: 'bird',
        img: 'images/bird.jpg'
      },
      {
        name: 'bird',
        img: 'images/bird.jpg'
      },

      {
        name: 'cat',
        img: 'images/cat.jpg'
      },
      {
        name: 'chicken',
        img: 'images/chicken.jpg'
      },
      {
        name: 'elephant',
        img: 'images/elephant.jpg'
      },
      {
        name: 'panda',
        img: 'images/panda.jpg'
      },
      {
        name: 'zebra',
        img: 'images/zebra.jpg'
      },
      {
        name: 'pig',
        img: 'images/pig.jpg'
      },
      {
        name: 'cat',
        img: 'images/cat.jpg'
      },
      {
        name: 'chicken',
        img: 'images/chicken.jpg'
      },
      {
        name: 'elephant',
        img: 'images/elephant.jpg'
      },
      {
        name: 'panda',
        img: 'images/panda.jpg'
      },
      {
        name: 'zebra',
        img: 'images/zebra.jpg'
      },
      {
        name: 'pig',
        img: 'images/pig.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const TimeDisplay = document.querySelector('#TimeLeft')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let cardslost =[]
    let score = 10
    let Time = 30
    let TimeLeft = Time
    


    resultDisplay.textContent = '10'
    TimeDisplay.textContent = TimeLeft
    
    //Timer
    function Timer () { Time -= 1;
    let TimeLeft = Time
    TimeDisplay.textContent = TimeLeft
    if(TimeLeft===0) { 
    clearInterval(Int); 
    if(TimeLeft===0) {
      alert('gameover start a new game')
      resultDisplay.textContent = 'Sorry time ran out try again!'
    } }}
    let Int = setInterval(Timer, 6000)
    

    //restart game
    const element = document.querySelector('#btn')
    element.addEventListener("click",reload)
    function reload() { document.location.reload()}

    ;

    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } 
      else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        cardslost.push(cardsChosen)
        
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = score +((cardsWon.length+1)-cardslost.length)
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations Nkosie! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 800)
      }
    }
  
    createBoard()
  })