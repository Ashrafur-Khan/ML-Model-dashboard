import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-evaluation-page',
  imports: [CardModule, TableModule],
  templateUrl: './evaluation-page.component.html',
  styleUrl: './evaluation-page.component.scss'
})
export class EvaluationPageComponent {
  metrics = [
    { name: 'Accuracy', value: 0.85 },
    { name: 'Precision', value: 0.82 },
    { name: 'Recall', value: 0.88 },
    { name: 'F1 Score', value: 0.85 }
  ];
}
