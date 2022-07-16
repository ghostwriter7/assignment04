import {Currency} from './currency.interface';

export interface TableColumn {
  field: keyof Currency;
  header: string
}
