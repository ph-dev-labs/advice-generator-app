var dice = document.querySelector('.dice');
var speaker = document.querySelector(".advice-id");
var advice = document.querySelector('.advice-text');

Init()

async function getResponse() {
  try {
    let response = await fetch("https://type.fit/api/quotes")
    let data = await response.json();
    dice.addEventListener("click", () => {
    let randomGen = Math.floor(Math.random() * data.length); // generate random digits for generating random advice with authors
    let text = data[randomGen].text;
    let author = data[randomGen].author;
    advice.textContent = text;
    speaker.textContent = author;
    })

  } catch (error) {
    console.log(error)
  }
}

getResponse()





function Init () {
  speaker.textContent = '';
  advice.textContent = ''
}