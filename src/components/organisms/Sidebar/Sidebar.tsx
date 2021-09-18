import ModeButton from 'components/molecules/ModeButton/ModeButton';
import ThemeButton from 'components/molecules/ThemeButton/ThemeButton';
import React from 'react';
import styled from 'styled-components';

interface ISidebarProps {
  active?: boolean;
  onClickBg?: () => void;
}

const DarkContainer = styled.div<ISidebarProps>`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.BG_DARKEN};
  transition: visibility 0.4s, opacity 0.4s;
`;

const Container = styled.div<ISidebarProps>`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 30px;
  width: 80%;
  height: 100%;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  box-shadow: ${({ theme }) => theme.DIALOG_SHADOW};
  border-right: 4px solid ${({ theme }) => theme.MAIN_BORDER};
  transform: translateX(${({ active }) => (active ? '0' : '-100%')});
  transition: visibility 0.4s, transform 0.4s;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Sidebar = ({ active = false, onClickBg }: ISidebarProps): JSX.Element => {
  const handleClick = () => {
    if (onClickBg) onClickBg();
  };

  return (
    <>
      <Container active={active}>
        <ButtonsContainer>
          <ModeButton />
          <ThemeButton />
        </ButtonsContainer>
      </Container>
      <DarkContainer active={active} onClick={handleClick} />
    </>
  );
};

export default Sidebar;
