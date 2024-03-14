import { Accordion } from '../../components/accordion/Accordion';
import { StyledGeneratePage, StyledBouquetImage } from './StyledGeneratePage';
import { useState } from 'react';
import { MakeModal } from '../../components/modal/makeModal/MakeModal';
import CustomButton from '../../components/button/CustomButton';
import { FlowerListModal } from '../../components/modal/flowerModal/FlowerListModal'
interface BouquetProps {
	link?: string;
}

export const GeneratePage = ({ link }: BouquetProps) => {
	type MyArrayItem = {
		$name: string;
		$meaning: string[];
	};

	type RecommendItem = {
		$url: string;
		$name: string;
		$meaning: string[];
	};

	const arrayOfArrays: MyArrayItem[] = [
		{ $name: '레이스 플라워', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
		{ $name: '레이스', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
		{ $name: '플라워', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
	];

	const recommendArrays: RecommendItem[] = [
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워0',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워1',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워2',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워3',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워4',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워5',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워6',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워7',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
		{
			$url: 'https://velog.velcdn.com/images/lee02g29/post/f8a6d452-d26a-48e9-9465-aaea784da297/image.jpg',
			$name: '레이스 플라워8',
			$meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'],
		},
	];

	const [isMakeModalOpened, setIsMakeModalOpened] = useState(false);
	const [isListModalOpened, setIsListModalOpened] = useState(false);

	const html = document.querySelector('html');

	const openModal = () => {
    setIsMakeModalOpened(true);
    html?.classList.add('scroll-locked');
  };

	const closeModal = () => {
		setIsMakeModalOpened(false);
		html?.classList.remove('scroll-locked');
	};

	const openListModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsListModalOpened(true)
		e.stopPropagation();
		html?.classList.add('scroll-locked');
	}

	const CloseListModal = () => {
		setIsListModalOpened(false)
		html?.classList.remove('scroll-locked');
	}

	return (
		<>
			<StyledGeneratePage>
				<StyledBouquetImage
					src='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					alt='img'
				></StyledBouquetImage>
				{/* 꽃 하나 당 추천 꽃 세개 묶음 */}
				{arrayOfArrays.map((item, index) => {
					const startIdx = index * 3;
					const endIdx = startIdx + 3;
					const extractedItems = recommendArrays.slice(startIdx, endIdx);
					{
						/* 추천 꽃 추출 */
					}

					return (
						<Accordion
							key={index}
							$index={index}
							$item={item}
							$recommendArrays={extractedItems}
							openListModal={(e) => openListModal(e)}
						></Accordion>
					);
				})}
				<div style={{ marginBottom: '2vh' }}>
					<CustomButton $check={true} onClick={openModal}>확인</CustomButton>
				</div>
			</StyledGeneratePage>

			{isMakeModalOpened && <MakeModal closeModal={closeModal}></MakeModal>}
			{isListModalOpened && <FlowerListModal CloseListModal={CloseListModal}></FlowerListModal>}
		</>
	);
};
