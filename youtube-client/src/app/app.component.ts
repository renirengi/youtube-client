import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client';
  public visibility: boolean = false;


  changeVisibilityResult (visibility:boolean) {
    this.visibility = visibility;
  }
 }




