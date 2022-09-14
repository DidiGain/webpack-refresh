import generateJoke from './generateJoke'
import './styles/main.scss'
import laughingEmoji from './assets/laughing.svg'

const laughingEmojiImage = document.getElementById('laughImg')
laughingEmojiImage.src = laughingEmoji

console.log(generateJoke());