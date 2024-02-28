import "./App.css";
import logo from "./assets/logo.png";
import trophy from "./assets/trophy.png";
import photo from "./assets/photo.png";
import equipment from "./assets/equipment.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#fff] to-[#FFF8AA]">
      <div className="flex justify-center">
        <img src={logo} alt="" className="lg:w-[500px]" />
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="w-[25%]">
          <img src={trophy} alt="" />
        </div>
        <div className="w-[80%] lg:w-[65%]">
          <p className="font-bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <div className="flex flex-col items-center">
            <ul className="list-disc lg:ml-11">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
            <div>
              <img src={photo} alt="" className="lg:w-[500px]" />
            </div>
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <br />
      <p className="text-center">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="flex flex-col items-center">
        <div>
          <img
            src={equipment}
            alt=""
            className="w-[80%] m-auto pt-10 pb-10 lg:p-0"
          />
        </div>
        <p className="text-[10px] lg:text-[16px]">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </div>
      <div className="h-1 bg-[red] mt-2 mb-2"></div>
      <div>
        <p className="text-center font-bold mt-3 mb-3">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="text-[10px] lg:text-[16px]">
          CHEMICALS & PROCESS <span className="text-[red] font-bold">|</span>{" "}
          POWER <span className="text-[red] font-bold">|</span> WATER & WASTE
          WATER <span className="text-[red] font-bold">|</span> OILS & GAS{" "}
          <span className="text-[red] font-bold">|</span> PHARMA{" "}
          <span className="text-[red] font-bold">|</span> SUGARS & DISTILLERIES{" "}
          <span className="text-[red] font-bold">|</span> PAPER & PULP{" "}
          <span className="text-[red] font-bold">|</span> MARINE & DEFENCE{" "}
          <span className="text-[red] font-bold">|</span> METAL & MINING{" "}
          <span className="text-[red] font-bold">|</span> FOOD & BEVERAGE{" "}
          <span className="text-[red] font-bold">|</span> PETROCHEMICAL &
          REFINERIES <span className="text-[red] font-bold">|</span> SOLAR{" "}
          <span className="text-[red] font-bold">|</span> BUILDING{" "}
          <span className="text-[red] font-bold">|</span> HVAC{" "}
          <span className="text-[red] font-bold">|</span> FIRE FIGHTING{" "}
          <span className="text-[red] font-bold">|</span>
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div></div>
      <div className="bg-[red] text-[#fff] flex justify-between p-12 m-3 flex-wrap">
        <div className="flex items-center">
          <div className="mr-2">
            <FaPhoneAlt />
          </div>
          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <FaFacebook />
          </div>
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <BsGlobe />
          </div>
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
