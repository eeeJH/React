import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

// .... 
function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}
// Redux의 Dispatch를 React Props에 연결시켜준다.
/*
function mapReduxDispatchToReactProps() {
    return {}
}
*/

export default connect(mapReduxStateToReactProps)(DisplayNumber);
// connect를 실행하면 리턴된 값이 함수고,
// 그 리턴된 값을 export 하는데, rapping된 component를 리턴될 것이다.
// store를 import 시켜야함

/*
import React, { Component } from 'react';

export default class extends Component {
    state = { number: store.getState().number }
  constructor(props) {
    super(props);
    // store.subscribe(LISTENER): dispatch 메소드가 실행되면 리스너 함수가 실행. 
    // 즉, 데이터에 변동이 있을때마다 리렌더링하도록 설정합니다.
    store.subscribe(function () {
      this.setState({   number: store.getState().number });
    }.bind(this));
  }
    render() {
        return <DisplayNumber number={this.state.number} unit={ this.props.unit }></DisplayNumber>
    }
}
*/