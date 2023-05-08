import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InfoComponent, EntryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
