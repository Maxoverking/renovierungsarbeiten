import { FC } from "react";
import css from "./Statistics.module.css";
import CountUpAnimation from "./CountUpAnimation";
import AnimatedCounter from "./AnimatedCounter";

const Statistics: FC = () => {
  const one = 8;
  const two = 12;
  const tree = 65;

  return (
    <div className={css.statistic}>
      
      <div className={css.card}>
        <div className={css.cardTop}>
          <p className={css.card_number}>
            <CountUpAnimation endValue={tree} />
          </p>
          <p className={css.card_title}>Abgeschlossene Projekte </p>
        </div>
        <AnimatedCounter value={tree} />
      </div>

      <div className={css.card}>
        <div className={css.cardTop}>
          <p className={css.card_number}>
            <CountUpAnimation endValue={one} />
          </p>
          <span className={css.card_title}> Jahre Erfahrung</span>
        </div>
        <AnimatedCounter value={one} />
      </div>

      <div className={css.card}>
        <div className={css.cardTop}>
          <p className={css.card_number}>
            <CountUpAnimation endValue={two} />
          </p>
          <p className={css.card_title}>Mitarbeiter</p>
        </div>
        <AnimatedCounter value={two} />
      </div>
    </div>
  );
};

export default Statistics;
