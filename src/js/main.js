const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelector('.nav-items')
const footerYear = document.querySelector('.currentYear')
const closeMenu = document.querySelector('.closemenu')


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleMobileNav = () => {
	navItems.classList.toggle('active')
	document.body.classList.toggle('sticky-body')
}

const closeHamburger = () => {
	navItems.classList.toggle('active')
	document.body.classList.toggle('sticky-body')
	
}

handleCurrentYear()

burgerBtn.addEventListener('click', handleMobileNav)
closeMenu.addEventListener('click', closeHamburger)