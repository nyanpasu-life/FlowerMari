import { Accordion } from '../../components/accordion/Accordion';
import { Header } from '../../components/header/Headerbar';
import { StyledGeneratePage, StyledBouquetImage } from './StyledGeneratePage';
import {useEffect, useState} from 'react';
import { MakeModal } from '../../components/modal/makeModal/MakeModal';
import CustomButton from '../../components/button/CustomButton';
import { FlowerListModal } from '../../components/modal/flowerModal/FlowerListModal';
import { bouquetStore } from '../../stores/bouquetStore';
import { postRegenerateInputs } from '../../api/bouquetReCreate.ts'

export const GeneratePage = () => {
	const {bouquetUrl,usedFlower, recommendByMeaning, allFlowers, setBouquetData,recommendByPopularity} = bouquetStore.getState();
	const [isMakeModalOpened, setIsMakeModalOpened] = useState(false);
	const [isListModalOpened, setIsListModalOpened] = useState(false);
	// 확인 모달, 꽃 전체 리스트 모달
	//확인
	const html = document.querySelector('html');

	const uf = allFlowers.filter((flower) => usedFlower.includes(flower.flowerId));
	// 사용된 꽃 목록 추출
	const colors = uf.map((flower) => flower.color);
	// 사용된 꽃 색상 추출
	const meanings = uf.map((flower) => flower.meaning.split(',').map((item) => item.trim()));
	// 사용된 꽃 꽃말 추출

	const flowersByMeaning = allFlowers.filter((flower) => recommendByMeaning.includes(flower.flowerId));
	// 꽃말로 추천할 목록 추출

	const openModal = () => {
		setIsMakeModalOpened(true);
		html?.classList.add('scroll-locked');
	}; // 확인 모달 열기

	const closeModal = () => {
		setIsMakeModalOpened(false);
		html?.classList.remove('scroll-locked');
	}; // 확인 모달 닫기

	const openListModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsListModalOpened(true);
		e.stopPropagation();
		html?.classList.add('scroll-locked');
	}; // 꽃 전체 리스트 모달 열기

	const CloseListModal = () => {
		setIsListModalOpened(false);
		html?.classList.remove('scroll-locked');
	}; // 꽃 전체 리스트 모달 닫기

	const handleSubmit = async () => {
		const inputs: string[] = ['빨강 장미', '수국', '백합'];
		await postRegenerateInputs(inputs);
	};

	return (
		<>
			<StyledGeneratePage>
				{/* 로그인 헤더 */}
				<Header link='https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg'></Header>
				<StyledBouquetImage
					src='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					alt='img'
				></StyledBouquetImage>
				{/* 최초 추천 꽃 + 변경 추천 꽃 */}
				{uf.map((item, index) => {
					return (
						<Accordion
							key={index}
							$index={index}
							$name={uf[index].name}
							$meaning={meanings[index]}
							$color={colors[index]}
							$recommendByMeaning={flowersByMeaning[index]}
							openListModal={(e) => openListModal(e)}
						></Accordion>
					);
				})}
				<div style={{ marginBottom: '2vh' }}>
					<CustomButton $check={true} onClick={openModal}>
						확인
					</CustomButton>
					<CustomButton onClick={handleSubmit}>
						재생성
					</CustomButton>
				</div>
			</StyledGeneratePage>

			{/* 완성 확인 모달 */}
			{isMakeModalOpened && <MakeModal closeModal={closeModal}></MakeModal>}
			{/* 꽃 전체 리스트 모달 */}
			{isListModalOpened && <FlowerListModal CloseListModal={CloseListModal}></FlowerListModal>}
		</>
	);
};
