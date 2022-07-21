let dolar_numberJS = document.querySelector('#dolar-number')
let customJS = document.querySelector('#custom')
let nofJS = document.querySelector('#nof-number')
let value1JS = document.querySelector('#value1')
let value2JS = document.querySelector('#value2')
let alertJS = document.querySelector('#alert')

setInterval(kitten, 1000)

function kitten () {
    var tipsJS = document.querySelector('input[name="tips"]:checked')

    if (dolar_numberJS.value > 0 && nofJS.value >= 1 && customJS.value.length != 0) {
        let gorget = dolar_numberJS.value * (Number(customJS.value) / 100)
        let valueTotal = Number(dolar_numberJS.value) + Number(gorget)
        value1JS.innerHTML = `$${(gorget / nofJS.value).toFixed(2)}`
        value2JS.innerHTML = `$${(valueTotal / nofJS.value).toFixed(2)}`
        console.log(customJS)
    } else {
        if (dolar_numberJS.value > 0 && nofJS.value >= 1 && tipsJS.value > 0) {
            let gorget = dolar_numberJS.value * tipsJS.value
            let valueTotal = Number(dolar_numberJS.value) + Number(gorget)
            value1JS.innerHTML = `$${(gorget / nofJS.value).toFixed(2)}`
            value2JS.innerHTML = `$${(valueTotal / nofJS.value).toFixed(2)}`
        }
    }
}



function reset () {
    var tipsJS = document.querySelector('input[name="tips"]:checked')
    dolar_numberJS.value = null
    customJS.value = null
    nofJS.value = null
    value1JS.innerHTML = `$0.00` 
    value2JS.innerHTML = `$0.00`
    tipsJS.checked = false
}





