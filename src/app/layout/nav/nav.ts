import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-nav',
  imports: [MatIcon, MatTooltipModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  
  activeSection: string = 'home';

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
