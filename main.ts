let T1 = 0
let T2 = 0
let T3 = 0
let Temperatura = 0
function Temperatura_Promedio () {
    T1 = input.temperature()
    basic.pause(5000)
    T2 = input.temperature()
    basic.pause(5000)
    T3 = input.temperature()
    return (T1 + T2 + T3) / 3
}
basic.forever(function () {
    Temperatura = Temperatura_Promedio()
    if (Temperatura > 25) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(500)
    basic.showNumber(Temperatura)
})
