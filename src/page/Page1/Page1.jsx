import React, { useState } from "react";
import "./page1.css";
import { Header } from "../../components/Header/Header";
import user from "../../assets/images/user.png";
import community from "../../assets/images/membership.jpg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import { FaArrowRight } from "react-icons/fa";
import { PiArrowLeftThin } from "react-icons/pi";
import { BsFlower2 } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const Page1 = () => {
  const [active, setActive] = useState(1);
  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate()

  return (
    <div>
      <Header />

      {/* header2 --------------------------------------start */}
      <div className="header-2 mt-2 mx-0 position-relative">
        <div className="options gap-4 d-none d-xs-none d-lg-flex">
          <div
            onClick={() => setActive(1)}
            className={`${active === 1 && "active"}`}
          >
            Home
          </div>
          <div
            onClick={() => setActive(2)}
            className={`${active === 2 && "active"}`}
          >
            Dash Board
          </div>
          <div
            onClick={() => setActive(3)}
            className={`${active === 3 && "active"}`}
          >
            Products
          </div>
          <div
            onClick={() => setActive(4)}
            className={`${active === 4 && "active"}`}
          >
            Transactions
          </div>
          <div
            onClick={() => setActive(5)}
            className={`${active === 5 && "active"}`}
          >
            Journal
          </div>
        </div>
        <div
          onClick={() => {
            if (window.innerWidth < 600) {
              setSidebar(true);
            }
          }}
          className={`user-image-cont ${sidebar && "d-none d-lg-grid"}`}
        >
          <img className="user-image" src={user} alt={"user"} />
          Josef lazer
        </div>
        <div
          className={`sidebar row d-lg-none d-sm-flex pt-3 pb-3 ${
            !sidebar ? "d-none" : "active d-sm-flex"
          }`}
        >
          <div className="w-100 pe-4 justify-content-end d-flex">
            <div className="btn p-0" onClick={() => setSidebar(false)}>
              <FaArrowRight className="p-0 border" />
            </div>
          </div>
          <div className="sidebar-items">Home</div>
          <div className="sidebar-items">Dash Board</div>
          <div className="sidebar-items">Products</div>
          <div className="sidebar-items">Transactions</div>
          <div className="sidebar-items border-bottom-0">Journal</div>
        </div>
      </div>
      {/* header ---------------------------------------------end */}

      {/* body ----------------------------------------------start */}
      <div className="row mt-5 pt-5 mx-0">
        {/* community -------------------------------------start */}
        <span className="col-lg-1" />
        <div className="col-12 col-lg-3 page1-cont-1">
          <h3 className="page1-h1 ps-3 ps-lg-0">New Arrival</h3>
          <div className="join-text py-2 ms-3 ms-lg-0">Join today</div>
          <div className="community-img-cont my-4">
            <img
              className="community-img"
              src={community}
              alt="community-logo"
            />
          </div>
          <div className="w-100 d-flex justify-content-center">
            <div onClick={()=>navigate('/register')} className="join-btn col-8 btn btn-sm rouded-5">JOIN NOW</div>
          </div>
        </div>
        {/* community -------------------------------------end */}

        {/* feature Cards ---------------------------------start */}
        <div className="col-12 col-lg-8 row mx-0 page1-cont-2 pb-lg-3 px-0 ">
          <div className="head col-12 col-lg-11 pb-5 pt-5 pt-lg-0">
            {window.innerWidth>1000?<h3>Unlock Premium Features Now</h3>
            :<h4>Unlock Premium Features Now</h4>}
            <div className="flower-dec">
              ------- &emsp;
              <BsFlower2 />
              &emsp;-------
            </div>
          </div>
          <span className="col-lg-1" />
          <div className="col-1 d-none d-lg-flex align-items-center">
            <PiArrowLeftThin className="arrow py-0" />
          </div>

          <div className="col-12 col-lg-9 row mx-0 d-flex justify-content-center justify-content-lg-between gap-3">
            <div className="feature-card">
              <div className="feature-carad-img-cont w-100">
                <img src={img2} />
              </div>
              <div className="pt-3 pb-3">
                Lower
                <br /> Interest Rates
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-carad-img-cont">
                <img src={img3} />
              </div>
              <div className="pt-3 pb-3">
                Interest
                <br />
                Free Payments
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-carad-img-cont">
                <img src={img1} />
              </div>
              <div className="pt-3 pb-3">
                Discount On
                <br />
                Materials
              </div>
            </div>
          </div>

          <div className="col-1 d-flex align-items-center">
            <PiArrowLeftThin className="arrow left py-0" />
          </div>
          <div className="px-0 row mx-0 justify-items-center gap-2">
            <div className="dot pt-lg-3 col-12 col-lg-11 d-flex justify-content-center">
              <GoDotFill className="feature-dot" size={"10px"} />
              <GoDotFill className="feature-dot" size={"10px"} />
              <GoDotFill className="feature-dot" size={"10px"} />
            </div>
            <div className="d-flex col-12 col-lg-11 justify-content-center">
              <div className="btn feature-btn btn-sm col-5 col-lg-3 rounded-5">
                UNLOCK NOW
              </div>
            </div>
            <div className="d-flex col-12 col-lg-11 justify-content-center">
              <div className="mb-5 btn feature-btn btn-sm col-4 col-lg-2 rounded-5">
                DETAILS
              </div>
            </div>
          </div>
        </div>
        {/* feature Cards ---------------------------------end */}
      </div>
      <span style={{height:"4rem"}}/>
      {/* body ----------------------------------------------end */}
    </div>
  );
};
