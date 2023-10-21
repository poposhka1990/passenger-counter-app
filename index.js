let numberText = document.getElementById('count-el')
let saveText = document.getElementById('save-el')

let count = 0

function increment() {
    count += 1
    numberText.textContent = count
}

function save() {
    let saveMessage = count + ' - '
    saveText.textContent += saveMessage
    count = 0
    numberText.textContent = count
}