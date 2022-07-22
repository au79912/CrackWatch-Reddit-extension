const crackBtn = document.getElementById('sred-btn')
const fitBtn = document.getElementById("sfit-btn")
const dodiBtn = document.getElementById("sdodi-btn")
const logBtn = document.getElementById("log-btn")
const logEl = document.getElementById("log-el")
const inputEl = document.getElementById("input-el")
const p1El = document.getElementById("p1-el")
const p2El = document.getElementById("p2-el")
let links = []

crackBtn.addEventListener('click', redditSearch)
inputEl.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) {
		redditSearch()
	}
})
fitBtn.addEventListener('click', fitSearch)
dodiBtn.addEventListener('click', dodiSearch)
logBtn.addEventListener('click', renderlinks)

function redditSearch() {
	let redsearch = inputEl.value
	redsearch = redsearch.replace(/\s/g, "+")
	// searchItem = redsearch
	fetch(`https://www.reddit.com/r/crackwatch/search.json?q=${redsearch}&restrict_sr=on&sort=relevance&t=all&limit=100`)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			if (data.data.children.length === 0) {
				// console.log("No results found")
				p1El.textContent = "No results found"
				p2El.innerHTML = `<img src="NaN.png" alt="No results found">`
			}

			else {
				// console.log("Results found")
				p1El.textContent = "Results found"
				p2El.innerHTML = `<img src="found.png" alt="Results found">`
			}
		})

		
}

function fitSearch() {
	let url = "https://fitgirl-repacks.site/?s=" + inputEl.value
	url = url.replace(/\s/g, "+")
	// console.log(url)
	window.open(url, '_blank').focus()
}

function dodiSearch() {
	// console.log("dodiSearch")
	let url = "https://dodi-repacks.site/?s=" + inputEl.value
	url = url.replace(/\s/g, "+")
	// console.log(url)
	window.open(url, '_blank').focus()
}

function renderlinks() {
	let name = inputEl.value
	name = name.replace(/\s/g, "+")
	let link = `https://www.reddit.com/r/CrackWatch/search/?q=${name}%2020&restrict_sr=1&sr_nsfw=`
	// print the link in logEl and open it in a new tab
	logEl.innerHTML = `<a target="_blank" href="${link}">${link}</a>`
}