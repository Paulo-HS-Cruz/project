import React from "react";
import '../styles/Footer.css'; 
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>Chef Priscila Deus &copy; Todos os direitos reservados.</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/chefprisciladeus/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon />
                    </a>                  
                </div>
            </div>
        </footer>
    );
};

export default Footer;
