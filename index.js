const crackBtn = document.getElementById('sred-btn')
const fitBtn = document.getElementById("sfit-btn")
const logBtn = document.getElementById("log-btn")
const inputEl = document.getElementById("input-el")
const p1El = document.getElementById("p1-el")
const p2El = document.getElementById("p2-el")

crackBtn.addEventListener('click', redditSearch)
inputEl.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		redditSearch()
	}
})

function redditSearch() {
	let redsearch = inputEl.value
	redsearch = redsearch.replace(/\s/g, "+")
	fetch(`https://www.reddit.com/r/crackwatch/search.json?q=${redsearch}&restrict_sr=on&sort=relevance&t=all&limit=100`)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			if (data.data.children.length === 0) {
				// console.log("No results found")
				p1El.textContent = "No results found 😔"
				p2El.innerHTML = `<img src="NaN.png" alt="No results found">`
			}

			else {
				// console.log("Results found")
				p1El.textContent = "Results found 🏴‍☠️☠"
				p2El.innerHTML = `<img src="found.png" alt="Results found">`
			}
		})
}

