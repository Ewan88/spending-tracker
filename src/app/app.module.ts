import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { EntryComponent } from './entry/entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectComponent } from './file-select/file-select.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatIconModule],
  declarations: [AppComponent, InfoComponent, EntryComponent, FileSelectComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
