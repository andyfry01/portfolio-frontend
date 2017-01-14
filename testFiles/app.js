const skillsText = "skills"
const frontendText = "frontend"
const backendText = "backend"

const fillTargetWithContent = function(target, content, contentTagType, fillNum){

  // Generates random font size
  const randomFontSize = function(max, min){
    return Math.random() * (max - min + 1) * 0.5 + min + 'em'
  }

  // fills target divs with content text
  let targetDiv = document.getElementById(target)
  for (let i = 0; i < fillNum; i++) {
    let fillWord = document.createElement(contentTagType)
    fillWord.innerHTML = content + " "
    fillWord.style.fontSize = randomFontSize(10, 1)
    targetDiv.appendChild(fillWord)
  }
}

window.onload = function(){
  fillTargetWithContent('target', skillsText, 'span', 200)
  fillTargetWithContent('targetTwo', frontendText, 'span', 200)
}
