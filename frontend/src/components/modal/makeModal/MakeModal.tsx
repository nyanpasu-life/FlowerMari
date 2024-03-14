import {
	StyledModalBackground,
	StyledModal,
	StyledCloseButton,
	CloseSpan,
	StyledBouquetImage,
	StyledConfirmInfo,
} from './StyledMakeModal';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../button/CustomButton';

interface ModalProps {
	closeModal: () => void;
}

export const MakeModal = ({ closeModal }: ModalProps) => {
	const navigate = useNavigate();

	const goToComplete = () => {
		closeModal()
		navigate('/complete');
	};

	return (
		<>
			{/* 모달 */}
			<StyledModalBackground onClick={() => closeModal()}>
				<StyledModal onClick={(e) => e.stopPropagation()}>
					{/* 닫기 버튼 영역 */}
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<StyledCloseButton onClick={() => closeModal()}>
							<CloseSpan className='material-symbols-outlined'>close</CloseSpan>
						</StyledCloseButton>
					</div>
					{/* 그 외 영역 */}
					<StyledConfirmInfo>
						<StyledBouquetImage
							src='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
							alt='img'
						></StyledBouquetImage>
						<CustomButton onClick={goToComplete}>만들기</CustomButton>
					</StyledConfirmInfo>
				</StyledModal>
			</StyledModalBackground>
		</>
	);
};
