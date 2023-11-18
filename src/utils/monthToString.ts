const monthMap: { [month: number]: string } = {
  1: 'Янв.',
  2: 'Февр.',
  3: 'Март',
  4: 'Апр.',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Авг.',
  9: 'Сент.',
  10: 'Окт.',
  11: 'Нояб.',
  12: 'Дек.',
};

export const monthToString = (month: number): string => {
  return monthMap[month];
};
