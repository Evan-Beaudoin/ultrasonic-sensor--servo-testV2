let right_distance = 0
let distance = 0
let left_distance = 0
function scan_right () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    for (let index = 0; index < 1; index++) {
        right_distance = distance
        basic.showNumber(right_distance)
    }
    basic.pause(1000)
}
function straighten_out () {
    robotbit.Servo(robotbit.Servos.S1, 90)
}
function scan_left () {
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    for (let index = 0; index < 1; index++) {
        left_distance = distance
        basic.showNumber(left_distance)
    }
    basic.pause(1000)
}
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    straighten_out()
    basic.pause(1000)
    scan_right()
    basic.pause(1000)
    scan_left()
    basic.pause(1000)
    if (left_distance > right_distance) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
})
