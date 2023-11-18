import data from '../../assets/mocks/data.json';
import { Calendar } from '../Calendar';
import './style.scss';

import s from './style.module.scss';

function App() {
  return (
    <main className={s.container}>
      <Calendar data={data} />
    </main>
  );
}

export default App;
