// 리액트 상태 관리 훅
import { useState, useEffect } from "react";
import { login } from "./services/userService";

// 외부 컴포넌트 import
import TestComponent from "./TestComponent";
/* 
    컴포넌트 임포트 양식
    import 컴포넌트명(원본과 일치x) from "임포트할 컴포넌트 경로"
*/

function StudyCode() {
  /* 
    useState 제어하는 법
    const [변수명,변수제어함수] = useState(초기값);
    */

  const [state, setState] = useState(0); // 테스트 상태

  const change = () => {
    //테스트 함수
    setState(state + 1);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  /*
        useEffect를 사용한 이유
        -useState는 비동기 처리.즉 console.log(state) 사용 시 변하기 전 값이 출력됨
        -그래서 useEffect를 사용해 처리


        useEffect 기본 사용법
            useEffect(()=>{
                실행할 내용,배열
            }

        useEffect에 들어가는 배열에 따라 실행 시점이 달라짐
        -[]      : 컴포넌트 최초 렌더링시 1회 실행
        -[state] : state가 변경될 때 마다 실행
        -생략    : 렌더링 될 때 마다 실행


        useEffect는 컴포넌트 함수의 최상위에서 영역 호출해야 함

        
    */

  const test = () => {
    console.log("부모 컴포넌트의 함수");
  };

  

  /* 
        return 안에 html 태그 배치
        문법은 html 문법과 유사
        class 지정시 class="클래스 명"이 아닌 className="클래스 명"
    */

  return (
    <>
      <div>
        {/* 임포트한 컴포넌트 사용하는 법
                    1.<컴포넌트명/>
                    2.<컴포넌트명></컴포넌트명>

                    1의경우 자식 컴포넌트가 없음
                    2의 경우 자식 컴포넌트가 있음

                        ex <컴포넌트명>
                                <자식컴포넌트/>
                           </컴포넌트명>
                */}

        <TestComponent change={change} test={test} />

        {/* 프롭스 넘기는 양식
                    <컴포넌트명 프롭스명(자식 컴포넌트 프롭스와 일치)={보내고 싶은 함수 및 변수}>
                */}

        <hr />
        <h2>StudyCode 컴포넌트</h2>
        <span>state:</span>
        <span>{state}</span>
        <button onClick={change}>버튼 4</button>
      </div>
    </>
  );
}

//컴포넌트를 외부에서도 사용 가능하게 만들어줌
export default StudyCode;
