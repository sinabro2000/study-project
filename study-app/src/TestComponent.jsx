function TestComponent({ change, test }) {
    // props란 부모가 자식에게 넘겨주는 값

    // function 함수명({부모가 넘겨주는 프롭스명})

    const TestFunction = () => {
        change();
    }


    return (
        <>
            {/* 프롭스 사용 예시*/}
            <div>
                <h2>TestComponent 컴포넌트</h2>
                <button onClick={change}>버튼1</button>
                <button onClick={test}>버튼2</button>
                <button onClick={TestFunction}>버튼3</button>
            </div>
        </>
    )
}



export default TestComponent;