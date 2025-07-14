import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bgsetting',
  imports: [CommonModule],
  templateUrl: './bgsetting.html',
  styleUrl: './bgsetting.scss'
})
export class Bgsetting {
constructor(private renderer: Renderer2) {}


 setBackground(type: 'white' | 'dark' | 'gradient' | 'image') {
  const body = document.body;
 this.renderer.removeClass(body, 'white-bg');
    this.renderer.removeClass(body, 'dark-bg');
    this.renderer.removeClass(body, 'gradient-bg');
    this.renderer.removeClass(body, 'image-bg');
     // Add new background class
    this.renderer.addClass(body, `${type}-bg`);
  
 }
// background video
  // activeDiv: string | null = null;
  //   showDiv(divId: string) {
  //   this.activeDiv = this.activeDiv === divId ? null : divId;
  // }

   ngOnInit() {
    this.showDiv('video1'); // ✅ Default visible div
  }
  
 showDiv(videoId: string) { 
  const videos = ['video1', 'video2', 'video3'];
  videos.forEach(id => {
    const videoElement = document.getElementById(id);
    if (videoElement) {
      this.renderer.setStyle(videoElement, 'display', id === videoId ? 'block' : 'none');
    }
  });
 }

}
