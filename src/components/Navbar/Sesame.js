import React, { useContext } from 'react';
import logo from '../../images/globuzzer_logo.png';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { AnchorContext } from '../.././contexts/AnchorContext';
import { ContactContext } from '../.././contexts/ContactContext';
import style from './Sesame.module.css';

const Sesame = ({ openSesame, handleOpen}) => {

  const { top, footer, testimonials, } = useContext(AnchorContext);
  const { handleContact } = useContext(ContactContext);

  const handleSesame = () => {
    handleOpen(!openSesame)
  }

    // const closeStyle = {
    //    // animationName: openSesame ? "menuAnimation" : "backAnimation"
    //   animationFillMode: openSesame ? "backwards" : "forwards"
    // };

   const handleClick = (anchor) => {
            anchor.current.scrollIntoView({behavior: "smooth"});
        }

  return (
    <div className={style.floating}>
          <div className={style.["sesame-container"]}>
            <div>
              <img src={logo} alt="logo" className={style.["sesame-logo"]}/>
            </div>
            <div className={style.["sesame-links"]}>
              <div className={style.link}>
                <GoLocation />
                <a href="#www" onClick={handleSesame}>Testimonials</a>
              </div>
              <div className={style.link}>
                <AiOutlineQuestionCircle />
                <a  onClick={() => {handleContact(); handleSesame()}} style={{cursor:"pointer"}}>Contact us</a>
              </div>
            </div>
          </div>
          <div className={style.["ghost-button"]} style={{color:"#FFFFFF", background:"#F24B6A", margin:"33px auto 0"}}>
            <p onClick={handleSesame}>Get started</p>
          </div>
        </div>
  );
}

export default Sesame;
