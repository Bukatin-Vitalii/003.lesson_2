let operation = prompt('Що ви хочете зробити (add, sub, mult, div) ?')
let first = prompt('Введiть перше число')
let second = prompt('Введiть друге число')

if (operation === 'add') {
	alert(`${first} + ${second} = ${+first + +second}`)
} else if (operation === 'sub') {
	alert(`${first} - ${second} = ${+first - +second}`)
} else if (operation === 'mult') {
	alert(`${first} * ${second} = ${+first * +second}`)
} else if (operation === 'div') {
	alert(`${first} / ${second} = ${+first / +second}`)
}