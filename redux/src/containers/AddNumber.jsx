import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onClick: function (size) {
            dispatch({ type: 'INCREMENT', size: size });
        }
    }
 }

export default connect(null, mapDispatchToProps)(AddNumber);

/*
import React, { Component } from 'react';
import store from '../store';

// 실질적인 Redux라는 일은 여기서 한다
// Application과 종속되는 작업은 여기서 한다.
// AddNumber는 Presentation component
// 컨테이너 컴포넌트를 만들어서 Redux랑 상호작용

export default class extends Component {
    render() {
        return <AddNumber onClick={function (size) {
            store.dispatch({ type:'INCREMENT', size:size});
        }.bind(this)}></AddNumber>
    }
}
*/