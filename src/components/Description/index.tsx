import { Cell } from '../Cell';
import s from './style.module.scss';

export const Description = () => {
  return (
    <section className={s.example}>
      <span className={s.text}>Меньше</span>
      <div className={s.cells}>
        <Cell isExample={true} contributions={0} />
        <Cell isExample={true} contributions={1} />
        <Cell isExample={true} contributions={10} />
        <Cell isExample={true} contributions={20} />
        <Cell isExample={true} contributions={30} />
      </div>
      <span className={s.text}>Больше</span>
    </section>
  );
};
