iniciar()

function iniciar() {
	let btnCalcular = document.getElementById('btnCalcular')
	btnCalcular.addEventListener('click', clickBtnCalcular)
}

function clickBtnCalcular() {
	let pesoTxt = document.getElementById('pesoTxt')
	let peso = pesoTxt.value
	let alturaTxt = document.getElementById('alturaTxt')
	let altura = alturaTxt.value
	let imc = peso / (altura * altura)
	const pintar = document.getElementById('txtPintar')
	pintar.innerHTML = `<span>Su peso es: ${imc}</span>` + Math.round(imc)
	// pintar = document.write('Su IMC es: ' + Math.round(imc))
}

function clickBtnRemove() {
	let btnReset = document.getElementById('btnReset')
	btnReset.addEventListener('click', clickBtnRemove)
}
