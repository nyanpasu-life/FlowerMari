import styled from 'styled-components';

interface borderProps {
	src?: String;
}

interface MarginProps {
	$marginRight?: string;
	$marginLeft?: string;
	$marginTop?: string;
	$marginBottom?: string;
} // 마진용

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

	margin-right: 4vw;

	@media (min-width: 768px) {
		width: 130px;
		height: 169px;

		border-top-left-radius: 65px;
		border-top-right-radius: 65px;

		margin-right: 4vw;
		margin-left: 1vw;
	}

	border: #F3F3F3;

	border-top-left-radius: 50px;
	border-top-right-radius: 50px;

	background: ${(props) => `url(${props.src})`} no-repeat center center;
	background-size: 60% 80%;

	background-color: rgba(243,243,243,1);
	background-blend-mode: multiply;

	overflow: hidden;
`;


// 꽃 정보
export const StyledInfo = styled.button`
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

	border: 1.5px solid #D7D7D7;
	border-radius: 15px;

	background: none;

	margin: auto;
	margin-left: 2.5vw;

`;

export const StyledAddButton = styled.button<borderProps>`

	background: none;
	border: none;
`;

export const AddSpan = styled.span`
	&.material-symbols-outlined {
		color: #D7D7D7;
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