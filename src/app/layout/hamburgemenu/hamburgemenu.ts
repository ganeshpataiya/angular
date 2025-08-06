import { Component } from '@angular/core';
import { Nav } from '../nav/nav'; // Adjust the import path as necessary

@Component({
  selector: 'app-hamburgemenu',
  imports: [Nav],
  templateUrl: './hamburgemenu.html',
  styleUrl: './hamburgemenu.scss'
})
export class Hamburgemenu {
  menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onMenuItemClick() {
    this.menuOpen = false; // Close the menu when an item is clicked
  }
}
