import { useState } from 'react';
import {
	StyledCard,
	StyledInfo,
	StyledFlowerArea,
	StyledRecommend,
	StyledAddButton,
	AddSpan,
} from './StyledEmptyFlowerCard';

import EmptyFlower from '../../assets/images/emptyFlower.svg'

interface FlowerProps {
	$recommend: boolean
	clickAddFlower?: (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	openListModal?: (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const EmptyFlowerCard = ({$recommend, clickAddFlower, openListModal } : FlowerProps) => {

	return (
		<>
			<StyledCard>
				{/* 꽃 이미지 */}
				<StyledFlowerArea>
					<StyledRecommend src={EmptyFlower}></StyledRecommend>
				</StyledFlowerArea>
				{/* 꽃말 정보 */}
				{$recommend && (<StyledInfo onClick={clickAddFlower}>
					<StyledAddButton >
						<AddSpan className='material-symbols-outlined'>add_circle</AddSpan>
					</StyledAddButton>
				</StyledInfo>)}

				{!$recommend && (<StyledInfo onClick={openListModal}>
					<StyledAddButton >
						<AddSpan className='material-symbols-outlined'>add_circle</AddSpan>
					</StyledAddButton>
				</StyledInfo>)}
			</StyledCard>
		</>
	);
};
