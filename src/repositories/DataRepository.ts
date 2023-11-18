import type { Data } from '../components/Calendar';
import { CONFIG } from './config';

export class DataRepository {
  public static async get(): Promise<Data> {
    try {
      return await fetch(CONFIG.dataUrl).then((r) => r.json());
    } catch (error) {
      return {};
    }
  }
}
