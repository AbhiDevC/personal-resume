import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'abhi-resume';
  homeComponent:boolean= false;
  skillComponent: boolean=false;
  eduComponent: boolean=false;
  homeButtonClicked(){
    this.skillComponent=false;
    this.homeComponent=true;
    this.eduComponent=false;
  }
  skillComponentClicked(){
    this.homeComponent=false;
    this.skillComponent=true;
    this.eduComponent=false;
  }

  eduComponentClicked(){
    this.homeComponent= false;
    this.skillComponent=false;
    this.eduComponent=true;
  }
 ngOnChanges(): void {
  // this.homeComponent= false;
  // this.skillComponent=false;
 }
}
