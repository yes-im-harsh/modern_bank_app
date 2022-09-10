import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      {/* Discount Part */}

      <div className="flex flex-row items-center py-[4px] px-3 bg-discount-gradient rounded-[8px] mb-1">
        <img src={discount} alt="discount" className=" w-[28px] h-[28px]" />
        <p className={`ml-1 ${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        {/* Text Part */}
        <h1 className="flex-1 font-poppins text-white ss:text-[62px] text-[42px] ss:leading-[90px] leading-[65px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation </span>
          <br className="sm:block hidden" /> Payment Method
        </h1>

        {/* Get-Started */}
        <div className="ss:flex md:mr-3 mr-0">
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
