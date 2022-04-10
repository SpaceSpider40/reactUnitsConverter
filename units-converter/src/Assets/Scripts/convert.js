export function convert(from, to, unit) {
    switch (from) {
        case 'c':
            if (to === 'f') return ((unit * 1.8) + 32).toFixed(2)
            break;
        case 'f':
            if (to === 'c') return ((unit - 32) / 1.8).toFixed(2)
            break;
        case 'mm':
            if (to === 'cm') return (unit / 10)
            if (to === 'm') return (unit / 1000)
            if (to === 'km') return (unit / 1000000)
            if (to === 'in') return (unit / 25.4)
            if (to === 'ft') return (unit / 304.8)
            if (to === 'yd') return (unit * 0.0010936133)
            if (to === 'mile') return (unit / 1609344)
            break;
        case 'cm':
            if (to === 'mm') return (unit * 10)
            if (to === 'm') return (unit / 100)
            if (to === 'km') return (unit / 100000)
            if (to === 'in') return (unit * 0.393700787)
            if (to === 'ft') return (unit * 0.0328084)
            if (to === 'yd') return (unit * 0.010936133)
            if (to === 'mile') return (unit / 160934.4)
            break;
        case 'm':
            if (to === 'mm') return (unit * 1000)
            if (to === 'cm') return (unit * 100)
            if (to === 'km') return (unit / 1000)
            if (to === 'in') return (unit * 39.3700787)
            if (to === 'ft') return (unit * 0.3048)
            if (to === 'yd') return (unit * 0.9144)
            if (to === 'mile') return (unit * 0.000621371192)
            break;
        case 'km':
            if (to === 'mm') return (unit * 1000000)
            if (to === 'cm') return (unit * 100000)
            if (to === 'm') return (unit * 1000)
            if (to === 'in') return (unit * 39370.0787)
            if (to === 'ft') return (unit * 3280.84)
            if (to === 'yd') return (unit * 10936.13298)
            if (to === 'mile') return (unit * 0.6213711)
            break;
        case 'in':
            if (to === 'mm') return (unit * 25.4)
            if (to === 'cm') return (unit * 2.54)
            if (to === 'm') return (unit * 0.0254)
            if (to === 'km') return (unit / 39370.078740157)
            if (to === 'ft') return (unit * 0.0833333333)
            if (to === 'yd') return (unit * 0.0277777778)
            if (to === 'mile') return (unit / 63360)
            break;
        case 'ft':
            if (to === 'mm') return (unit * 304.8)
            if (to === 'cm') return (unit * 30.48)
            if (to === 'm') return (unit * 0.3048)
            if (to === 'km') return (unit * 0.0003048)
            if (to === 'in') return (unit * 12)
            if (to === 'yd') return (unit * 0.333333333)
            if (to === 'mile') return (unit * 0.000189393939)
            break;
        case 'yd':
            if (to === 'mm') return (unit * 914.4)
            if (to === 'cm') return (unit * 91.44)
            if (to === 'm') return (unit * 0.9144)
            if (to === 'km') return (unit * 0.0009144)
            if (to === 'in') return (unit * 36)
            if (to === 'ft') return (unit * 3)
            if (to === 'mile') return (unit * 0.000568181818)
            break;
        case 'mile':
            if (to === 'mm') return (unit * 1609344)
            if (to === 'cm') return (unit * 160934.4)
            if (to === 'm') return (unit * 1609.344)
            if (to === 'km') return (unit * 1.609344)
            if (to === 'in') return (unit * 63360)
            if (to === 'ft') return (unit * 5280)
            if (to === 'yd') return (unit * 1760)
            break;
        //SQUARES
        case 'cm2':
            if (to === 'm2') return (unit * 0.0001)
            if (to === 'ha') return (unit / 100000000)
            if (to === 'km2') return (unit * 0.00000000001)
            if (to === 'in2') return (unit * 0.15500031)
            if (to === 'ft2') return (unit * 0.00107639104)
            if (to === 'yd2') return (unit * 0.000119599005)
            if (to === 'mile2') return (unit / 25900000000)
            break;
        case 'm2':
            if (to === 'cm2') return (unit * 10000)
            if (to === 'ha') return (unit * 0.0001)
            if (to === 'km2') return (unit / 1000000)
            if (to === 'in2') return (unit * 1550.0031)
            if (to === 'ft2') return (unit * 10.7639104)
            if (to === 'yd2') return (unit * 1.19599005)
            if (to === 'mile2') return (unit / 2590000)
            break;
        case "ha":
            if (to === 'cm2') return (unit * 100000000)
            if (to === 'm2') return (unit * 10000)
            if (to === 'km2') return (unit * 0.01)
            if (to === 'in2') return (unit * 15500031)
            if (to === 'ft2') return (unit * 107639.104)
            if (to === 'yd2') return (unit * 11959.9005)
            if (to === 'mile2') return (unit * 0.0038610)
            break;
        case 'km2':
            if (to === 'cm2') return (unit * 10000000000)
            if (to === 'm2') return (unit * 1000000)
            if (to === 'ha') return (unit * 100)
            if (to === 'in2') return (unit * 1550003100)
            if (to === 'ft2') return (unit * 10763910.4)
            if (to === 'yd2') return (unit * 1195990.05)
            if (to === 'mile2') return (unit * 0.38610038610039)
            break;
        case 'in2':
            if (to === 'cm2') return (unit * 6.4516)
            if (to === 'm2') return (unit * 0.00064516)
            if (to === 'ha') return (unit / 15500032.24005)
            if (to === 'km2') return (unit * 0.00000000064516)
            if (to === 'ft2') return (unit * 0.00694444444)
            if (to === 'yd2') return (unit * 0.000771604938)
            if (to === 'mile2') return (unit / 4014489600)
            break;
        case 'ft2':
            if (to === 'cm2') return (unit * 929.0304)
            if (to === 'm2') return (unit * 0.09290304)
            if (to === 'ha') return (unit / 107639.10417)
            if (to === 'km2') return (unit * 0.00000009290304)
            if (to === 'in2') return (unit * 144)
            if (to === 'yd2') return (unit * 0.111111111)
            if (to === 'mile2') return (unit / 27878400)
            break;
        case 'yd2':
            if (to === 'cm2') return (unit * 8361.2736)
            if (to === 'm2') return (unit * 0.83612736)
            if (to === 'ha') return (unit / 11959.900463)
            if (to === 'km2') return (unit / 1195990.046296)
            if (to === 'in2') return (unit * 1296)
            if (to === 'ft2') return (unit * 9)
            if (to === 'mile2') return (unit / 3097600)
            break;
        case 'mile2':
            if (to === 'cm2') return (unit * 25900000000)
            if (to === 'm2') return (unit * 2590000)
            if (to === 'ha') return (unit * 259)
            if (to === 'km2') return (unit * 2.59)
            if (to === 'in2') return (unit * 4014259144.4513)
            if (to === 'ft2') return (unit * 27879440.258342)
            if (to === 'yd2') return (unit * 3097614.0717312)
            break;
        //CUBIC
        case 'cm3':
            if (to === 'dm3') return (unit * 0.001)
            if (to === 'm3') return (unit * 0.000001)
            if (to === 'l') return (unit * 0.001)
            if (to === 'in3') return (unit * 0.0610237441)
            if (to === 'ft3') return (unit * 0.00003531466672)
            if (to === 'pt') return (unit * 0.00211337642)
            if (to === 'gallon') return (unit * 0.000264172052)
            break;
        case 'dm3':
            if (to === 'cm3') return (unit * 1000)
            if (to === 'm3') return (unit * 0.001)
            if (to === 'l') return (unit)
            if (to === 'in3') return (unit * 61.02374)
            if (to === 'ft3') return (unit * 0.03531)
            if (to === 'pt') return (unit * 0.5678117676)
            if (to === 'gallon') return (unit * 0.26417)
            break;
        case "m3":
            if (to === 'cm3') return (unit * 1000000)
            if (to === 'dm3') return (unit * 1000)
            if (to === 'l') return (unit * 1000)
            if (to === 'in3') return (unit * 61023.7441)
            if (to === 'ft3') return (unit * 35.3146667)
            if (to === 'pt') return (unit * 2113.37642)
            if (to === 'gallon') return (unit * 264.172052)
            break;
        case 'l':
            if (to === 'cm3') return (unit * 1000)
            if (to === 'dm3') return (unit)
            if (to === 'm3') return (unit * 0.001)
            if (to === 'in3') return (unit * 61.0237441)
            if (to === 'ft3') return (unit * 0.0353146667)
            if (to === 'pt') return (unit * 2.11337642)
            if (to === 'gallon') return (unit * 0.264172052)
            break;
        case 'in3':
            if (to === 'cm3') return (unit * 16.387064)
            if (to === 'dm3') return (unit * 0.016387064)
            if (to === 'm3') return (unit * 0.000016387064)
            if (to === 'l') return (unit * 0.016387064)
            if (to === 'ft3') return (unit * 0.000578703704)
            if (to === 'pt') return (unit * 0.0346320346)
            if (to === 'gallon') return (unit * 0.00432900433)
            break;
        case 'ft3':
            if (to === 'cm3') return (unit * 28316.8466)
            if (to === 'dm3') return (unit * 28.31684660923)
            if (to === 'm3') return (unit * 0.0283168466)
            if (to === 'l') return (unit * 28.3168466)
            if (to === 'in3') return (unit * 1728)
            if (to === 'pt') return (unit * 59.8441558)
            if (to === 'gallon') return (unit * 7.48051948)
            break;
        case 'pt':
            if (to === 'cm3') return (unit * 473.176473)
            if (to === 'dm3') return (unit * 0.5678117676)
            if (to === 'm3') return (unit * 0.000473176473)
            if (to === 'l') return (unit * 0.473176473)
            if (to === 'in3') return (unit * 28.87500)
            if (to === 'ft3') return (unit * 0.0167100694)
            if (to === 'gallon') return (unit * 0.125)
            break;
        case 'gallon':
            if (to === 'cm3') return (unit * 3785.41178)
            if (to === 'dm3') return (unit * 3.78541)
            if (to === 'm3') return (unit * 0.00378541178)
            if (to === 'l') return (unit * 3.78541178)
            if (to === 'in3') return (unit * 231)
            if (to === 'ft3') return (unit * 0.133680556)
            if (to === 'pt') return (unit * 8)
            break;
        //MASS
        case 'mg':
            if (to === 'g') return (unit * 0.001)
            if (to === 'kg') return (unit * 0.000001)
            if (to === 't') return (unit *907184740)
            if (to === 'oz') return (unit / 28349.523125)
            if (to === 'lb') return (unit /453592.33)
            if (to === 'stone') return (unit * 0.00000015747)
            if (to === 'hwt') return (unit /45359237)
            break
        case 'g':
            if (to === 'mg') return (unit *1000)
            if (to === 'kg') return (unit *0.001)
            if (to === 't') return (unit *1000000)
            if (to === 'oz') return (unit *0.0352739619)
            if (to === 'lb') return (unit *0.00220462262)
            if (to === 'stone') return (unit *0.000157473044 )
            if (to === 'hwt') return (unit *50802.34544)
            break
        case 'kg':
            if (to === 'mg') return (unit *1000000)
            if (to === 'g') return (unit *1000)
            if (to === 't') return (unit *0.001)
            if (to === 'oz') return (unit *35.2739619)
            if (to === 'lb') return (unit *2.20462262)
            if (to === 'stone') return (unit *0.157473044)
            if (to === 'hwt') return (unit *0.0196841306)
            break
        case 't':
            if (to === 'mg') return (unit *1000000000)
            if (to === 'g') return (unit *1000000)
            if (to === 'kg') return (unit *1000)
            if (to === 'oz') return (unit *35273.9619)
            if (to === 'lb') return (unit *2204.62262)
            if (to === 'stone') return (unit *157.473044)
            if (to === 'hwt') return (unit *19.684130552221)
            break
        case 'oz':
            if (to === 'mg') return (unit *28349.5231)
            if (to === 'g') return (unit *28.3495231)
            if (to === 'kg') return (unit *0.0283495231)
            if (to === 't') return (unit *0.00003125)
            if (to === 'lb') return (unit *0.0625)
            if (to === 'stone') return (unit *0.00446428571)
            if (to === 'hwt') return (unit *0.000625)
            break
        case 'lb':
            if (to === 'mg') return (unit *453592.37)
            if (to === 'g') return (unit *453.59237)
            if (to === 'kg') return (unit *0.45359237)
            if (to === 't') return (unit * 0.45359237)
            if (to === 'oz') return (unit * 16)
            if (to === 'stone') return (unit *0.0714285714)
            if (to === 'hwt') return (unit *0.01)
            break
        case 'stone':
            if (to === 'mg') return (unit *6350293.18)
            if (to === 'g') return (unit *6350.29318)
            if (to === 'kg') return (unit *6.35029318)
            if (to === 't') return (unit *0.00635029318)
            if (to === 'oz') return (unit *224)
            if (to === 'lb') return (unit *14)
            if (to === 'hwt') return (unit *0.125)
            break
        case 'hwt':
            if (to === 'mg') return (unit *50000000)
            if (to === 'g') return (unit *45359.237)
            if (to === 'kg') return (unit *45.36)
            if (to === 't') return (unit *20)
            if (to === 'oz') return (unit *0.000625)
            if (to === 'lb') return (unit *100)
            if (to === 'stone') return (unit *8)
            break
    }
}