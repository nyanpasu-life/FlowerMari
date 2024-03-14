import { StyledLoginPage, StyledLogoImage, StyledKakaoImg } from './StyledLoginPage';
import { useNavigate } from 'react-router-dom';
import Logo from './../../assets/images/logo.svg';
import CustomButton from '../../components/button/CustomButton';
import kakao from './../../assets/images/kakao.png';

export const LoginPage = () => {
	const navigate = useNavigate();

	const goToIndex = () => {
		navigate('/index');
	};

	return (
		<>
			<StyledLoginPage>
				<StyledLogoImage src={Logo}></StyledLogoImage>
				<CustomButton $kakao={true} onClick={goToIndex}>
					{' '}
					<StyledKakaoImg src={kakao} alt='kakao'></StyledKakaoImg>카카오 계정으로 로그인하기
				</CustomButton>
			</StyledLoginPage>
		</>
	);
};
