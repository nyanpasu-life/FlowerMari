import {
	StyledModalBackground,
	StyledModal,
	StyledCloseButton,
	CloseSpan,
	StyledConfirmInfo,
	ColorButtonList,
	StyledScroll,
	StyledFixed,
} from './StyledFlowerListModal';
import { FlowerColor } from '../../flowerColorButton/FlowerColorButton';
import { useNavigate } from 'react-router-dom';
import { FlowerCard } from '../../../components/flowers/FlowerCard';
import CustomButton from '../../button/CustomButton';
import { useEffect, useRef, useState } from 'react';

interface RecommendItem {
	$url: string;
	$name: string;
	$meaning: string[];
}

interface RecommendProps {
	$index?: number;
	$item?: {
		$name: string;
		$meaning: string[];
	};
	CloseListModal: () => void;
}

export const FlowerListModal = ({ $index, $item, CloseListModal }: RecommendProps) => {
	const navigate = useNavigate();

	const goToGenerate = () => {
		CloseListModal();
		navigate('/generate');
	};

	const fixedRef = useRef<HTMLDivElement>(null);
	const [fixedHeight, setFixedHeight] = useState<number>(0);

	useEffect(() => {
		if (fixedRef.current) {
			setFixedHeight(fixedRef.current.offsetHeight);
		}
	}, []);

	type MyArrayItem = {
		$name: string;
		$meaning: string[];
	};

	const arrayOfArrays: MyArrayItem[] = [
		{ $name: '레이스 플라워', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
		{ $name: '레이스', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
		{ $name: '플라워', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
	];

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
					<StyledConfirmInfo fixedHeight={fixedHeight}>
						{/* 카드 스크롤 영역 */}
						<StyledScroll>
							{arrayOfArrays.map(($item) => (
								<FlowerCard
									$isMain={true}
									$isSelected={false}
									$recommend={false}
									$name={$item.$name}
									$meaning={$item.$meaning}
									link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
								/>
							))}
						</StyledScroll>
						{/* 색상 및 확인 버튼 영역 */}
						<StyledFixed ref={fixedRef}>
							{/* 색상 버튼 */}
							<ColorButtonList>
								<FlowerColor></FlowerColor>
								<FlowerColor fillColor='#FFE247' strokeColor='none'></FlowerColor>
								<FlowerColor fillColor='#FFA6A6' strokeColor='none'></FlowerColor>
								<FlowerColor fillColor='#FF4141' strokeColor='none'></FlowerColor>
								<FlowerColor fillColor='#E28AF1' strokeColor='none'></FlowerColor>
							</ColorButtonList>

							{/* 선택 버튼 */}
							<div style={{ marginBottom: '2vh' }}>
								<CustomButton $check={true} onClick={goToGenerate}>
									선택
								</CustomButton>
							</div>
						</StyledFixed>
					</StyledConfirmInfo>
				</StyledModal>
			</StyledModalBackground>
		</>
	);
};
