import styled from 'styled-components';

interface AlignProps {
	$align?: string;
} // text 정렬

interface MarginProps {
	$marginRight?: string;
	$marginLeft?: string;
	$marginTop?: string;
	$marginBottom?: string;
} // 마진용

export const StyledCompletePage = styled.div`
  width: 100vw;
	height: calc(var(--vh, 1vh) * 100 - 60px);

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  background-color: #FFF6F2;
`;

export const StyledText = styled.p<MarginProps>`
	font-family: "Cafe 24 Oneprettynight-v2.0";
	font-size: 1.725rem;
	display: block;
	margin: auto;
	margin: ${(props) => props.$marginTop || 'auto'} ${(props) => props.$marginRight || 'auto'}
		${(props) => props.$marginBottom || 'auto'} ${(props) => props.$marginLeft || 'auto'};
`; // 단순 텍스트용

export const TextAlign = styled.div<AlignProps>`
	text-align: ${(props) => props.$align || 'center'};
`;
// 텍스트 정렬

export const StyledBouquetImage = styled.img`
	width: 260px;
	height: auto;

	border-radius: 15px;

	margin-top: 2.5vh;
`;