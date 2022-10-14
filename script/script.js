const secContact = document.querySelector('.contact-sec')
const btn1Contact = document.querySelector('.contact')

const secAbout = document.querySelector('.about-me')
const btn2About = document.querySelector('.about')

const secProject = document.querySelector('.main-projects')
const btn3Project = document.querySelector('.projects')

const btn4UpTo = document.querySelector('.btnUp')

const oneText = document.querySelector('.star-wars')
const twoText = document.querySelector('.myTxt')

function outOneText() {
	oneText.classList.add('myTxt')
}
setTimeout(outOneText, 2000)

function inTwoText() {
	twoText.classList.remove('myTxt')
}
setTimeout(inTwoText, 3000)
// secP = secProject.offsetTop
// console.log(secP)
// secA = secAbout.offsetTop
// console.log(secA)
// sec = secContact.offsetTop
// console.log(sec)

function goToAbout(e) {
	window.scrollTo(0, 1852)
}

function goToContact(e) {
	window.scrollTo(0, 2865)
}
function goToProject(e) {
	window.scrollTo(0, 955)
}
function goToTop(e) {
	window.scrollTo(0, 0)
}
btn1Contact.addEventListener('click', goToContact)
btn2About.addEventListener('click', goToAbout)
btn3Project.addEventListener('click', goToProject)
btn4UpTo.addEventListener('click', goToTop)
