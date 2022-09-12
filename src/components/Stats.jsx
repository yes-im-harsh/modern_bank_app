import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-17 mb-4`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={` flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold sx:text-[38px] text-[28px] xs:leading-[50px] leading-[40px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal sx:text-[18px] text-[13px] xs:leading-[22px] leading-[20px] text-gradient uppercase ml-2">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
