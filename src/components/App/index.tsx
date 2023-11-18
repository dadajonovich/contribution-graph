import { Calendar, Data } from '../Calendar';
import { DataRepository } from '../../repositories/DataRepository';
import './style.scss';

import s from './style.module.scss';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<Data>({});
  useEffect(() => {
    DataRepository.get().then((data) => setData(data));
  }, []);

  return (
    <main className={s.container}>
      <Calendar data={data} />
    </main>
  );
}

export default App;
