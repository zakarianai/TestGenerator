import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FolderPathService } from '../servicefolder/folder-path.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private folderPathService: FolderPathService, private router:Router) {}

  onFolderSelected(event: Event): void {
    const input = event.target as HTMLInputElement;


    if (input.files) {
      const files = Array.from(input.files);

      // Récupérer le nom du dossier
      if (files.length > 0) {
        const folderPath = files[0].webkitRelativePath.split('/')[0];
        console.log('Nom du dossier sélectionné:', folderPath);

        // Partager le chemin du dossier via le service
        this.folderPathService.setFolderPath(folderPath);
        console.log("hello");
        this.router.navigate(['/about']);
        
      }
    }
  }
  
}
