import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Api } from '../../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  imports: [MatIcon, CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {
experiences: any[] = [];
 constructor(private api: Api) {}

   ngOnInit(): void {
    this.api.getExperience().subscribe((data) => {
      this.experiences = data as any[];
      // alert('Experience data loaded successfully');
      // console.log(this.experiences);
      // console.log(this.users);
      //   console.log(this.users.length);
    });
  }
}
