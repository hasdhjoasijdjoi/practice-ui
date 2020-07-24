import React, { useState, useEffect,  useMemo, useCallback, useRef } from 'react';



const getAverage = numbers => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};


//props
const Average = ({initialList, initialNumber, children}) => {
  
  //useState
  const [list, setList] = useState(initialList);
  const [number, setNumber] = useState(initialNumber);
  const inputEl = useRef(children);
  const id = useRef(3);


  // useCallback 
  const onChange = useCallback(e => {
    setNumber(e.target.value); // 렌더링은 되지만,
  }, []); // 함수는 재생성되지 않고 재사용된다.  number의 상태를 알 필요가 없다. 

  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number)); // 이 함수에 들어있는 list와 number의 상태를 가져와야 한다. 만약 함수를 렌더링되기전에 함수로 재사용한다면 렌더링 되기전의 상태를 써야한다. 
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number,list]
  ); // number와 list의 상태가 변할때마다 함수도 재생성된다. 
  const onRef = useCallback(() => {
    id.current= 5;
    console.log(id.current);
  }, []);

  // useMemo 
  const avg = useMemo(() => getAverage(list), [list]);
  // 컴포넌트 내부의 상태가 변할 때마다 리렌더링 되는데 useMemo를 사용하면 설정한 상태가 변할때만 리렌더링 된다. 

  // useEffect 
  useEffect(() => {
    console.log("DidMount"); // 리렌더링 후 실행 할 함수 
    return () => { 
      console.log("WillUnMount"); // 리린더링 전 실행 할 함 수 
    }
  })
 



  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <button onClick={onRef}>id변경</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
        <b>현재 id : </b> {id.current}
      </div>
    </div>
  );
};


export default Average;