import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prediction-page',
  imports: [CardModule, DropdownModule, ButtonModule],
  templateUrl: './prediction-page.component.html',
  styleUrl: './prediction-page.component.scss'
})
export class PredictionPageComponent {

}
