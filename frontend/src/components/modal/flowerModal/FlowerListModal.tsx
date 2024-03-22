import {
	StyledModalBackground,
	StyledModal,
	StyledCloseButton,
	CloseSpan,
	StyledConfirmInfo,
	ColorButtonList,
	StyledScroll,
	StyledFixed,
	StyledClickArea,
} from './StyledFlowerListModal';
import { FlowerColor } from '../../flowerColorButton/FlowerColorButton';
import { useNavigate } from 'react-router-dom';
import { FlowerCard } from '../../../components/flowers/FlowerCard';
import { useEffect, useRef, useState } from 'react';
import { bouquetStore } from '../../../stores/bouquetStore';
import CustomButton from '../../button/CustomButton';

interface RecommendProps {
	CloseListModal: () => void;
}

export const FlowerListModal = ({ CloseListModal }: RecommendProps) => {
	const { allFlowers } = bouquetStore.getState();

	const navigate = useNavigate();

	const fixedRef = useRef<HTMLDivElement>(null);
	const [fixedHeight, setFixedHeight] = useState<number>(0);
	const [clickIndex, setClickIndex] = useState<number>(-1);

	const goToGenerate = () => {
		CloseListModal();
		navigate('/generate');
	};

	useEffect(() => {
		if (fixedRef.current) {
			setFixedHeight(fixedRef.current.offsetHeight);
		}
	}, []);

	const clickOnList = (index: number) => {
		setClickIndex(index);
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
					<StyledConfirmInfo fixedHeight={fixedHeight}>
						{/* 카드 스크롤 영역 */}
						<StyledScroll>
							{allFlowers.map(($item, index) => {
									const meanings = $item.meaning.split(',').map((item) => item.trim());
									// 꽃말에 의한 추천, 꽃말만 추출 후 분리
								return (
									<StyledClickArea
										onClick={() => clickOnList(index)}
										$isChoice={index === clickIndex}
									>
										<FlowerCard
											$isMain={true}
											$isSelected={false}
											$recommend={false}
											$name={$item.name}
											$meaning={meanings}
											link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
										/>
									</StyledClickArea>
								);
							})}
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
