function toggleMode(){
const html = document.documentElement
html.classList.toggle("ligth")

const img = document.querySelector('#profile img')

if(html.classList.contains('ligth')){
  img.setAttribute('src', './assets/avatar-light.png')
  img.setAttribute("alt", "foto de maykbriito em lightmode")
} else{
  img.setAttribute("src", "./assets/avatar.png")
img.setAttribute("alt", "foto de maykbriito em blackmode")
}

}