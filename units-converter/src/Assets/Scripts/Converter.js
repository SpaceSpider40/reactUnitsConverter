import React from "react";
import style from "../Styles/Style.module.css"
import { convert } from "./convert";

export default class Converter extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            styles: [style.converterContentHidden, style.converterContentHidden, style.converterContentHidden, style.converterContentHidden, style.converterContentHidden],
            lastModyfied: ""
        }
    }

    componentDidUpdate() {

    }

    changeStyle(i) {
        if (this.state.styles[i] === style.converterContent) {
            let styles = [...this.state.styles];
            styles[i] = style.converterContentHidden
            this.setState({ styles: styles });
        } else {
            let styles = [...this.state.styles];
            styles[i] = style.converterContent
            this.setState({ styles: styles });
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });

        switch (event.target.name) {
            //TEMPERATURE
            case "c":
                this.setState({ f: convert('c', 'f', event.target.value) })
                break;
            case "f":
                this.setState({ c: convert('f', 'c', event.target.value) })
                break;
            //LENGTH
            case "mm":
                this.cm = convert('mm', 'cm', event.target.value)
                this.m = convert('mm', 'm', event.target.value)
                this.km = convert('mm', 'km', event.target.value)
                this.inch = convert('mm', 'in', event.target.value)
                this.foot = convert('mm', 'ft', event.target.value)
                this.yard = convert('mm', 'yd', event.target.value)
                this.mile = convert('mm', 'mile', event.target.value)
                this.setState({
                    cm: this.cm,
                    m: this.m,
                    km: this.km,
                    in: this.inch,
                    ft: this.foot,
                    yd: this.yard,
                    mile: this.mile
                })
                break;
            case "cm":
                this.mm = convert('cm', 'mm', event.target.value)
                this.m = convert('cm', 'm', event.target.value)
                this.km = convert('cm', 'km', event.target.value)
                this.inch = convert('cm', 'in', event.target.value)
                this.foot = convert('cm', 'ft', event.target.value)
                this.yard = convert('cm', 'yd', event.target.value)
                this.mile = convert('cm', 'mile', event.target.value)
                this.setState({
                    mm: this.mm,
                    m: this.m,
                    km: this.km,
                    in: this.inch,
                    ft: this.foot,
                    yd: this.yard,
                    mile: this.mile
                })
                break;
            case "m":
                this.mm = convert('m', 'mm', event.target.value)
                this.cm = convert('m', 'cm', event.target.value)
                this.km = convert('m', 'km', event.target.value)
                this.inch = convert('m', 'in', event.target.value)
                this.foot = convert('m', 'ft', event.target.value)
                this.yard = convert('m', 'yd', event.target.value)
                this.mile = convert('m', 'mile', event.target.value)
                this.setState({
                    cm: this.cm,
                    mm: this.mm,
                    km: this.km,
                    in: this.inch,
                    ft: this.foot,
                    yd: this.yard,
                    mile: this.mile
                })
                break;
            case "km":
                this.mm = convert('km', 'mm', event.target.value)
                this.m = convert('km', 'm', event.target.value)
                this.cm = convert('km', 'cm', event.target.value)
                this.inch = convert('km', 'in', event.target.value)
                this.foot = convert('km', 'ft', event.target.value)
                this.yard = convert('km', 'yd', event.target.value)
                this.mile = convert('km', 'mile', event.target.value)
                this.setState({
                    mm: this.mm,
                    m: this.m,
                    cm: this.cm,
                    in: this.inch,
                    ft: this.foot,
                    yd: this.yard,
                    mile: this.mile
                })
                break;
            case "in":
                this.mm = convert('in', 'mm', event.target.value)
                this.m = convert('in', 'm', event.target.value)
                this.km = convert('in', 'km', event.target.value)
                this.cm = convert('in', 'cm', event.target.value)
                this.foot = convert('in', 'ft', event.target.value)
                this.yard = convert('in', 'yd', event.target.value)
                this.mile = convert('in', 'mile', event.target.value)
                this.setState({
                    mm: this.mm,
                    m: this.m,
                    km: this.km,
                    cm: this.cm,
                    ft: this.foot,
                    yd: this.yard,
                    mile: this.mile
                })
                break;
            case "ft":
                this.mm = convert('ft', 'mm', event.target.value)
                this.m = convert('ft', 'm', event.target.value)
                this.km = convert('ft', 'km', event.target.value)
                this.inch = convert('ft', 'in', event.target.value)
                this.cm = convert('ft', 'cm', event.target.value)
                this.yard = convert('ft', 'yd', event.target.value)
                this.mile = convert('ft', 'mile', event.target.value)
                this.setState({
                    mm: this.mm,
                    m: this.m,
                    km: this.km,
                    in: this.inch,
                    cm: this.cm,
                    yd: this.yard,
                    mile: this.mile
                })
                break;
            case "yd":
                this.mm = convert('yd', 'mm', event.target.value)
                this.m = convert('yd', 'm', event.target.value)
                this.km = convert('yd', 'km', event.target.value)
                this.inch = convert('yd', 'in', event.target.value)
                this.foot = convert('yd', 'ft', event.target.value)
                this.cm = convert('yd', 'cm', event.target.value)
                this.mile = convert('yd', 'mile', event.target.value)
                this.setState({
                    mm: this.mm,
                    m: this.m,
                    km: this.km,
                    in: this.inch,
                    ft: this.foot,
                    cm: this.cm,
                    mile: this.mile
                })
                break;
            case "mile":
                this.mm = convert('mile', 'mm', event.target.value)
                this.m = convert('mile', 'm', event.target.value)
                this.km = convert('mile', 'km', event.target.value)
                this.inch = convert('mile', 'in', event.target.value)
                this.foot = convert('mile', 'ft', event.target.value)
                this.yard = convert('mile', 'yd', event.target.value)
                this.cm = convert('mile', 'cm', event.target.value)
                this.setState({
                    mm: this.mm,
                    m: this.m,
                    km: this.km,
                    in: this.inch,
                    ft: this.foot,
                    yd: this.yard,
                    cm: this.cm
                })
                break;
            //SQUARE
            case "cm2":
                this.m2 = convert('cm2', 'm2', event.target.value)
                this.ha = convert('cm2', 'ha', event.target.value)
                this.km2 = convert('cm2', 'km2', event.target.value)
                this.in2 = convert('cm2', 'in2', event.target.value)
                this.ft2 = convert('cm2', 'ft2', event.target.value)
                this.yd2 = convert('cm2', 'yd2', event.target.value)
                this.mile2 = convert('cm2', 'mile2', event.target.value)
                this.setState({
                    m2: this.m2,
                    ha: this.ha,
                    km2: this.km2,
                    in2: this.in2,
                    ft2: this.ft2,
                    yd2: this.yd2,
                    mile2: this.mile2
                })
                break
            case "m2":
                this.cm2 = convert('m2', 'cm2', event.target.value)
                this.ha = convert('m2', 'ha', event.target.value)
                this.km2 = convert('m2', 'km2', event.target.value)
                this.in2 = convert('m2', 'in2', event.target.value)
                this.ft2 = convert('m2', 'ft2', event.target.value)
                this.yd2 = convert('m2', 'yd2', event.target.value)
                this.mile2 = convert('m2', 'mile2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    ha: this.ha,
                    km2: this.km2,
                    in2: this.in2,
                    ft2: this.ft2,
                    yd2: this.yd2,
                    mile2: this.mile2
                })
                break
            case "ha":
                this.cm2 = convert('ha', 'cm2', event.target.value)
                this.m2 = convert('ha', 'm2', event.target.value)
                this.km2 = convert('ha', 'km2', event.target.value)
                this.in2 = convert('ha', 'in2', event.target.value)
                this.ft2 = convert('ha', 'ft2', event.target.value)
                this.yd2 = convert('ha', 'yd2', event.target.value)
                this.mile2 = convert('ha', 'mile2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    m2: this.m2,
                    km2: this.km2,
                    in2: this.in2,
                    ft2: this.ft2,
                    yd2: this.yd2,
                    mile2: this.mile2
                })
                break
            case "km2":
                this.cm2 = convert('km2', 'cm2', event.target.value)
                this.m2 = convert('km2', 'm2', event.target.value)
                this.ha = convert('km2', 'ha', event.target.value)
                this.in2 = convert('km2', 'in2', event.target.value)
                this.ft2 = convert('km2', 'ft2', event.target.value)
                this.yd2 = convert('km2', 'yd2', event.target.value)
                this.mile2 = convert('km2', 'mile2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    m2: this.m2,
                    ha: this.ha,
                    in2: this.in2,
                    ft2: this.ft2,
                    yd2: this.yd2,
                    mile2: this.mile2
                })
                break
            case "in2":
                this.cm2 = convert('in2', 'cm2', event.target.value)
                this.m2 = convert('in2', 'm2', event.target.value)
                this.ha = convert('in2', 'ha', event.target.value)
                this.km2 = convert('in2', 'km2', event.target.value)
                this.ft2 = convert('in2', 'ft2', event.target.value)
                this.yd2 = convert('in2', 'yd2', event.target.value)
                this.mile2 = convert('in2', 'mile2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    m2: this.m2,
                    ha: this.ha,
                    km2: this.km2,
                    ft2: this.ft2,
                    yd2: this.yd2,
                    mile2: this.mile2
                })
                break
            case "ft2":
                this.cm2 = convert('ft2', 'cm2', event.target.value)
                this.m2 = convert('ft2', 'm2', event.target.value)
                this.ha = convert('ft2', 'ha', event.target.value)
                this.km2 = convert('ft2', 'km2', event.target.value)
                this.in2 = convert('ft2', 'in2', event.target.value)
                this.yd2 = convert('ft2', 'yd2', event.target.value)
                this.mile2 = convert('ft2', 'mile2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    m2: this.m2,
                    ha: this.ha,
                    km2: this.km2,
                    in2: this.in2,
                    yd2: this.yd2,
                    mile2: this.mile2
                })
                break
            case "yd2":
                this.cm2 = convert('yd2', 'cm2', event.target.value)
                this.m2 = convert('yd2', 'm2', event.target.value)
                this.ha = convert('yd2', 'ha', event.target.value)
                this.km2 = convert('yd2', 'km2', event.target.value)
                this.in2 = convert('yd2', 'in2', event.target.value)
                this.ft2 = convert('yd2', 'ft2', event.target.value)
                this.mile2 = convert('yd2', 'mile2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    m2: this.m2,
                    ha: this.ha,
                    km2: this.km2,
                    in2: this.in2,
                    ft2: this.ft2,
                    mile2: this.mile2
                })
                break
            case "mile2":
                this.cm2 = convert('mile2', 'cm2', event.target.value)
                this.m2 = convert('mile2', 'm2', event.target.value)
                this.ha = convert('mile2', 'ha', event.target.value)
                this.km2 = convert('mile2', 'km2', event.target.value)
                this.in2 = convert('mile2', 'in2', event.target.value)
                this.ft2 = convert('mile2', 'ft2', event.target.value)
                this.yd2 = convert('mile2', 'yd2', event.target.value)
                this.setState({
                    cm2: this.cm2,
                    m2: this.m2,
                    ha: this.ha,
                    km2: this.km2,
                    in2: this.in2,
                    ft2: this.ft2,
                    yd2: this.yd2,
                })
                break
            //SQUARE
            case "cm3":
                this.dm3 = convert('cm3', 'dm3', event.target.value)
                this.m3 = convert('cm3', 'm3', event.target.value)
                this.l = convert('cm3', 'l', event.target.value)
                this.in3 = convert('cm3', 'in3', event.target.value)
                this.ft3 = convert('cm3', 'ft3', event.target.value)
                this.pt = convert('cm3', 'pt', event.target.value)
                this.gal = convert('cm3', 'gallon', event.target.value)
                this.setState({
                    dm3: this.dm3,
                    m3: this.m3,
                    l: this.l,
                    in3: this.in3,
                    ft3: this.ft3,
                    pt: this.pt,
                    gal: this.gal
                })
                break
            case "dm3":
                this.cm3 = convert('dm3', 'cm3', event.target.value)
                this.m3 = convert('dm3', 'm3', event.target.value)
                this.l = convert('dm3', 'l', event.target.value)
                this.in3 = convert('dm3', 'in3', event.target.value)
                this.ft3 = convert('dm3', 'ft3', event.target.value)
                this.pt = convert('dm3', 'pt', event.target.value)
                this.gal = convert('dm3', 'gallon', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    m3: this.m3,
                    l: this.l,
                    in3: this.in3,
                    ft3: this.ft3,
                    pt: this.pt,
                    gal: this.gal
                })
                break
            case "m3":
                this.cm3 = convert('m3', 'cm3', event.target.value)
                this.dm3 = convert('m3', 'dm3', event.target.value)
                this.l = convert('m3', 'l', event.target.value)
                this.in3 = convert('m3', 'in3', event.target.value)
                this.ft3 = convert('m3', 'ft3', event.target.value)
                this.pt = convert('m3', 'pt', event.target.value)
                this.gal = convert('m3', 'gallon', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    dm3: this.dm3,
                    l: this.l,
                    in3: this.in3,
                    ft3: this.ft3,
                    pt: this.pt,
                    gal: this.gal
                })
                break
            case "l":
                this.cm3 = convert('l', 'cm3', event.target.value)
                this.dm3 = convert('l', 'dm3', event.target.value)
                this.m3 = convert('l', 'm3', event.target.value)
                this.in3 = convert('l', 'in3', event.target.value)
                this.ft3 = convert('l', 'ft3', event.target.value)
                this.pt = convert('l', 'pt', event.target.value)
                this.gal = convert('l', 'gallon', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    dm3: this.dm3,
                    m3: this.m3,
                    in3: this.in3,
                    ft3: this.ft3,
                    pt: this.pt,
                    gal: this.gal
                })
                break
            case "in3":
                this.cm3 = convert('in3', 'cm3', event.target.value)
                this.dm3 = convert('in3', 'dm3', event.target.value)
                this.m3 = convert('in3', 'm3', event.target.value)
                this.l = convert('in3', 'l', event.target.value)
                this.ft3 = convert('in3', 'ft3', event.target.value)
                this.pt = convert('in3', 'pt', event.target.value)
                this.gal = convert('in3', 'gallon', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    dm3: this.dm3,
                    m3: this.m3,
                    l: this.l,
                    ft3: this.ft3,
                    pt: this.pt,
                    gal: this.gal
                })
                break
            case "ft3":
                this.cm3 = convert('ft3', 'cm3', event.target.value)
                this.dm3 = convert('ft3', 'dm3', event.target.value)
                this.m3 = convert('ft3', 'm3', event.target.value)
                this.l = convert('ft3', 'l', event.target.value)
                this.in3 = convert('ft3', 'in3', event.target.value)
                this.pt = convert('ft3', 'pt', event.target.value)
                this.gal = convert('ft3', 'gallon', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    dm3: this.dm3,
                    m3: this.m3,
                    l: this.l,
                    in3: this.in3,
                    pt: this.pt,
                    gal: this.gal
                })
                break
            case "pt":
                this.cm3 = convert('pt', 'cm3', event.target.value)
                this.dm3 = convert('pt', 'dm3', event.target.value)
                this.m3 = convert('pt', 'm3', event.target.value)
                this.l = convert('pt', 'l', event.target.value)
                this.in3 = convert('pt', 'in3', event.target.value)
                this.ft3 = convert('pt', 'ft3', event.target.value)
                this.gal = convert('pt', 'gallon', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    dm3: this.dm3,
                    m3: this.m3,
                    l: this.l,
                    in3: this.in3,
                    ft3: this.ft3,
                    gal: this.gal
                })
                break
            case "gal":
                this.cm3 = convert('gallon', 'cm3', event.target.value)
                this.dm3 = convert('gallon', 'dm3', event.target.value)
                this.m3 = convert('gallon', 'm3', event.target.value)
                this.l = convert('gallon', 'l', event.target.value)
                this.in3 = convert('gallon', 'in3', event.target.value)
                this.ft3 = convert('gallon', 'ft3', event.target.value)
                this.pt = convert('gallon', 'pt', event.target.value)
                this.setState({
                    cm3: this.cm3,
                    dm3: this.dm3,
                    m3: this.m3,
                    l: this.l,
                    in3: this.in3,
                    ft3: this.ft3,
                    pt: this.pt
                })
                break
            //MASS
            case "mg":
                this.mg = convert('mg', 'mg', event.target.value)
                this.g = convert('mg', 'g', event.target.value)
                this.kg = convert('mg', 'kg', event.target.value)
                this.t = convert('mg', 't', event.target.value)
                this.oz = convert('mg', 'oz', event.target.value)
                this.lb = convert('mg', 'lb', event.target.value)
                this.stone = convert('mg', 'stone', event.target.value)
                this.hwt = convert('mg', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    kg: this.kg,
                    t: this.t,
                    oz: this.oz,
                    lb: this.lb,
                    stone: this.stone,
                    hwt: this.hwt
                })
                break
            case "g":
                this.mg = convert('g', 'mg', event.target.value)
                this.kg = convert('g', 'kg', event.target.value)
                this.t = convert('g', 't', event.target.value)
                this.oz = convert('g', 'oz', event.target.value)
                this.lb = convert('g', 'lb', event.target.value)
                this.stone = convert('g', 'stone', event.target.value)
                this.hwt = convert('g', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    kg: this.kg,
                    t: this.t,
                    oz: this.oz,
                    lb: this.lb,
                    stone: this.stone,
                    hwt: this.hwt
                })
                break
            case "kg":
                this.mg = convert('kg', 'mg', event.target.value)
                this.g = convert('kg', 'g', event.target.value)
                this.t = convert('kg', 't', event.target.value)
                this.oz = convert('kg', 'oz', event.target.value)
                this.lb = convert('kg', 'lb', event.target.value)
                this.stone = convert('kg', 'stone', event.target.value)
                this.hwt = convert('kg', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    t: this.t,
                    oz: this.oz,
                    lb: this.lb,
                    stone: this.stone,
                    hwt: this.hwt
                })
                break
            case "t":
                this.mg = convert('t', 'mg', event.target.value)
                this.g = convert('t', 'g', event.target.value)
                this.kg = convert('t', 'kg', event.target.value)
                this.oz = convert('t', 'oz', event.target.value)
                this.lb = convert('t', 'lb', event.target.value)
                this.stone = convert('t', 'stone', event.target.value)
                this.hwt = convert('t', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    kg: this.kg,
                    oz: this.oz,
                    lb: this.lb,
                    stone: this.stone,
                    hwt: this.hwt
                })
                break
            case "oz":
                this.mg = convert('oz', 'mg', event.target.value)
                this.g = convert('oz', 'g', event.target.value)
                this.kg = convert('oz', 'kg', event.target.value)
                this.t = convert('oz', 't', event.target.value)
                this.lb = convert('oz', 'lb', event.target.value)
                this.stone = convert('oz', 'stone', event.target.value)
                this.hwt = convert('oz', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    kg: this.kg,
                    t: this.t,
                    lb: this.lb,
                    stone: this.stone,
                    hwt: this.hwt
                })
                break
            case "lb":
                this.mg = convert('lb', 'mg', event.target.value)
                this.g = convert('lb', 'g', event.target.value)
                this.kg = convert('lb', 'kg', event.target.value)
                this.t = convert('lb', 't', event.target.value)
                this.oz = convert('lb', 'oz', event.target.value)
                this.stone = convert('lb', 'stone', event.target.value)
                this.hwt = convert('bl', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    kg: this.kg,
                    t: this.t,
                    oz: this.oz,
                    stone: this.stone,
                    hwt: this.hwt
                })
                break
            case "stone":
                this.mg = convert('stone', 'mg', event.target.value)
                this.g = convert('stone', 'g', event.target.value)
                this.kg = convert('stone', 'kg', event.target.value)
                this.t = convert('stone', 't', event.target.value)
                this.oz = convert('stone', 'oz', event.target.value)
                this.lb = convert('stone', 'lb', event.target.value)
                this.hwt = convert('stone', 'hwt', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    kg: this.kg,
                    t: this.t,
                    oz: this.oz,
                    lb: this.lb,
                    hwt: this.hwt
                })
                break
            case "hwt":
                this.mg = convert('hwt', 'mg', event.target.value)
                this.g = convert('hwt', 'g', event.target.value)
                this.kg = convert('hwt', 'kg', event.target.value)
                this.t = convert('hwt', 't', event.target.value)
                this.oz = convert('hwt', 'oz', event.target.value)
                this.lb = convert('hwt', 'lb', event.target.value)
                this.stone = convert('hwt', 'stone', event.target.value)
                this.setState({
                    mg: this.mg,
                    g: this.g,
                    kg: this.kg,
                    t: this.t,
                    oz: this.oz,
                    lb: this.lb,
                    stone: this.stone
                })
                break
        }
    }

    render() {
        return (
            <div className={style.converter}>
                <div className={style.converterLabel}>Units Calculator</div>
                <div className={style.converterCategory}>
                    <button className={style.categoryLabel} onClick={() => (this.changeStyle(0))}>Length units</button>
                    <div className={this.state.styles[0]}>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Metric</div>
                            <div className={style.Content}>
                                <span>Milimeters:</span><input onChange={this.handleChange} value={this.state.mm} name="mm" type="number" />
                                <span>Centimeters:</span><input onChange={this.handleChange} value={this.state.cm} name="cm" type="number" />
                                <span>Meter:</span><input onChange={this.handleChange} value={this.state.m} name="m" type="number" />
                                <span>Kilometers:</span><input onChange={this.handleChange} value={this.state.km} name="km" type="number" />
                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>
                                <span>Inch:</span><input onChange={this.handleChange} value={this.state.in} name="in" type="number" />
                                <span>Foot:</span><input onChange={this.handleChange} value={this.state.ft} name="ft" type="number" />
                                <span>Yard:</span><input onChange={this.handleChange} value={this.state.yd} name="yd" type="number" />
                                <span>Mile:</span><input onChange={this.handleChange} value={this.state.mile} name="mile" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.converterCategory}>
                    <button className={style.categoryLabel} onClick={() => (this.changeStyle(1))}>Area units</button>
                    <div className={this.state.styles[1]}>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Metric</div>
                            <div className={style.Content}>
                                <span>Centimeters<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.cm2} name="cm2" type="number" />
                                <span>Meters<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.m2} name="m2" type="number" />
                                <span>Hectares:</span><input onChange={this.handleChange} value={this.state.ha} name="ha" type="number" />
                                <span>Kilometers<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.km2} name="km2" type="number" />
                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>
                                <span>Inch<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.in2} name="in2" type="number" />
                                <span>Foot<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.ft2} name="ft2" type="number" />
                                <span>Yard<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.yd2} name="yd2" type="number" />
                                <span>Mile<sup>2</sup>:</span><input onChange={this.handleChange} value={this.state.mile2} name="mile2" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.converterCategory}>
                    <button className={style.categoryLabel} onClick={() => (this.changeStyle(2))}>Volume units</button>
                    <div className={this.state.styles[2]}>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Metric</div>
                            <div className={style.Content}>
                                <span>Centimeters<sup>3</sup>:</span><input onChange={this.handleChange} value={this.state.cm3} name="cm3" type="number" />
                                <span>Decimeters<sup>3</sup>:</span><input onChange={this.handleChange} value={this.state.dm3} name="dm3" type="number" />
                                <span>Meters<sup>3</sup>:</span><input onChange={this.handleChange} value={this.state.m3} name="m3" type="number" />
                                <span>Liters:</span><input onChange={this.handleChange} value={this.state.l} name="l" type="number" />
                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>
                                <span>Inch<sup>3</sup>:</span><input onChange={this.handleChange} value={this.state.in3} name="in3" type="number" />
                                <span>Foot<sup>3</sup>:</span><input onChange={this.handleChange} value={this.state.ft3} name="ft3" type="number" />
                                <span>Pint:</span><input onChange={this.handleChange} value={this.state.pt} name="pt" type="number" />
                                <span>Gallon:</span><input onChange={this.handleChange} value={this.state.gal} name="gal" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.converterCategory}>
                    <button className={style.categoryLabel} onClick={() => (this.changeStyle(3))}>Mass units</button>
                    <div className={this.state.styles[3]}>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Metric</div>
                            <div className={style.Content}>
                                <span>Miligram:</span><input onChange={this.handleChange} value={this.state.mg} name="mg" type="number" />
                                <span>Gram:</span><input onChange={this.handleChange} value={this.state.g} name="g" type="number" />
                                <span>Kilogram:</span><input onChange={this.handleChange} value={this.state.kg} name="kg" type="number" />
                                <span>Tonne:</span><input onChange={this.handleChange} value={this.state.t} name="t" type="number" />
                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>
                                <span>Ounce:</span><input onChange={this.handleChange} value={this.state.oz} name="oz" type="number" />
                                <span>Pound:</span><input onChange={this.handleChange} value={this.state.lb} name="lb" type="number" />
                                <span>Stone:</span><input onChange={this.handleChange} value={this.state.stone} name="stone" type="number" />
                                <span>Hundredweight:</span><input onChange={this.handleChange} value={this.state.hwt} name="hwt" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.converterCategory}>
                    <button className={style.categoryLabel} onClick={() => (this.changeStyle(4))}>Temperature units</button>
                    <div className={this.state.styles[4]}>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Metric</div>
                            <div className={style.Content}>
                                <span>C<sup>o</sup>:</span><input onChange={this.handleChange} value={this.state.c} name="c" type="number" />
                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>
                                <span>F<sup>o</sup>:</span><input onChange={this.handleChange} value={this.state.f} name="f" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}