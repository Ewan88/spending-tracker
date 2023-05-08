import { Component, Input } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, AccountInfo} from '../../db/db';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  @Input() accountInfo: AccountInfo;
  // Observe an arbritary query:
  accountInfo$ = liveQuery(() => this.fetchAccountInfo());

  async fetchAccountInfo() {
    return await db.accountInfo
      .where({
        accountInfoId: this.accountInfo.id,
      })
      .toArray();
  }

  async addInfo() {
    await db.accountInfo.add({
      name: this.accountName,
      balance: this.accountBalance,
      availableBalance: this.availableBalance
    });
  }

  accountName = 'No Account';
  accountBalance = 0.00
  availableBalance = 0.00
}
