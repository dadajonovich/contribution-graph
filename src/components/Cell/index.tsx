import { unionClasses } from '../../utils/unionClasses';

import s from './style.module.scss';

type CellProps =
  | {
      isExample?: never;
      date: string;
      contributions: number;
    }
  | { isExample: true; date?: never; contributions: number };

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

const getRangeName = (contributions: number): string => {
  if (contributions >= 30) {
    return '30+';
  }
  if (contributions >= 20) {
    return '20-29';
  }
  if (contributions >= 10) {
    return '10-19';
  }
  if (contributions >= 1) {
    return '1-9';
  }
  return 'No';
};

export function Cell(props: CellProps) {
  return (
    <div className={unionClasses(s.cell, getClassName(props.contributions))}>
      <div className={s.stat}>
        <p className={s.contr}>
          {props.isExample
            ? getRangeName(props.contributions)
            : props.contributions === 0
            ? 'No'
            : props.contributions}{' '}
          contributions
        </p>
        {props.date && (
          <p className={s.date}>{new Date(props.date).toDateString()}</p>
        )}
      </div>
    </div>
  );
}
