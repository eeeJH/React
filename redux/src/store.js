import { createStore } from 'redux';

export default createStore(function (state, action){
    
    if (state === undefined) {
        return { number: 0 }
    }

    if (action.type === 'INCREMENT') {
        // ... 그 state를 복제하고 그 복제된 state 값에서 밑에 추가되는 property 값만 변형 시킴
        return {...state, number:state.number + action.size}
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())