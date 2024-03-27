import { Accordion } from '../../components/accordion/Accordion';
import { Header } from '../../components/header/Headerbar';
import { StyledGeneratePage, StyledBouquetImage } from './StyledGeneratePage';
import { useEffect, useState } from 'react';
import { MakeModal } from '../../components/modal/makeModal/MakeModal';
import { FlowerListModal } from '../../components/modal/flowerModal/FlowerListModal';
import { bouquetStore } from '../../stores/bouquetStore';
import CustomButton from '../../components/button/CustomButton';
import { postRegenerateInputs } from '../../api/bouquetReCreate.ts'
import setupSSE from "../../utils/sse.ts";
type FlowerDto = {
	flowerId: number;
	name: string;
	color: string;
	meaning: string;
	imgUrl: string;
};

export const GeneratePage = () => {
	const {bouquetUrl,usedFlower, recommendByMeaning, allFlowers, setBouquetData,recommendByPopularity} = bouquetStore.getState();
	const [isMakeModalOpened, setIsMakeModalOpened] = useState(false);
	const [isListModalOpened, setIsListModalOpened] = useState(false);
	
	const [isLoading, setIsLoading] = useState(true);

	const [usedFlowerIndexs, setUsedFlowerIndexs] = useState<number[]>([]);
	// 확인 모달, 꽃 전체 리스트 모달 여부

	const [selectIdByIndex, setSelectIdByIndex] = useState<number[]>([-1, -1, -1]);
	const [userSelectIndex, setUserSelectIndex] = useState<number>(-1);
	const [userSelectId, setUserSelectId] = useState<number>(-1);
	// 유저가 선택한 각 꽃 별 추가 꽃
	// 선택한 꽃의 위치(0, 1, 2)
	// 유저가 선택한 꽃의 id

	const html = document.querySelector('html');

	useEffect(() => {
		setupSSE({
			onOpen: () => setIsLoading(true),
			onDataReceived: (data) => {
				setBouquetData(data);
				setIsLoading(false);
			},
			onError: () => setIsLoading(false)
		});

		return () => {

		};
	}, []);

	useEffect(() => {
		console.log("usedFlower:", usedFlower);
	}, [usedFlower]);


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

	const openListModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index : number) => {
		setIsListModalOpened(true);
		setUserSelectIndex(index);
		e.stopPropagation();
		html?.classList.add('scroll-locked');
	}; // 꽃 전체 리스트 모달 열기

	const CloseListModal = () => {
		setIsListModalOpened(false);
		html?.classList.remove('scroll-locked');
	}; // 꽃 전체 리스트 모달 닫기

	useEffect(() => {
		if(userSelectId !== -1 && userSelectIndex !== -1) {
			const newState = [...selectIdByIndex];
			newState[userSelectIndex] = userSelectId;
			setSelectIdByIndex(newState.map((id) => id));

			setUserSelectId(-1)
			setUserSelectIndex(-1)
		}
	}, [userSelectId, userSelectIndex]);
	// 새로 꽃을 추가했다면, 그 값을 저장하고
	// 임시 변수는 초기화

	const changeFlower = (index: number, newFlower: number) => {
		const newState = [...usedFlowerIndexs];
		newState[index] = newFlower;
		setUsedFlowerIndexs(newState.map((flower) => flower));
	}; // 기본 추천 꽃과 새로운 추천 꽃의 위치를 바꿀 때

	const selectUserFlower = (id : number) => {
		setUserSelectId(id)
	} // 추가하려는 꽃의 id

	const handleSubmit = async () => {
		const inputs: string[] = ['빨강 장미', '수국', '백합'];
		await postRegenerateInputs(inputs);
	};

	if (isLoading) {
		return <div>loading...</div>
	}
	
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
							openListModal={(e) => openListModal(e, index)}
							changeFlower={changeFlower}
							$userSelectId={selectIdByIndex[index]}
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
			{isListModalOpened && <FlowerListModal CloseListModal={CloseListModal} selectUserFlower={selectUserFlower}></FlowerListModal>}
		</>
	);
};
