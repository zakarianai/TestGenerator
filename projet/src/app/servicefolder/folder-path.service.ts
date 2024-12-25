import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderPathService {
  // BehaviorSubject pour stocker le chemin du dossier
  private folderPathSubject = new BehaviorSubject<string>('');
  folderPath$ = this.folderPathSubject.asObservable();

  // Méthode pour mettre à jour le chemin du dossier
  setFolderPath(path: string): void {
    this.folderPathSubject.next(path);
  }
  getFolderPath(): any | null {
    return this.folderPathSubject;
  }}
