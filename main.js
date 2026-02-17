//COMENTAR ESTE BLOQUE PARA REVISAR LA FUNCIONALIDAD EN HTML

function celsiusFahrenheit(tempC) {
  return (tempC * 9) / 5 + 32;
}

function celsiusKelvin(tempC) {
  return tempC + 273.15;
}

function isValidTemp(tempC) {
  const x = Number(tempC);
  return Number.isFinite(x);
}

function tempCalc() {
  while (true) {
    const tempC = prompt("Ingrese la temperatura en grados Celsius: ");

    if (isValidTemp(tempC)) {
      const x = Number(tempC);
      alert(
        `La temperatura en grados Fahrenheit es de: ${celsiusFahrenheit(x).toFixed(2)}`,
      );
      alert(
        `La temperatura en grados Kelvin es de: ${celsiusKelvin(x).toFixed(2)}`,
      );
      break;
    } else {
      alert("Ingrese un número válido para la temperatura.");
    }
  }
}

tempCalc();

// DESCOMENTAR ESTE BLOQUE PARA REVISAR LA FUNCIONALIDAD EN HTML
/*
const celsius = document.getElementById("celsius");
const error = document.getElementById("error");
const results = document.getElementById("results");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function celsiusFahrenheit(tempC) {
  return (tempC * 9) / 5 + 32;
}

function celsiusKelvin(tempC) {
  return tempC + 273.15;
}

function isValidTemp(tempC) {
  const num = Number(tempC);
  return Number.isFinite(num);
}

function validateAndConvert() {
  const value = celsius.value.trim();
  if (value === "") {
    celsius.classList.remove("error");
    error.classList.remove("show");
    results.classList.remove("show");
    return;
  }

  if (isValidTemp(value)) {
    const tempC = Number(value);

    celsius.classList.remove("error");
    error.classList.remove("show");

    const tempF = celsiusFahrenheit(tempC);
    const tempK = celsiusKelvin(tempC);

    fahrenheit.textContent = tempF.toFixed(2) + " °F";
    kelvin.textContent = tempK.toFixed(2) + " K";

    results.classList.add("show");
  } else {
    celsius.classList.add("error");
    error.classList.add("show");
    results.classList.remove("show");
  }
}

celsius.addEventListener("input", validateAndConvert);
*/
