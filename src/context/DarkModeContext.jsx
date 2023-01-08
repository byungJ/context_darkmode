import { createContext, useState } from 'react';


// Context생성하기.
// 데이터를 담고 있는 상자
export const DarkModeContext = createContext();

// Context를 생성 할 때는 Provider를 꼭 생성해야 됩니다.
// 데이터를 잘 가지고 보여주고 있는 우산 같은 개념
export function DarkModeProvider({ children }) {
    
    // 글로벌하게 기억하고 싶은 데이터 또는 함수
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return (
        // DarkModeContext에 있는 Provider를 사용하고
        // { children } 외부로 부터 받은 자식을 보여줍니다.
        // {darkMode : darkMode, toggleDarkMode : toggleDarkMode} 자식컴포넌트와 공유하고 싶은 데이터
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            { children }
        </DarkModeContext.Provider>
    )
}