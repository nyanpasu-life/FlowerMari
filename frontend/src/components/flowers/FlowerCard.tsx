import { useState } from 'react';
import { StyledCard, StyledInfo, StyledRecommendBtn, StyledName, StyledLanguage, TextAlign } from './StyledFlowerCard';

interface FlowerProps {
	link?: string;
	$isMain?: boolean;
	$isSelected?: boolean;
	$name?: string;
	$meaning?: Array<String>;
	$used?: boolean;
	accordianClick?: () => void;
}

export const FlowerCard = ({ link, $isMain, $isSelected, $name, $meaning, $used, accordianClick }: FlowerProps) => {

	return (
		<>
			<StyledCard>
				{/* 꽃 이미지 */}	
				<StyledRecommendBtn
					src={link}
					$isMain={$isMain}
					$isSelected={$isSelected}
					disabled={!$used}
					onClick={() => {
						if (accordianClick) {
							accordianClick();
						}
					}}
				></StyledRecommendBtn>
				{/* 꽃말 정보 */}
				<StyledInfo>
					<TextAlign $align='left'>
						<StyledName $marginLeft='0.5vw' $marginTop='1.2vh'>
							{$name}
						</StyledName>
						{$meaning &&
							$meaning.length > 0 &&
							$meaning.map((meaning, index) => (
								<StyledLanguage key={index} $marginLeft='0.5vw' $marginTop='0.5vh'>
									{' '}
									{'ㆍ'}{meaning}{' '}
								</StyledLanguage>
							))}
					</TextAlign>
				</StyledInfo>
			</StyledCard>
		</>
	);
};
