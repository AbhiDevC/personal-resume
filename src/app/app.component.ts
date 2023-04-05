import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'abhi-resume';
  homeComponent:boolean= false;
  skillComponent: boolean=false;
  homeButtonClicked(){
    this.skillComponent=false;
    this.homeComponent=true;
  
  }
  skillComponentClicked(){
    this.homeComponent=false;
    this.skillComponent=true;
    
  }
 ngOnChanges(): void {
  // this.homeComponent= false;
  // this.skillComponent=false;
 }
}
