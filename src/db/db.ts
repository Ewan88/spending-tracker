import Dexie, { Table } from 'dexie';

export interface StatementEntry {
  id?: number;
  date: Date;
  type: string;
  description: string;
  paid: number;
  balance: number;
}

export interface AccountInfo {
  id?: number;
  name: string;
  balance: number;
  availableBalance: number;
}

export class AppDB extends Dexie {
  statementEntries!: Table<StatementEntry, number>;
  accountInfo!: Table<AccountInfo, number>;

  constructor() {
    super('ngdexieliveQuery');

    this.version(1).stores({
      statementEntries: '++id',
      accountInfo: '++id',
    });
  }
}

export const db = new AppDB();
