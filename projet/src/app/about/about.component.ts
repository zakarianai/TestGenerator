import { Component, OnInit } from '@angular/core';
import { FolderPathService } from '../servicefolder/folder-path.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  folderPath: string | null = null;

  constructor(private folderPathService: FolderPathService) {}

  ngOnInit(): void {
    this.folderPath = this.folderPathService.getFolderPath();
  }
}
