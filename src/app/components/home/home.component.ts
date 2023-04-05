import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    { img: 'https://www.hcltech.com/sites/default/files/images/campaign-images/rich-snippet/Home-facebook.png' },
    { img: 'https://images.ctfassets.net/vdinc3339dpx/5lK1ZrW48bmaID3WqpmBso/68caa2b2ae03ef233ef19150d4df8372/introducing-guidewire-community.png' },
    { img: 'https://www.marketbeat.com/logos/cognizant-technology-solutions-co-logo.jpg?v=20221027141821' },
    { img: '../../assets/image/emicon.PNG' }
  ];
  slideConfig = { 'slidesToShow': 1, 'slidesToScroll': 1};



  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
  ngOnInit(): void {
  }

}
