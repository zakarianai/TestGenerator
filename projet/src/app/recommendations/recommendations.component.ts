import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Assurez-vous que CommonModule est importé si vous utilisez *ngFor

@Component({
  selector: 'app-recommendations',  // Le sélecteur du composant
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
  standalone: true,  // Facultatif, si vous utilisez une application basée sur des composants indépendants
  imports: [CommonModule]  // Facultatif, si vous utilisez des directives comme *ngFor
})
export class RecommendationsComponent {
  recommendations = {
    "General Code Quality Recommendations": [
      "Use of Optional is recommended to handle null or empty results in a better way.",
      "DRY (Don't Repeat Yourself) principle could be better enforced by creating common methods or utilities for repeated tasks like error handling, searching in database etc."
    ],
    "Security Recommendations": [
      "Avoid returning detailed error messages which might expose sensitive application details.",
      "Ensure that all endpoints of your application are secure and implement proper access controls."
    ],
    "Dependency Management": [
      "Decoupling needed between services and DAO classes for better service orchestration.",
      "Consider to use Dependency Injection to manage dependencies between your classes and improve the modularity of your code."
    ],
    "Clean Code Practices": [
      "Method bodies are quite large. Consider breaking down the methods into smaller parts for better readability and maintainability.",
      "Follow a consistent code style guide - right alignment, naming conventions and include meaningful comments.",
      "Consider using more descriptive method names that clearly communicate what the method does."
    ]
  };
  trackByKey(index: number, item: any): string {
    return item.key;
  }

  // Function to track changes in the values
  trackByItem(index: number, item: string): string {
    return item;
  }
}
