import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="sm:flex justify-between w-full text-slate-200 font-bold bg-slate-500">
            <div className="p-5 sm:p-10">
                <div>HELLO WORLD</div>
                <div>dark mode is the best mode</div>
                
            </div>

            <div className="p-5 sm:p-10">
            <div>CONNECT WITH ME</div>
                <div>
                    <a href="mailto:grace.nieboer@outlook.com" className="p-1 hover:text-white"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https://github.com/gnieb" className="p-1 hover:text-dark"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/gracenieboer/" className="p-1 hover:text-dark"><FontAwesomeIcon icon={faLinkedin}/></a>
                
                </div>
            </div>

            <div className="p-5 sm:p-10">
               
                    <div>WANT MORE?</div>
             
                <div className="font-bold hover:text-white">
                    <a href="https://gracenieboer.netlify.app/">PORTFOLIO<FontAwesomeIcon icon={faBoltLightning}/></a>
                </div>

            </div>
        </div>
    )
};

export default Footer;