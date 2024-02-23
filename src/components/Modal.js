import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/screenshots/ChatBox/Home.png";
import img2 from "../assets/screenshots/ChatBox/Messages.png";
import img3 from "../assets/screenshots/ChatBox/Auth.png";
import img4 from "../assets/screenshots/ChatBox/Settings.png";

import nike1 from "../assets/screenshots/Nike/LoginSignup.png";
import nike2 from "../assets/screenshots/Nike/Shop.png";
import nike3 from "../assets/screenshots/Nike/Product.png";
import nike4 from "../assets/screenshots/Nike/CartPayments.png";

import spotify1 from "../assets/screenshots/Spotify/Home.png";
import spotify2 from "../assets/screenshots/Spotify/Auth.png";
import spotify3 from "../assets/screenshots/Spotify/Play.png";
import spotify4 from "../assets/screenshots/Spotify/Music.png";
import spotify5 from "../assets/screenshots/Spotify/Liked.png";

import fonkeytype1 from '../assets/screenshots/FonkeyType/Auth.png'
import fonkeytype2 from '../assets/screenshots/FonkeyType/Home.png'
import fonkeytype3 from '../assets/screenshots/FonkeyType/Result.png'

import pomo1 from '../assets/screenshots/Pomdoro/1.png'
import pomo2 from '../assets/screenshots/Pomdoro/2.png'

import newsimg from '../assets/screenshots/News/1.png'
import newsimg2 from '../assets/screenshots/News/2.png'

const ChatBoxImages = [img1, img3, img2, img4];

const NikeImages = [nike1, nike2, nike3, nike4];

const SpotifyImages = [spotify1, spotify2, spotify3, spotify4, spotify5];

const FonkeyImages=[fonkeytype1,fonkeytype2,fonkeytype3]

const PomoImages=[pomo2,pomo1]

const NewsImages=[newsimg,newsimg2]

const RenderImages = [ChatBoxImages, NikeImages, SpotifyImages,FonkeyImages,PomoImages,NewsImages];

const ModalHandler = (fn) => {
  fn((state) => !state);
};

const Modal = ({ children, setModal, projectNo }) => {
  const ActiveProject = RenderImages[projectNo - 1];
  return (
    <div className="absolute max-[800px]:hidden px-[10%] overflow-hidden pt-8 max-[1300px]:px-[5%]   z-50 h-[100vh] w-[100vw] bg-opacity-50 backdrop-blur-md rounded-lg p-4">
      <div className="h-[5%] mb-1  flex justify-end ">
        <IconButton onClick={ModalHandler.bind(this, setModal)}>
          <CancelIcon fontSize="large" className="text-white"></CancelIcon>
        </IconButton>
      </div>
      <div>
        <Fade>
          {ActiveProject.map((val, ind) => {
            return (
              <div
                key={ind}
                className="each-fade flex justify-center items-center"
              >
                <img className="h-[85vh] max-[1150px]:h-[75vh] max-[1050px]:h-[58vh] rounded-md" src={val} />
              </div>
            );
          })}
          {/* <div className="each-fade flex justify-center items-center">
          <img className='h-[85vh] rounded-md' src={fadeImages[1]} />
        </div> */}
        </Fade>
      </div>
    </div>
  );
};

export default Modal;
