import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Api } from '../../api';

@Component({
  selector: 'app-portfolio',
  imports: [MatIconModule, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
project: any[] = [];
 constructor(private api: Api) {}

   ngOnInit(): void {
    this.api.getProject().subscribe((data) => {
      this.project = data as any[];
      console.log(this.project);
        console.log(this.project.length);
    });
  }
}
