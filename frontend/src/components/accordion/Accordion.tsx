import { useState, useRef, useEffect } from 'react';
import { FlowerCard } from '../../components/flowers/FlowerCard';
import { AccordionSection, AccordionMenu, AccordionIcon, AccordionContent, AccordionText } from './StyledAccordion';

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
}

export const Accordion = ({ $index, $item, $recommendArrays }: RecommendProps) => {
	const [active, setActive] = useState(false); // 아코디언 활성 여부
  const [height, setHeight] = useState('0px'); // 아코디언 메뉴 높이
	const content = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setHeight(active ? `${content.current?.scrollHeight}px` : '0px');
	}, [active]); // 활성 여부에 따라 높이 조정

	const toggleAccordion = () => {
		setActive(!active);
	}; // 활성 여부 변경

	return (
		<AccordionSection>
			<div className='accordion__section'>
        {/* 아코디언 상단 메뉴 */}
				<AccordionMenu className={`accordion ${active ? 'active' : ''}`}  >
          {/* 메인 꽃 여부, 버튼 클릭 여부, 이름, 꽃말, 최초 추천 꽃 여부 */}
					<FlowerCard
						$isMain={$index === 0}
            $isSelected={active}
						$name={$item.$name}
						$meaning={$item.$meaning}
						$used={true}
            accordianClick={toggleAccordion}
						link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					/>
					<AccordionIcon className={active ? 'rotate' : ''}>▶</AccordionIcon>
				</AccordionMenu>
        {/* 아코디언 collapse 메뉴 */}
				<AccordionContent ref={content} style={{ maxHeight: height }}>
        <AccordionText $marginLeft='5vw' $marginTop='2vh' $marginBottom='-1vh'>이 꽃은 어떠세요?</AccordionText>
					{$recommendArrays.map((extractedItem, idx) => (
							<FlowerCard
                key={idx}
								$isMain={false}
								$name={extractedItem.$name}
								$meaning={extractedItem.$meaning}
								$used={false}
								link='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
							/>
					))}
				</AccordionContent>
			</div>
		</AccordionSection>
	);
};
