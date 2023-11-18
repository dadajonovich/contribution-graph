import { unionClasses } from '../../utils/unionClasses';

import s from './style.module.scss';

type CellProps = {
  date: string;
  contributions: number;
};

const getClassName = (contributions: number): string => {
  if (contributions >= 30) {
    return s.ultra;
  }
  if (contributions >= 20) {
    return s.hight;
  }
  if (contributions >= 10) {
    return s.middle;
  }
  if (contributions >= 1) {
    return s.low;
  }
  return s.zero;
};

export function Cell(props: CellProps) {
  return (
    <div className={unionClasses(s.cell, getClassName(props.contributions))}>
      <div className={s.stat}>
        <p className={s.contr}>
          {props.contributions === 0 ? 'No' : props.contributions} contributions
        </p>
        <p className={s.date}>{new Date(props.date).toDateString()}</p>
      </div>
    </div>
  );
}
