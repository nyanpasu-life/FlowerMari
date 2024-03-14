import { useState, useRef, useEffect } from 'react';
import { FlowerCard } from '../../components/flowers/FlowerCard';
import { AccordionSection, AccordionMenu, AccordionIcon, AccordionContent, AccordionText } from './StyledAccordion';
import { EmptyFlowerCard } from '../emptyFlower/EmptyFlowerCard';

interface RecommendItem {
	$url: string;
	$name: string;
	$meaning: string[];
}

interface RecommendProps {
	$index: number;
	$item: {
		$name: string;
		$meaning: string[];
	};
	$recommendArrays: RecommendItem[];
	openListModal: (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Accordion = ({ $index, $item, $recommendArrays, openListModal }: RecommendProps) => {
	const [active, setActive] = useState(false); // 아코디언 활성 여부
	const [height, setHeight] = useState('0px'); // 아코디언 메뉴 높이
	const content = useRef<HTMLDivElement>(null);

	const [empty, setEmpty] = useState(false); // 아코디언 활성 여부

	useEffect(() => {
		setHeight(active ? `${content.current?.scrollHeight}px` : '0px');
	}, [active]); // 활성 여부에 따라 높이 조정

	const toggleAccordion = () => {
		setActive(!active);
	}; // 활성 여부 변경

	const clickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setEmpty(true);
		e.stopPropagation();
	};

	const clickAddFlower = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setEmpty(false);
		e.stopPropagation();
	};

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
							$name={$item.$name}
							$meaning={$item.$meaning}
							clickDelete={(e) => clickDelete(e)}
							link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
						/>
						<AccordionIcon className={active ? 'rotate' : ''}>▶</AccordionIcon>
					</AccordionMenu>
				)}

				{empty && (
					<AccordionMenu>
						<EmptyFlowerCard $recommend={true} clickAddFlower={(e) => clickAddFlower(e)}></EmptyFlowerCard>
					</AccordionMenu>
				)}

				{/* 아코디언 collapse 메뉴 */}
				<AccordionContent ref={content} style={{ height: height }}>
					<AccordionText $marginLeft='5vw' $marginTop='2vh' $marginBottom='-2vh'>
						이 꽃은 어떠세요?
					</AccordionText>
					{$recommendArrays.map((extractedItem, idx) => (
						<FlowerCard
							key={idx}
							$isMain={false}
							$name={extractedItem.$name}
							$meaning={extractedItem.$meaning}
							link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
						/>
					))}
					{/* 모든 꽃 리스트를 보는 버튼(공간) */}
					<EmptyFlowerCard $recommend={false} openListModal={openListModal}></EmptyFlowerCard>
				</AccordionContent>
			</div>
		</AccordionSection>
	);
};
