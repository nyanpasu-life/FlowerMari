import styled from 'styled-components';

interface MarginProps {
	$marginRight?: string;
	$marginLeft?: string;
	$marginTop?: string;
	$marginBottom?: string;
} // 마진용


export const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
`; // 페이지 전체

export const AccordionMenu = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	outline: none;
	transition: background-color 0.6s ease;

	&:hover,
	&.active {

	}
`; // 아코디언 상단 메뉴

export const AccordionIcon = styled.div`
	margin-left: auto;
	transition: transform 0.6s ease;

	&.rotate {
		transform: rotate(90deg);
	}
`; // 아이콘

export const AccordionContent = styled.div`
	overflow: hidden;
	transition: max-height 0.8s ease;
`; // 아코디언 collapse 메뉴

export const AccordionText = styled.p<MarginProps>`
	font-size: 0.875rem;
	display: block;
	margin: auto;
	margin: ${(props) => props.$marginTop || 'auto'} ${(props) => props.$marginRight || 'auto'}
		${(props) => props.$marginBottom || 'auto'} ${(props) => props.$marginLeft || 'auto'};
`; // 단순 텍스트용
