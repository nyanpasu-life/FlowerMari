import mainFlower from '../../assets/images/mainFlower.png';
import CustomButton from '../../components/button/CustomButton';
import { Menu } from '../../components/menu/Menubar';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/header/Headerbar';
import { postTextInputs} from "../../api/bouquetCreate.ts";
import {
	StyledIndexPage,
	StyledBox,
	StyledInput,
	StyledLetter,
	StyledTextarea,
	StyledText,
	StyledImage,
	TextAlign,
} from './StyledIndexPage';
import React, { ChangeEvent, useState } from 'react';

export const IndexPage: React.FC = () => {
	const [whom, setWhom] = useState<string>('');
	const [situation, setSituation] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const navigate = useNavigate();

	const handleChangeOptionValues = (e: ChangeEvent<HTMLTextAreaElement>, setValue: (value: string) => void) => {
		const { value } = e.target;

		if (e.target.scrollHeight === e.target.clientHeight) {
			setValue(value);
		}
	};

	// const goToGenerate = () => {
	// 	navigate('/generate');
	// };

	const handleSubmit = async () => {
		await postTextInputs({ whom, situation, message });
		navigate('/generate');
	};

	return (
		<>
			<StyledIndexPage>
				{/* 로그인 헤더 */}
				<Header link='https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg'></Header>
				{/* 헤더를 제외한 영역 */}
				<StyledBox>
					<StyledImage src={mainFlower}></StyledImage>
					<StyledText $marginTop='0vh' $marginBottom='0.5vh'>
						꽃을 통해 전하고 싶은 말을 전해보세요.{' '}
					</StyledText>
					<StyledText $marginTop='0vh' $marginBottom='0.5vh'>
						전하고 싶은 말을 적으면 꽃말을 기준으로{' '}
					</StyledText>
					<StyledText $marginTop='0vh' $marginBottom='0.5vh'>
						꽃을 선택해 꽃다발을 만들어드려요.{' '}
					</StyledText>
					
					{/* 입력 영역 */}
					<StyledLetter>
						<TextAlign $align='left'>
							<StyledText $marginLeft='3.5vw'>상황</StyledText>
						</TextAlign>
						{/* 상황 입력 영역 */}
						<TextAlign>
							<StyledInput placeholder='예) 여자친구와 200일' onChange={(e) => setSituation(e.target.value)}></StyledInput>
							<TextAlign $align='left'>
								<StyledText $marginLeft='3.5vw' $marginTop='1.2vh'>
									Dear.
								</StyledText>
							</TextAlign>
							{/* 대상 입력 영역 */}
							<StyledTextarea
								value={whom}
								placeholder='dear : 귀엽고 사랑스러운 여자친구에게'
								onChange={(e) => setWhom(e.target.value)}
							></StyledTextarea>
							{/* 마음 입력 영역 */}
							<StyledTextarea
								placeholder='꽃을 통해 전하고 싶은 마음을 적어주세요.'
								height='6rem'
								onChange={(e) => setMessage(e.target.value)}
							></StyledTextarea>
						</TextAlign>
					</StyledLetter>

					{/* 만들기 버튼 */}
					<CustomButton $make={true} onClick={handleSubmit}>
						만들기
					</CustomButton>
				</StyledBox>
			</StyledIndexPage>
			<Menu></Menu>
		</>
	);
};
