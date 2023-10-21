let numberLabel = document.getElementById('count-el')

let count = 0

function increment() {
    count += 1
    numberLabel.textContent = count
}

function save() {
    console.log(count)
}