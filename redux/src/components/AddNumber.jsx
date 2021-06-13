import React, { Component } from 'react';

export default class AddNumber extends Component {
        // redux의 기능을 도려내서 부품으로서 사용되게 만듦!

    state ={size : 1}
    render() {
        return (

            <div>
                <h1>
                    Add Number!
                </h1>

                <input type="button" value="+" onClick={function () {
                    this.props.onClick(this.state.size);
                }.bind(this)}></input>
                <input type="text" value={ this.state.size} onChange={function (e) {
                    this.setState({ size: Number(e.target.value) });
                }.bind(this)}></input>

            </div>
        )
    }

}