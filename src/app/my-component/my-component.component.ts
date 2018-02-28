import { Component, OnInit } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'vertical',
  slidesPerView: 'auto'
};

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  config: SwiperConfigInterface = {};
  basePath = 'assets/img//';
  

  /* slidearr1 new for slider starts here */
  basePath1= './assets/img/';

  sliderarr1 = [
    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Crafting',
      title2:'Innovations',
      title3:'with Emerging',
      title4:'Technologies',
      desc:'Gear up for the future with latest technology trends and explore new ways of doing business',
      link:'#capability'
    },
    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Accelerating',
      title2:'Product ',
      title3:'Development & ',
      title4:'Go-To Market Strategy',
      desc:'Get to market faster and scale to unpredictable customer demands quickly'
      // link:'#product'
    },

    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Designing',
      title2:'Additive And',
      title3:'Engaging User',
      title4:'Experiences',
      desc:'Build personalized, seamless and conversational digital interface for users'
      // link:'#design'
    },
    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Re-Enginnering',
      title2:'Conventional',
      title3:'Problems with',
      title4:'Smart Technology',
      desc:'Solve simple to complex technology or business problems with faster , leaner digital engineering'
      // link:'#Re-engineer'
    }
  
  
  ];
  /* slidearr1 new for slider ends here */

  constructor() {
    this.config = {
      navigation: true,
      pagination: true,
      direction:'horizontal',
      slidesPerView:1,
      mousewheel: true,
      spaceBetween: 30,
      autoplay:true,
      speed:4500
  };
   }

  ngOnInit() {
  }

}
