import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
  >
    <div />

    {/* Headings */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1]">
      <h2 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[420px] text-left`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap relative w-full sm:justify-start justify-center feedback-container z-[1]">
      {feedback.map((card) => (
        <FeedbackCard id={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
