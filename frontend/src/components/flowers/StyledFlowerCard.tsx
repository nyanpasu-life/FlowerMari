import styled from 'styled-components';

interface borderProps {
	$isMain?: boolean;
	$isSelected?: boolean;
	src?: String;
}

interface MarginProps {
	$marginRight?: string;
	$marginLeft?: string;
	$marginTop?: string;
	$marginBottom?: string;
} // 마진용

interface AlignProps {
	$align?: string;
} // text 정렬

interface isMain {
	$main?: boolean;
}

// 전체
export const StyledCard = styled.div<MarginProps>`
	width: max-content;
	height: 150px;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 2vh;

	@media (min-width: 768px) {
		margin-top: 4vh;
	}

	border: none;
	background-color: transparent;
`;

export const StyledFlowerArea = styled.div`
	position: relative;

	display: 'flex';
	flex-direction: 'column';
`;

// 꽃 사진
export const StyledRecommend = styled.div<borderProps>`
	width: 100px;
	height: 130px;

	@media (min-width: 768px) {
		width: 130px;
		height: 169px;

		border-top-left-radius: 65px;
		border-top-right-radius: 65px;

		margin-right: 1vw;
		margin-left: 1vw;
	}

	border-top-left-radius: 50px;
	border-top-right-radius: 50px;

	border: ${(props) => (props.$isSelected ? '1.5px solid #FBBB95' : props.$isMain ? '1.5px solid #C7C151' : 'none')};

	background: ${(props) => `url(${props.src})`} no-repeat;
	background-size: 100% 100%;
	margin: auto;
	overflow: hidden;
`;

export const StyledCloseButton = styled.button<borderProps>`
	position: absolute;

	left: 65px;

	@media (min-width: 768px) {
		left: 100px;
	}

	background: none;
	border: none;
`;

export const CloseSpan = styled.span`
	&.material-symbols-outlined {
		color: #E2D5E7;
		font-size: 28px;

		@media (min-width: 768px) {
			font-size: 36px;
		}

		font-variation-settings:
			'FILL' 0,
			'wght' 100,
			'GRAD' 0,
			'opsz' 24;
	}
`;

// 꽃 정보
export const StyledInfo = styled.div<isMain>`
	width: 55vw;
	height: 133px;

	@media (min-width: 768px) {
		height: 169px;
		width: 423px;

		margin-right: 1vw;
		margin-left: 1vw;
	}

	@media (max-width: 767px) {
		height: 138px;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin: auto;
	margin-left: 2.5vw;

`;

export const StyledName = styled.p<MarginProps>`
	font-family: 'Cafe 24 Oneprettynight-v2.0';
	font-size: 1.25rem;

	@media (min-width: 768px) {
		font-size: 1.8rem;
	}

	display: block;
	text-align: left;
	margin: ${(props) => props.$marginTop || 'auto'} ${(props) => props.$marginRight || 'auto'}
		${(props) => props.$marginBottom || 'auto'} ${(props) => props.$marginLeft || 'auto'};
`; // 꽃 이름

export const StyledMeaning = styled.p<MarginProps>`
	font-family: 'Cafe 24 Oneprettynight-v2.0';
	font-size: 0.8rem;

	@media (max-width: 340px) {
		font-size: 0.65rem;
	}

	@media (min-width: 768px) {
		font-size: 1.23rem;
	}

	display: block;

	margin: ${(props) => props.$marginTop || 'auto'} ${(props) => props.$marginRight || 'auto'}
		${(props) => props.$marginBottom || 'auto'} ${(props) => props.$marginLeft || 'auto'};
`; // 단순 텍스트용

export const TextAlign = styled.div<AlignProps>`
	text-align: ${(props) => props.$align || 'center'};
`;
