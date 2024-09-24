// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
// import me from "/image/07.png";
import waves from "../../../../public/image/shape-wawes.svg";
import circle from "../../../../public/image/shape-circle.svg";

import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import "./hero.css";

function HeroSection() {
  return (
    <div className="main">
      <section className="home section" id="home">
        <div className="home__container container grid section__border">
          <div className="home__data grid">
            <h1 className="home__title">
              Hi, I’m Asher <br />
              Software Developer
            </h1>

            <div className="home__blob grid">
              <div className="home__perfil">
                <img src="/image/07.png" alt="home perfil" />
              </div>

              <img
                src={"/image/shape-wawes.svg"}
                alt=""
                className="home__shape-waves"
              />
              <img
                src={"/image/shape-circle.svg"}
                alt=""
                className="home__shape-circle"
              />
            </div>
          </div>

          {/*==================== HOME INFO 1 ====================*/}
          <div className="home__info">
            <div>
              <h3 className="home__info-title">BIOGRAPHY</h3>
              <p className="home__info-description">
                Hi, I'm Asher, a Software Developer. Passionate about developing
                exquisite and highly responsive digital masterpieces.
              </p>
            </div>

            <div>
              <h3 className="home__info-title">CONTACT</h3>
              <p className="home__info-description">
                ashersam116@gmail.com <br />
                <br />
                +251 900 269 094 <br />
              </p>
            </div>

            <div>
              <h3 className="home__info-title">SERVICES</h3>
              <p className="home__info-description">
                Full-Stack Web Development
                <br />
                Custom Software Development
                <br />
                Website Security
                <br />
              </p>
            </div>
          </div>

          {/*==================== HOME INFO 2 ====================*/}
          <div className="home__info">
            <div>
              <h3 className="home__info-title">YEARS OF EXPERIENCE</h3>
              <p className="home__info-number">02+</p>
            </div>

            <div>
              <h3 className="home__info-title">COMPLETED PROJECTS</h3>
              <p className="home__info-number">12+</p>
            </div>

            {/* <div>
                <h3 className="home__info-title">COMPANIES WORKED</h3>
                <p className="home__info-number">07+</p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
