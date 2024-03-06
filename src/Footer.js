import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="sm:flex justify-between w-full text-darker font-bold bg-slate-400">
            <div className="p-5 sm:p-10">
                <div>CONTACT</div>
                <div>tylerstreesolutions@gmail.com</div>
                <div>(585) 802 - 9632 </div>
            </div>

            <div className="p-5 sm:p-10">
            <div>CONNECT</div>
                <div>Want to talk trees?</div>
                <div>
                    <a href="mailto:tylerstreesolutions@gmail.com" className="p-1 hover:text-dark"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https//:" className="p-1 hover:text-dark"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="tel:585-802-9632" className="p-1 hover:text-dark"><FontAwesomeIcon icon={faPhone}/></a>
                
                </div>
            </div>

            <div className="p-5 sm:p-10">
                <div>5.0</div>
                
                <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="font-bold hover:text-dark">
                    <a href="https://www.google.com/search?q=tylers+tree+solutions&rlz=1C5CHFA_enUS899US899&oq=tylers&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIMCAAQRRg5GLEDGIAEMgYIARBFGDsyCQgCEAAYChiABDIJCAMQABgKGIAEMgcIBBAAGIAEMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEIMzc0NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x89d153a2289fe4e9:0xb8b8532813616cc2,3,,,," 
                        target="_blank"
                        rel="noopener">
                        GREAT EXPERIENCE? LEAVE A REVIEW</a>
                </div>

            </div>
        </div>
    )
};

export default Footer;