
// 타입 생성하기 
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 타입을 가진  무명객체(action)  생성하기
const increase = () => {

    return {
        type: INCREASE,
    }
}
const decrease = () =>{
    return {
        type: DECREASE,
    }
}


// 무명객체 counter 생성하기 
const counter = (state= { number: 0}, action) => {
    switch (action.type) {
        case INCREASE:
            return { number: state.number +1 } // counter = { number: }
            break;
        case DECREASE:
            return { number: state.number-1}
            break;
        default:
            return state;
    }
  
}

export { increase, decrease };
export default counter;