addEventListener("load",main)

function main() {
	const form = document.querySelector("form")
	form.onsubmit = (event) => {
		event.preventDefault()
		const nome = event.target.querySelector("input").value
		const ola = document.querySelector("#ola")
		ola.innerText = `Olá, ${nome}`
	}
	console.log("aaaaa")
}

