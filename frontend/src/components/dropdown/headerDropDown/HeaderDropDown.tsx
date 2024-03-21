import { useState } from 'react';
import { Avatar } from '../../avatar/Avatar';
import { DropdownMain, DropdownBar, DropdownMenu, DropdownMenuText } from './StyledHeaderDropDown';
import { useNavigate } from 'react-router-dom';

export const HeaderDropdown = () => {
	const [isVisible, setIsVisible] = useState(false);
	const menu = ["로그아웃"]

	const navigate = useNavigate();

	const toggleDropdown = () => {
		setIsVisible((prev) => !prev);
	}; // 드롭다운 닫기 

	const clickMenu = () => {
		setIsVisible((prev) => !prev);
		navigate('/');
	}; // 드롭다운 닫기 

	return (
		<>
			<DropdownMain>
				{/* 드롭다운 상단 위치 */}
				<DropdownBar onClick={toggleDropdown}>
					<Avatar link='https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg'></Avatar>
				</DropdownBar>
					{/* 드롭다운 메뉴 */}
					<DropdownMenu $visible={isVisible}>
					{menu.map((item, idx) => {
						return <DropdownMenuText key={idx} onClick={() => clickMenu()}>{item}</DropdownMenuText>
					})}
					</DropdownMenu>
			</DropdownMain>
		</>
	);
};
