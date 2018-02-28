import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AccionmainComponent } from './accionmain/accionmain.component';

import { SwiperModule } from 'ngx-useful-swiper';
// import { SwiperModule } from 'ngx-useful-swiper/lib/swiper.module';

import { MyComponentComponent } from './my-component/my-component.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AccionmainComponent,
    MyComponentComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    SwiperModule,
    AngularFontAwesomeModule
  ],
  providers: [
        //provide: SWIPER_CONFIG,
       // useValue: DEFAULT_SWIPER_CONFIG
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
