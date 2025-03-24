const form = document.querySelector("form") as HTMLFormElement;
const inNumber = document.querySelector("#inNumber") as HTMLInputElement;
const outNumber = document.querySelector("#outNumber") as HTMLHeadingElement;

//Desafio 1
function calcDouble(n: number): number {
	return n * 2
}

function message(): void {
	console.log("Bem-vindo(a) ao mundo do TypeScript!")
}

form?.addEventListener("submit", (event: Event) => {
	event.preventDefault();

	const number = Number(inNumber.value)
	const calc = calcDouble(number)
	message()

	outNumber.textContent = `O dobro de ${number} e ${calc}`;
})


