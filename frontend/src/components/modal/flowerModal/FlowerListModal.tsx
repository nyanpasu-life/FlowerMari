import {
	StyledModalBackground,
	StyledModal,
	StyledCloseButton,
	CloseSpan,
	StyledBouquetImage,
	StyledConfirmInfo,
} from './StyledFlowerListModal';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../button/CustomButton';

interface ModalProps {
	CloseListModal: () => void;
}

export const FlowerListModal = ({ CloseListModal }: ModalProps) => {
	const navigate = useNavigate();

	const goToGenerate = () => {
		CloseListModal()
		navigate('/generate');
	};

	return (
		<>
			{/* 모달 */}
			<StyledModalBackground onClick={CloseListModal}>
				<StyledModal onClick={(e) => e.stopPropagation()}>
					{/* 닫기 버튼 영역 */}
					<div>
						<StyledCloseButton onClick={CloseListModal}>
							<CloseSpan className='material-symbols-outlined'>arrow_back_ios_new</CloseSpan>
						</StyledCloseButton>
					</div>
					{/* 그 외 영역 */}
					<StyledConfirmInfo>
						<StyledBouquetImage
							src='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
							alt='img'
						></StyledBouquetImage>
						<CustomButton $check={true} onClick={goToGenerate}>선택</CustomButton>
					</StyledConfirmInfo>
				</StyledModal>
			</StyledModalBackground>
		</>
	);
};
