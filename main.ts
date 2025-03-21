let MoistureReading = 0
basic.forever(function () {
    MoistureReading = MoistureReading
    basic.showString("" + Math.round(0) + "%")
    if (Math.round(MoistureReading) < 50) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(2000)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
