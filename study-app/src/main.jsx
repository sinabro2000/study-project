import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import StudyCode from './StudyCode.jsx'



// 리액트 진입점 (DOM을 마운트하는 영역)

createRoot(document.getElementById('root')).render(

  // StrictMode란
  // 개발 환경에서 잠재적인 버그를 찾기 위한 React 개발자 도구
  // 일부 함수와 Effect를 의도적으로 두번 실행하여
  // 사이드 이펙트를 찾아줌(지워도됨)


  <StrictMode>
    {/* 이 사이에 컴포넌트 배치 */}
    <StudyCode/>


  </StrictMode>,
)
