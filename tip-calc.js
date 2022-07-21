let dolar_numberJS = document.querySelector('#dolar-number')
let customJS = document.querySelector('#custom')
let nofJS = document.querySelector('#nof-number')
let value1JS = document.querySelector('#value1')
let value2JS = document.querySelector('#value2')

function kitten () {
    let tipsJS = document.querySelector('input[name="tips"]:checked')

    if (dolar_numberJS.value > 0 && nofJS.value >= 1 && tipsJS.value > 0) {
        let gorget = dolar_numberJS.value * tipsJS.value
        let valueTotal = dolar_numberJS.value + gorget
        value1JS.innerHTML = `$${gorget / nofJS.value}`
        value2JS.innerHTML = `$${valueTotal / nofJS.value}`
        console.log (valueTotal)
    } else if (dolar_numberJS.value > 0 && nofJS.value >= 1 && customJS.value >= 0) {
        let gorget = dolar_numberJS.value * (customJS.value / 100)
        let valueTotal = number(dolar_numberJS.value) + number(gorget)
        value1JS.innerHTML = `$${gorget / (nofJS)}`
        value2JS.innerHTML = `$${valueTotal / (nofJS)}`
    }
    
}

function reset () {
    kitten ()
}

//setInterval(kitten, 1000)