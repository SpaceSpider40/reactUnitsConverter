import React from "react";
import style from "../Styles/Style.module.css"

export default class Converter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            styles: [style.converterContentHidden,style.converterContentHidden,style.converterContentHidden,style.converterContentHidden,style.converterContentHidden]
        }
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

    render() {
        console.log(this.state.styles);
        return (
            <div className={style.converter}>
                <div className={style.converterLabel}>Units Calculator</div>
                <div className={style.converterCategory}>
                    <button className={style.categoryLabel} onClick={() => (this.changeStyle(0))}>Length units</button>
                    <div className={this.state.styles[0]}>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Metric</div>
                            <div className={style.Content}>
                                <span>Milimeters:</span><input name="mm" type="number" />
                                <span>Centimeters:</span><input name="cm" type="number" />
                                <span>Meter:</span><input name="m" type="number" />
                                <span>Kilometers:</span><input name="km" type="number" />
                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>
                                <span>Inch:</span><input name="in" type="number" />
                                <span>Foot:</span><input name="ft" type="number" />
                                <span>Yard:</span><input name="yd" type="number" />
                                <span>Mile:</span><input name="mile" type="number" />
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

                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>

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

                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>

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

                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>

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

                            </div>
                        </div>
                        <div className={style.unitsType}>
                            <div className={style.Label}>Imperial</div>
                            <div className={style.Content}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}