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
	const alert = document.getElementById('alert')
	if (imc < 18.5) {
		alert.innerHTML = `<p>Tiene bajo peso</p>`
	} else if (imc >= 18.5 || imc <= 24.9) {
		alert.innerHTML = `<p>Tiene un peso adecuado</p>`
	} else if (imc > 25.0 || imc <= 29.9) {
		alert.innerHTML = `<p>Tiene sobrepeso</p>`
	} else if (imc == 30.0 || imc <= 34.9) {
		alert.innerHTML = `<p>Tiene obesidad grado 1</p>`
	} else if (imc === 35.0 || imc <= 39.9) {
		alert.innerHTML = `<p>Tiene obesidad grado 2</p>`
	} else {
		alert.innerHTML = `<p>Tiene obesidad grado 3</p>`
	}
}

/* function iniciar() {
	document.getElementById('btnReset').addEventListener('click', clickBtnRemove)
	// btnReset.addEventListener('click', clickBtnRemove)
} */
