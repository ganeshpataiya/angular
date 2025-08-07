<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private projectURL = 'public/assets/data/Project.json';//Project with your API URL
  private experienceURL = 'public/assets/data/Experience.json'; // Replace with your second API URL
  private projectArchiveURL = 'public/assets/data/Skills.json'; // Replace with your third API URL  
  constructor(private http:HttpClient) { }
  
  getProject() {
    return this.http.get(this.projectURL);
  } 
  getExperience() {
    return this.http.get(this.experienceURL);
  }
  getProjectArchive() {
    return this.http.get(this.projectArchiveURL);
  }   
}
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private projectURL = 'public/assets/data/Project.json';//Project with your API URL
  private experienceURL = 'public/assets/data/Experience.json'; // Replace with your second API URL
  private projectArchiveURL = 'public/assets/data/Skills.json'; // Replace with your third API URL  
  constructor(private http:HttpClient) { }
  
  getProject() {
    return this.http.get(this.projectURL);
  } 
  getExperience() {
    return this.http.get(this.experienceURL);
  }
  getProjectArchive() {
    return this.http.get(this.projectArchiveURL);
  }   
}
>>>>>>> 7013c006dfc7704393f517a3689a3bcb8794558d
