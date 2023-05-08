import { Component, Input } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, StatementEntry } from '../../db/db';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  @Input() statementEntry: StatementEntry;
  statementEntry$ = liveQuery(() => db.statementEntries.toArray());

  
  
}
