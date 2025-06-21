import React, { ReactNode } from "react";
import Navbar from "./UI/Components/Fields/NavBar/Navbar";





interface LayoutProps {
    children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="mainWrapper">
            <Navbar />
            <div className="pageWrapper">
                {children}
            </div>
        </div>
    );
};
export default Layout;
