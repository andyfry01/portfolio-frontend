const skillsText = "skills"
const frontendText = "frontend"
const backendText = "backend"



/** Fills target divs with specified content
  @param target {string} target container ID
  @param content {string} the words/content string for the fill content
  @param contentTagType {string} type of tag for fill content (i.e. span, div, p)
  @param fillNum {number} number of iterations for the loop that generates the word spans
*/

// Should generate styles to pass into fillTargetWithContent ...?
const genContentStyle = function(){}

const fillTargetWithContent = function(target, content, contentTagType, fillNum){

  const colors = [
    {orange: 'rgba(255, 107, 53, 0.45)'},
    {tan: 'rgba(251, 242, 192, 0.45)'},
    {blue: 'rgba(63, 124, 172, 0.45)'}
  ]

  // Generates random font size
  const randomFontSize = function(max, min){
    return Math.random() * (max - min + 1) * 0.5 + min + 'em'
  }

  // Picks random color from color array
  const randomColor = function(colors){
    colorsLen = colors.length
    let index = Math.floor(Math.random() * colorsLen)
    return Object.values(colors[index])[0]
  }

  // fills target divs with content text
  let targetDiv = document.getElementById(target)
  for (let i = 0; i < fillNum; i++) {
    let fillWord = document.createElement(contentTagType)
    fillWord.innerHTML = content + " "
    fillWord.className = "ticker"
    fillWord.style.fontSize = randomFontSize(10, 1)
    fillWord.style.color = randomColor(colors)
    targetDiv.appendChild(fillWord)
  }
}

window.onload = function(){
  fillTargetWithContent('targetOne', skillsText, 'span', 400)
  fillTargetWithContent('targetTwo', frontendText, 'span', 400)
  fillTargetWithContent('targetThree', backendText, 'span', 400)
}
