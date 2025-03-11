import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-data-upload-page',
  imports: [CardModule, FileUploadModule],
  templateUrl: './data-upload-page.component.html',
  styleUrl: './data-upload-page.component.scss'
})
export class DataUploadPageComponent {

}
