import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useTheme } from '../DarkMode/DarkModeTheme'; 
import { FaSun, FaMoon } from 'react-icons/fa'; 

const Nav = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  background: #374357; 
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  padding: 0 2rem;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: ${({ sidebarOpen }) => (sidebarOpen ? 'flex-start' : 'center')};
  align-items: center;
  color: #f5f5f5;
  transition: margin-left 0.3s ease;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '2rem')};
`;

const SidebarNav = styled.nav`
  background: #2e3848;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: left 300ms;
  z-index: 1001;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #262c38;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #262c38;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: #f5f5f5;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  &:hover {
    color: #f5f5f5;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;


const Sidebar = ({ sidebar, showSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    showSidebar();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#f5f5f5' }}>
        <Nav>
          <NavIcon to="#" sidebarOpen={sidebarOpen}>
            <FaIcons.FaBars onClick={handleSidebarToggle} />
          </NavIcon>
          <ThemeToggleButton onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggleButton>
        </Nav>
        <SidebarNav sidebar={sidebarOpen}>
          <SidebarWrap>
            <NavIcon to="#">
              Aqui vai ser foto e nome
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
