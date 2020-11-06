distance = 0
right_distance = 0
def scan_right():
    global distance
    robotbit.servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    distance = right_distance
    basic.show_string("" + str((right_distance)))
    basic.pause(2000)
def straighten_out():
    robotbit.servo(robotbit.Servos.S1, 90)
def scan_left():
    global distance
    left_distance = 0
    robotbit.servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    distance = left_distance
    basic.show_string("" + str((left_distance)))
    basic.pause(2000)

def on_forever():
    global right_distance
    x = 0
    straighten_out()
    right_distance = distance
    basic.show_number(x)
basic.forever(on_forever)

def on_forever2():
    global distance
    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
basic.forever(on_forever2)
