import { StyledMenu, StyledMenuButton, StyledMenuImg, StyledMenuText } from "./StyledMenu";
import { Avatar } from "../avatar/Avatar";
import { useNavigate } from 'react-router-dom';
import make from './../../assets/images/make.svg'
import search from './../../assets/images/search.svg'
import find from './../../assets/images/find.svg'

interface MenuProps {
  link?: string;
}

export const Menu = ({ link }: MenuProps) => {

  const navigate = useNavigate();

  const goToGenerate = () => {
		navigate('/index');
	};

  const goToSearch = () => {
		navigate('/search');
	};

  const goToFind = () => {
		navigate('/find');
	};

  return (
    <StyledMenu>
      <StyledMenuButton onClick={goToGenerate}>
        <StyledMenuImg src={make} alt="make"></StyledMenuImg>
        <StyledMenuText $marginLeft="-0.6vw">만들기</StyledMenuText>
      </StyledMenuButton>

      <StyledMenuButton>
        <StyledMenuImg src={search} alt="search"></StyledMenuImg>
        <StyledMenuText>검색</StyledMenuText>
      </StyledMenuButton>

      <StyledMenuButton>
        <StyledMenuImg src={find} alt="find"></StyledMenuImg>
        <StyledMenuText>꽃집 찾기</StyledMenuText>
      </StyledMenuButton>
    </StyledMenu>
  );
};