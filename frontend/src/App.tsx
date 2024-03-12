import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from './containers/IndexPage.tsx';
import { useEffect } from 'react';
import { LoginPage } from './containers/loginPage/LoginPage.tsx';
import { Menu } from './components/menu/Menubar.tsx';
import { GeneratePage } from './containers/generatePage/GeneratePage.tsx';

export default function App() {
	function setScreenSize() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	useEffect(() => {
		setScreenSize();

		const handleResize = () => {
			setScreenSize();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route>
						{/* 레이아웃이 필요한 페이지 */}
						<Route path='/' element={<IndexPage />} />
						<Route path='/generate' element={<GeneratePage />} />
					</Route>
					<Route></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
