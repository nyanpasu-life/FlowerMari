import { Menu } from '../../components/menu/Menubar';
import { StyledCompletePage, StyledBouquetImage, StyledText } from './StyledCompletePage';

export const CompletePage = () => {
	return (
		<>
			<StyledCompletePage>
				<StyledText $marginTop='0vh' $marginBottom='0.5vh'>
					꽃마리 님에게 전달할{' '}
				</StyledText>
				<StyledText $marginTop='0vh' $marginBottom='0.5vh'>
					꽃다발이 완성되었어요!{' '}
				</StyledText>
				<StyledBouquetImage
					src='https://velog.velcdn.com/images/lee02g29/post/8160a3b5-8123-4b91-95d1-f813781f6000/image.png'
					alt='img'
				></StyledBouquetImage>
			</StyledCompletePage>
      <Menu link='https://src.hidoc.co.kr/image/lib/2022/11/15/1668491763670_0.jpg'></Menu>
		</>
	);
};
