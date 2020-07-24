import React, { useEffect, useState } from "react";
import axios from "axios";

const List = ({ match , history }) => {
    
    // 데이터 가져오기 
    // const User = [
    //     { name: "김동현", age: 24, id:1 }, { name: "강동진", age: 24, id:2}, { name: "이승현", age: 21, id:3}
    // ]
    const [user, setUser] = useState([]);
    const { _id } = match.params; 
    useEffect(() => {
    
           axios.get(`/api/users/${_id}`).then(response => { console.log(response.data);
              setUser(response.data);
              
          });
            
          console.log(user);
 
    },[])
   
     // Params를 통해 배열 순번 찾기 

    const goLists =() =>{
        history.push('/lists');
    }

    // const preUser = () => {
    //     if(index === 0) {
    //         alert("그 전 유저가 없습니다.")
    //     } else {
    //         history.push(`/list/${user[index-1].name}`)
    //     }
    // }

    // const nextUser = () => {
    //     if(index === user.length-1){
    //         alert("그 다음 유저가 없습니다.");
    //     } else {
    //     history.push(`/list/${user[index+1].name}`)
    //     }
    // }

  
    return (
        <div>
            <ul>
            <p> 이름: {user.name} </p>
            <p> 나이: {user.age}</p>
            </ul>
            <form>
           {/* <button onClick={preUser} type="submit" >이전 글</button> */}
            <button onClick={goLists} type="submit" >리스트로 가기</button>
           {/* <button onClick={nextUser} type="submit" >다음 글</button> */}
            </form>
        </div>
    );

   
}

export default List; 

// <p>이름: {user[0].name}</p>
//             <p>나이: {user[0].age}</p>