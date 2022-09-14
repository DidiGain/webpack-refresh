import axios from "axios"

const generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  axios.get('https://official-joke-api.appspot.com/jokes/random', config).then((res) => {
    document.getElementById('joke__setup').innerHTML = res.data.setup
    document.getElementById('joke__punch').innerHTML = res.data.punchline
  })
}

export default generateJoke