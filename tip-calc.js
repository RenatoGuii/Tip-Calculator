let dolar_numberJS = document.querySelector('#dolar-Number')
let customJS = document.querySelector('#custom')
let nofJS = document.querySelector('#nof-number')
let value1JS = document.querySelector('#value1')
let value2JS = document.querySelector('#value2')
let resetJS = document.querySelector('#reset')
let alertJS = document.querySelector('#alert')

function kitten () {
    var tipsJS = document.querySelector('input[name="feedback"]:checked')

    if (dolar_numberJS.value >= 1 && nofJS.value >= 1 && tipsJS.value != null) {
        let valueTotal = number(dolar_numberJS) + (number(dolar_numberJS).value * number(tipsJS).value)

        let gorget = number(dolar_numberJS) * number(tipsJS).value

        number(value1JS).value.innerHTML = `${gorget / number(nofJS).value}`
        number(value2JS).value.innerHTML = `${valueTotal / number(nofJS).value}`
    } else if (dolar_numberJS.value >= 1 && nofJS.value >= 1 &&customJS.value > 0) {
        let valueTotal = number(dolar_numberJS) + (number(dolar_numberJS).value * number(tipsJS).value)

        let gorget = number(dolar_numberJS) * number(tipsJS).value

        number(value1JS).value.innerHTML = `${gorget / number(nofJS).value}`
        number(value2JS).value.innerHTML = `${valueTotal / number(nofJS).value}`
    } else {
        return ``
    }
}

setInterval (kitten, 1000);

function alert () {

    if (nofJS.value < 1) {
        alertJS.innerHTML = `Can't be zero`
        nof_inputJS = document.querySelector('.NOF-input')
        nof_inputJS.style.border = `2 solid rgba(255, 0, 0, 0.611)`
    } else {
        return ``
    }
}

setInterval (alert, 1000) 