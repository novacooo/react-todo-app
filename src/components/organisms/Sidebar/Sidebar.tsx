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
  transition: visibility 0.6s, opacity 0.6s;
`;

const Container = styled.div<ISidebarProps>`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: ${({ active }) => (active ? '0' : '-85%')};
  z-index: 2;
  width: 85%;
  height: 100%;
  background-color: ${({ theme }) => theme.BG_SECONDARY};
  box-shadow: ${({ theme }) => theme.DIALOG_SHADOW};
  border-right: 4px solid ${({ theme }) => theme.MAIN_BORDER};
  transition: visibility 0.6s, left 0.6s;
`;

const Sidebar = ({ active = false, onClickBg }: ISidebarProps): JSX.Element => {
  const handleClick = () => {
    if (onClickBg) onClickBg();
  };

  return (
    <>
      <Container active={active}></Container>
      <DarkContainer active={active} onClick={handleClick} />
    </>
  );
};

export default Sidebar;
