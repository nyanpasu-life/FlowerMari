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


// 전체
export const StyledCard = styled.div`
	width: 90vw;
	height: 150px;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 3vh;

	border: none;
	background-color: transparent;
`;

// 꽃 사진 버튼
export const StyledRecommendBtn = styled.button<borderProps>`
	width: 100px;
	height: 130px;
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;

	border: ${(props) => (props.$isSelected ? '1.5px solid #FBBB95' : props.$isMain ? '1.5px solid #C7C151' : 'none')};

  background: ${(props) => `url(${props.src})`} no-repeat;
  background-size: 100% 100%;

	margin: auto;

  overflow: hidden; 
`;

// 꽃 정보
export const StyledInfo = styled.div`
	width: 55vw;
	height: 133px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin: auto;

	background-color: #e2d5e7;
`;

export const StyledName = styled.p<MarginProps>`
	font-size: 0.925rem;
	display: block;
	text-align: left;
	margin: auto;
	margin: ${(props) => props.$marginTop || 'auto'} ${(props) => props.$marginRight || 'auto'}
		${(props) => props.$marginBottom || 'auto'} ${(props) => props.$marginLeft || 'auto'};
`; // 꽃 이름

export const StyledLanguage = styled.p<MarginProps>`
	font-size: 0.6rem;
	display: block;
	margin: auto;
	margin: ${(props) => props.$marginTop || 'auto'} ${(props) => props.$marginRight || 'auto'}
		${(props) => props.$marginBottom || 'auto'} ${(props) => props.$marginLeft || 'auto'};
`; // 단순 텍스트용

export const TextAlign = styled.div<AlignProps>`
	text-align: ${(props) => props.$align || 'center'};
`;