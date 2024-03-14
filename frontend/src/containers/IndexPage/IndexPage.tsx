import mainFlower from '../../assets/images/mainFlower.png';
import CustomButton from '../../components/button/CustomButton';
import { Menu } from '../../components/menu/Menubar';
import { useNavigate } from 'react-router-dom';
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
import { ChangeEvent, useState } from 'react';

export const IndexPage = () => {
	const [value1, setValue1] = useState<string>('');
	const [value2, setValue2] = useState<string>('');

	const navigate = useNavigate();

	const handleChangeOptionValues = (e: ChangeEvent<HTMLTextAreaElement>, setValue: (value: string) => void) => {
		const { value } = e.target;

		if (e.target.scrollHeight === e.target.clientHeight) {
			setValue(value);
		}
	};

	const goToGenerate = () => {
		navigate('/generate');
	};

	return (
		<>
			<Menu link='https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg'></Menu>
			<StyledIndexPage>
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

					<StyledLetter>
						<TextAlign $align='left'>
							<StyledText $marginLeft='3.5vw'>상황</StyledText>
						</TextAlign>
						<TextAlign>
							<StyledInput placeholder='예) 여자친구와 200일'></StyledInput>
							<TextAlign $align='left'>
								<StyledText $marginLeft='3.5vw' $marginTop='1.2vh'>
									Dear.
								</StyledText>
							</TextAlign>
							<StyledTextarea
								value={value1}
								placeholder='dear : 귀엽고 사랑스러운 여자친구에게'
								onChange={(e) => handleChangeOptionValues(e, setValue1)}
							></StyledTextarea>
							<StyledTextarea
								value={value2}
								placeholder='꽃을 통해 전하고 싶은 마음을 적어주세요.'
								height='88px'
								onChange={(e) => handleChangeOptionValues(e, setValue2)}
							></StyledTextarea>
						</TextAlign>
					</StyledLetter>

					<CustomButton $make={true} onClick={goToGenerate}>만들기</CustomButton>
				</StyledBox>
			</StyledIndexPage>
		</>
	);
};
