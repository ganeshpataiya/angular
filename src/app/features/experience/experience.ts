import { Component, OnInit } from '@angular/core';
import { Api} from '../../api';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
users: any[] = [];
 constructor(private api: Api) {}

   ngOnInit(): void {
    this.api.getExperience().subscribe((data) => {
      this.users = data as any[];
      console.log(this.users);
        console.log(this.users.length);
    });
  }
}
