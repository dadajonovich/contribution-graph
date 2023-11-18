import { useMemo } from 'react';
import { formatDate } from '../../utils/formatDate';
import { getNextSunday } from '../../utils/getNextSunday';
import { createMatrix } from '../../utils/createMatrix';
import { monthToString } from '../../utils/monthToString';
import { Cell } from '../Cell';
import { Description } from '../Description';

import s from './style.module.scss';

export type Data = {
  [date: string]: number;
};

type CalendarProps = {
  data: Data;
};

const ONE_DAY_AS_MILLIS = 60 * 60 * 24 * 1000;

export const Calendar = (props: CalendarProps) => {
  const matrix = useMemo(() => {
    const currentDate = getNextSunday();
    const firstDate = currentDate - ONE_DAY_AS_MILLIS * 356;

    const data = Object.entries(props.data)
      .sort(
        ([prev], [current]) =>
          Number(new Date(prev)) - Number(new Date(current))
      )
      .filter(([date]) => Number(new Date(date)) > firstDate);

    if (data.length > 0) {
      const lastDate = Number(new Date(data.at(-1)![0]));

      const lastDiffDays = Math.floor(
        (currentDate - lastDate) / ONE_DAY_AS_MILLIS
      );

      if (lastDiffDays > 0) {
        data.push([formatDate(new Date(currentDate)), 0]);
      }

      const firstDiffDays = Math.floor(
        (currentDate - firstDate) / ONE_DAY_AS_MILLIS
      );
      if (firstDiffDays > 0) {
        data.unshift([formatDate(new Date(firstDate)), 0]);
      }
    } else {
      data.push([formatDate(new Date(firstDate)), 0]);
      data.push([formatDate(new Date(currentDate)), 0]);
    }

    for (let i = data.length - 1; i >= 1; i--) {
      const date = Number(new Date(data[i][0])) / ONE_DAY_AS_MILLIS;
      const prevDate = Number(new Date(data[i - 1][0])) / ONE_DAY_AS_MILLIS;

      const diffDays = date - prevDate;

      if (diffDays > 1) {
        const addingDays = Array.from({ length: diffDays - 1 }, (_, index) => {
          const d = new Date((prevDate + index + 1) * ONE_DAY_AS_MILLIS);
          return formatDate(d);
        });
        data.splice(
          i,
          0,
          ...addingDays.map((day) => [day, 0] as [string, number])
        );
      }
    }

    return createMatrix(data, 51, 7);
  }, [props.data]);

  let prevMonth = 0;
  return (
    <div className={s.wrapper}>
      <section className={s.calendar}>
        <div className={s.weekNames}>
          <p>
            <span>Пн</span>
          </p>
          <p>
            <span>Ср</span>
          </p>
          <p>
            <span>Пт</span>
          </p>
        </div>

        {matrix.map((column, index) => {
          let isDrawMonth = false;
          const currentMonth = new Date(column[0][0]).getMonth() + 1;
          if (currentMonth !== prevMonth) {
            if (prevMonth !== 0) isDrawMonth = true;
            prevMonth = currentMonth;
          }

          return (
            <div className={s.week} key={index}>
              {isDrawMonth && (
                <div className={s.month}>{monthToString(currentMonth)}</div>
              )}
              {column.map(([date, contributions]) => (
                <Cell date={date} contributions={contributions} key={date} />
              ))}
            </div>
          );
        })}
      </section>
      <Description />
    </div>
  );
};
