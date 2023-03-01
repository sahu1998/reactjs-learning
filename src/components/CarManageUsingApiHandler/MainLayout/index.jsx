import React from 'react';
import SideNavBar from "./SideNavBar";
const MainLayout = ({children}) => {
    return (  
        <SideNavBar>
            {children}
        </SideNavBar>
    );
}
 
export default MainLayout;