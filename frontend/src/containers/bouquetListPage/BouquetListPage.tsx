import { Menu } from '../../components/menu/Menubar';
import { Header } from '../../components/header/Headerbar';
import {
	StyledBouquetListPage,
	StyledInput,
	BouquetListGrid,
	StyledBouquetImage,
	SearchBar,
} from './StyledBouquetListPage';
import { BouquetDetailModal } from '../../components/modal/bouquetDetailModal/BouquetDetailModal';
import { SearchDropdown } from '../../components/dropdown/searchDropDown/SearchDropDown';
import { ChangeEvent, useState } from 'react';
import CustomButton from '../../components/button/CustomButton';

export const BouquetListPage = () => {
	const [isBouquetDetailModal, setIsBouquetDetailModal] = useState(false);
	const [extractedItems, setExtractedItems] = useState<RecommendItem[]>([]);
	const [inputValue, setInputValue] = useState('');	

	const html = document.querySelector('html');

	const openModal = (index: number) => {
		setIsBouquetDetailModal(true);

		const startIdx = index * 3;
		const endIdx = startIdx + 3;
		setExtractedItems(recommendArrays.slice(startIdx, endIdx));

		html?.classList.add('scroll-locked');
	};

	const closeModal = () => {
		setIsBouquetDetailModal(false);
		html?.classList.remove('scroll-locked');
	};

	const getInputValue = (e : ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

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
		{ $name: '플라워2', $meaning: ['정열', '화려함', '당신의 사랑이 나를 행복하게 합니다'] },
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

	return (
		<>
			<StyledBouquetListPage>
				{/* 로그인 헤더 */}
				<Header link='https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg'></Header>
				{/* 검색창 - 드롭다운, 입력창, 버튼 순 */}
				<SearchBar>
					<SearchDropdown></SearchDropdown>
					<StyledInput onChange={getInputValue}></StyledInput>
					<CustomButton $check={true}>검색</CustomButton>
				</SearchBar>
				{/* 꽃다발 사진 그리드 */}
				<BouquetListGrid>
					{arrayOfArrays.map((item, idx) => {
						return <StyledBouquetImage key={idx} onClick={() => openModal(idx)} />;
					})}
				</BouquetListGrid>
			</StyledBouquetListPage>
			{/* 하단 메뉴바 */}
			<Menu></Menu>
			{/* 꽃다발 상세 정보 모달 */}
			{isBouquetDetailModal && extractedItems.length > 0 && (
				<BouquetDetailModal closeModal={closeModal} $flowers={extractedItems}></BouquetDetailModal>
			)}
		</>
	);
};
