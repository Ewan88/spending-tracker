import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.css']
})
export class FileSelectComponent {
  fileName = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const papa = new Papa();
      papa.parse(file, {
        complete: result => console.log(result)
      })
    }
  }
}
