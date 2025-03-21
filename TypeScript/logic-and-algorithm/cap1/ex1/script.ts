const frm = document.querySelector("form")
const outName = document.querySelector("h3")
const outDuration = document.querySelector("h4")

if (frm && outName && outDuration) {
	frm.addEventListener("submit", (e: SubmitEvent) => {
		e.preventDefault();

		const { inTitle, inDuration } = frm

		const title = (inTitle as HTMLInputElement).value
		const duration = Number((inDuration as HTMLInputElement).value)


		const hours = Math.floor(duration / 60)
		const minutes = duration % 60

		outName.textContent = title
		outDuration.textContent = `${hours}h and ${minutes}min`
	})
} else {
	console.error("form or output elements are missing.")
}

