import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`w-[110px] h-[110px] rounded-full ${styles.flexCenter} bg-blue-gradient p-[2px] cursor-pointer`}
  >
    {/* for rounded border radius */}
    <div
      className={`w-[100%] h-[100%] rounded-full ${styles.flexCenter} flex-col bg-primary`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[14px] leading-[19px] mr-1">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[18px] h-[18px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[14px] leading-[19px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
