import { StyledHeader, StyledMargin } from './StyledHeaderbar';
import { Avatar } from '../avatar/Avatar';
interface MenuProps {
	link?: string;
}

export const Header = ({ link}: MenuProps) => {
	return (
		<>
			<StyledHeader>
				<StyledMargin>
					{/* 프로필 사진 */}
					<Avatar link={link}></Avatar>
				</StyledMargin>
			</StyledHeader>
		</>
	);
};
