import React from "react";
import "./page2.css";
import { Header } from "../../components/Header/Header";
import backimg from "../../assets/images/celeb.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Page2 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="row mx-0 register-cont pt-lg-4 flex justify-content-center">
        <span className="col-1 col-2" />
        <div className="col-11 col-lg-5 mt-4 mt-lg-5 pt-lg-5 ms-1 ms-lg-0">
          {window.innerWidth > 1000 ? (
            <h1>Unlock Exclusive Benifits</h1>
          ) : (
            <h3>Unlock Exclusive Benifits</h3>
          )}
          {window.innerWidth<1000&&<div className="col-5 mt-lg-5 pt-lg-5 pb-2 w-100">
          <img className="reg-image" src={backimg} alt="register-back-image" />
        </div>}
          <div className="input-heading pb-1 mt-3">PHONE NUMBER</div>
          <div className="d-flex col-11 col-lg-10 gap-3 mx-0 pb-4">
            <div className="w-100 position-relative">
            <input placeholder="+91 India" className="register-input rounded-5 border-1 border-secondary w-100" />
            <div className="dropdown">
              <BiSolidDownArrow className="dropdown-btn"/>
            </div>
            </div>
            <input placeholder="901233456" className="register-input rounded-5 border-1 border-secondary w-100" />
          </div>
          <div className="input-heading pb-1">NAME</div>
          <div className="col-11 col-lg-10">
            <input className="register-input rounded-5 border-1 border-secondary w-100" />
          </div>
          <div className="input-heading pb-1 mt-4">EMAIL {"[OPTIONAL]"}</div>
          <div className="col-11 col-lg-10">
            <input className="register-input rounded-5 border-1 border-secondary w-100" />
          </div>
          <div className="col-11 col-lg-10 pt-5">
            <div onClick={()=>navigate("/")} className="btn register-input rounded-5 border-1 border-secondary w-100 btn">
              CONTINUE
            </div>
          </div>
          <div className="register-footer-text">
            {"Get ready to recieve a secret code (OTP) on your phone."}
          </div>
        </div>
       {window.innerWidth>1000&&<div className="col-5 mt-lg-5 pt-lg-5">
          <img className="reg-image" src={backimg} alt="register-back-image" />
        </div>}
      </div>
    </div>
  );
};
