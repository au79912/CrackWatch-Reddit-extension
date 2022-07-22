const crackBtn = document.getElementById('sred-btn')
const fitBtn = document.getElementById("sfit-btn")
const logBtn = document.getElementById("log-btn")
const inputEl = document.getElementById("input-el")
const pEl = document.getElementById("p2-el")

crackBtn.addEventListener('click', function () {
	let redsearch = inputEl.value
	fetch(`https://www.reddit.com/r/crackwatch/search.json?q=${redsearch}&restrict_sr=on&sort=relevance&t=all&limit=100`)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			if (data.data.children.length === 0) {
				console.log("No results found")
				//insert NaN.png to pEl here
				pEl.innerHTML = `<img src="NaN.png" alt="No results found">`
			}
			else
			{
				console.log("Results found")
				pEl.innerHTML = `<img src="found.png" alt="Results found">`
			}
		})
})