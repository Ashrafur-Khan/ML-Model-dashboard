import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-model-training-page',
  imports: [CardModule, DropdownModule, ButtonModule],
  templateUrl: './model-training-page.component.html',
  styleUrl: './model-training-page.component.scss'
})
export class ModelTrainingPageComponent {
  models = [
    { label: 'Random Forest', value: 'random_forest' },
    { label: 'Decision Tree', value: 'decision_tree' },
    { label: 'Neural Network', value: 'neural_network' },
    { label: 'Support Vector Machine', value: 'svm' },
    { label: 'Gradient Boosting', value: 'gradient_boosting' },
    { label: 'K-Nearest Neighbors', value: 'knn' },
    { label: 'Linear Regression', value: 'linear_regression' },
    { label: 'Logistic Regression', value: 'logistic_regression' },
  ];

}
