addEventListener("load",main)

function main() {
	const form = document.querySelector("form")
	form.onsubmit = (event) => {
		event.preventDefault()
		const nome = event.target.querySelector("input").value
		const ola = document.querySelector("#ola")
		ola.innerHTML = `<img src="${nome}" />`
	}
	console.log("aaaaa")
}

