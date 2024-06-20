import { Outlet } from 'react-router-dom'
import Sidebar from './Menu/Sidebar'
import { useState } from 'react'
import { useTheme } from './DarkMode/DarkModeTheme';

function Sistema() {
  // define estado da sidebar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {setSidebar(!sidebar);};

  // Obtendo o tema atual e a função para alternar o tema do contexto
  const { theme, toggleTheme } = useTheme();

  // ln 15 - apenas 'container' se 'sidebar' estiver fechado, caso contrario, classe tambem chamada de 'sidebar-open'(para o css)
  return (
    <>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      <div className={`container ${sidebar ? 'sidebar-open' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}
export default Sistema;