import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from './containers/IndexPage.tsx';


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        {/* 레이아웃이 필요한 페이지 */}
                        <Route path='/' element={<IndexPage />} />

                    </Route>
                    <Route>
                        {/* 레이아웃이 필요없는 페이지 */}

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
