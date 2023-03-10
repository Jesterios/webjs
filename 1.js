const tempCel = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));

function convert(tempFar) {
    return (9 / 5) * tempFar + 32;
}
if (Number.isNaN(tempCel)) {
    alert("Введите корректное число");
} else {
    alert(`Температура в градусах Цельсия: ${tempCel.toFixed(1)},
    Температура в градусах по Фаренгейту: ${convert(tempCel).toFixed(1)}`);