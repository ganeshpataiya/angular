<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
// import {dataService} from './api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Portfolio } from './features/portfolio/portfolio';
import { Contact } from './features/contact/contact';
import { Resume } from './features/resume/resume';
import { Nav } from './layout/nav/nav';
import { MatIcon } from '@angular/material/icon';
import { Bgsetting } from "./layout/bgsetting/bgsetting";
// import { Hamburgemenu } from "./layout/hamburgemenu/hamburgemenu";
// import { Experience } from './features/experience/experience';
import { Profile } from './features/profile/profile';
// import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [CommonModule, Home, About, Resume, Skills, Portfolio, Contact, Nav, MatIcon, Bgsetting, Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App {
  // protected title = 'angular-profile';
  isPopupOpen: boolean = false;

  openPopup() {
    this.isPopupOpen = true
  }
  closePopup() {
    this.isPopupOpen = false;
  }

}
=======
import { Component, OnInit } from '@angular/core';
// import {dataService} from './api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Portfolio } from './features/portfolio/portfolio';
import { Contact } from './features/contact/contact';
import { Resume } from './features/resume/resume';
import { Nav } from './layout/nav/nav';
import { MatIcon } from '@angular/material/icon';
import { Bgsetting } from "./layout/bgsetting/bgsetting";
import { Hamburgemenu } from "./layout/hamburgemenu/hamburgemenu";
// import { Experience } from './features/experience/experience';
import { Profile } from './features/profile/profile';
// import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [CommonModule, Home, About, Resume, Skills, Portfolio, Contact, Nav, MatIcon, Bgsetting, Hamburgemenu,  Profile],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App {
  // protected title = 'angular-profile';
  isPopupOpen: boolean = false;

  openPopup() {
    this.isPopupOpen = true
  }
  closePopup() {
    this.isPopupOpen = false;
  }

}
>>>>>>> 7013c006dfc7704393f517a3689a3bcb8794558d
