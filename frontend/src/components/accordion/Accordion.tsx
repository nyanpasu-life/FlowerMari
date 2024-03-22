import { useState, useRef, useEffect } from 'react';
import { FlowerCard } from '../../components/flowers/FlowerCard';
import { AccordionSection, AccordionMenu, AccordionIcon, AccordionContent, AccordionText } from './StyledAccordion';
import { EmptyFlowerCard } from '../emptyFlower/EmptyFlowerCard';
import { bouquetStore } from '../../stores/bouquetStore';

interface RecommendItem {
	flowerId: number;
	name: string;
	color: string;
	meaning: string;
	imgUrl: string;
}

interface RecommendProps {
	$index: number;
	$name: string;
	$meaning: string[];
	$color: string;
	$recommendByMeaning: RecommendItem;
	openListModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Accordion = ({ $index, $name, $meaning, $color, $recommendByMeaning, openListModal }: RecommendProps) => {
	const [active, setActive] = useState(false); // 아코디언 활성 여부
	const [height, setHeight] = useState('0px'); // 아코디언 메뉴 높이
	const [empty, setEmpty] = useState(false); // 아코디언 활성 여부
	const [clickIndex, setClickIndex] = useState<number>(-1); // 클릭 인덱스

	const [recommendIndexByColor, setRecommendIndexByColor] = useState<number>(0);
	const [recommendIndexByPopularity, setRecommendIndexByPopularity] = useState<number>(0);

	const content = useRef<HTMLDivElement>(null);

	const { allFlowers, recommendByPopularity } = bouquetStore.getState();

	useEffect(() => {
		setHeight(active ? `${content.current?.scrollHeight}px` : '0px');
	}, [active]); // 활성 여부에 따라 높이 조정

	const toggleAccordion = () => {
		setActive(!active);

		if(active) {
			setClickIndex(-1);
		} else {
			setClickIndex($index);
		}
	}; // 활성 여부 변경

	const clickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setEmpty(true);
		setActive(false);
		e.stopPropagation();
	}; // 삭제버튼 클릭

	const clickAddFlower = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setEmpty(false);
		e.stopPropagation();
	}; // 추가버튼 클릭

	const meaningsByMeaning = $recommendByMeaning.meaning.split(',').map((item) => item.trim());
	// 꽃말에 의한 추천, 꽃말만 추출 후 분리

	const flowersByColor = allFlowers.filter((flower) => $color === flower.color && !($name === flower.name));

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * flowersByColor.length);
		setRecommendIndexByColor(randomIndex);
	}, []);
	// useEffect 사용 이유 : 최초 랜덤값 추출 이후, 랜덤값의 변화가 없어야해서
	const meaningsByColor = flowersByColor[recommendIndexByColor].meaning.split(',').map((item) => item.trim());
	// 색상이 같은 꽃들 추출, 같은 꽃이면 추천 안받도록하기
	// 색상에 의한 추천, 색상이 같은 꽃 중 랜덤으로 하나 추천
	// 이후 선정된 꽃의 꽃말 분리

	// 인기도에 의한 추천
	const flowersByPopularity = allFlowers.filter(
		(flower) =>
			!(flower.name === $recommendByMeaning.name) &&
			!(flower.name === flowersByColor[recommendIndexByColor].name) &&
			!(flower.name === $name) &&
			recommendByPopularity.includes(flower.flowerId),
	); // 꽃말에 의한 추천, 색에 의한 추천, 원래 꽃을 제외하고
	// 그 중에서 인기도에 의한 추천에 해당하는 꽃을 추출

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * flowersByPopularity.length);
		setRecommendIndexByPopularity(randomIndex);
	}, []);

	const meaningsByPopularity = flowersByPopularity[recommendIndexByPopularity].meaning
		.split(',')
		.map((item) => item.trim());
	// 이후 선정된 꽃의 꽃말 분리

	return (
		<AccordionSection>
			<div className='accordion__section'>
				{/* 아코디언 상단 메뉴 */}
				{!empty && (
					<AccordionMenu className={`accordion ${active ? 'active' : ''}`} onClick={toggleAccordion}>
						{/* 메인 꽃 여부, 버튼 클릭 여부, 추천 꽃여부, 이름, 꽃말, 이미지 주소 */}
						<FlowerCard
							$isMain={$index === 0}
							$isSelected={active}
							$recommend={true}
							$name={$name}
							$meaning={$meaning}
							$isChoice={$index === clickIndex}
							clickDelete={(e) => clickDelete(e)}
							link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
						/>
						<AccordionIcon className={active ? 'rotate' : ''}>▶</AccordionIcon>
					</AccordionMenu>
				)}

				{/* 상단 메뉴이고, 삭제해서 현재 빈 칸인 경우 */}
				{empty && (
					<AccordionMenu>
						<EmptyFlowerCard $recommend={true} clickAddFlower={(e) => clickAddFlower(e)}></EmptyFlowerCard>
					</AccordionMenu>
				)}

				{/* 아코디언 collapse 메뉴 */}
				<AccordionContent ref={content} style={{ height: height }}>
					<AccordionText $marginLeft='2.5vw' $marginTop='2vh' $marginBottom='-2vh'>
						이 꽃은 어떠세요?
					</AccordionText>
					<FlowerCard
						$isMain={false}
						$name={$recommendByMeaning.name}
						$meaning={meaningsByMeaning}
						link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					/>
					<FlowerCard
						$isMain={false}
						$name={flowersByColor[recommendIndexByColor].name}
						$meaning={meaningsByColor}
						link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					/>
					<FlowerCard
						$isMain={false}
						$name={flowersByPopularity[recommendIndexByPopularity].name}
						$meaning={meaningsByPopularity}
						link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					/>
					{/* 모든 꽃 리스트를 보는 버튼(공간) */}
					<EmptyFlowerCard $recommend={false} openListModal={openListModal}></EmptyFlowerCard>
				</AccordionContent>
			</div>
		</AccordionSection>
	);
};
