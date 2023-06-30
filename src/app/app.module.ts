import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { IntroComponent } from './components/intro/intro.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { LatestArticlesComponent } from './components/latest-articles/latest-articles.component';
import { SiteMapComponent } from './components/site-map/site-map.component';
import { LatestArticleItemComponent } from './components/latest-article-item/latest-article-item.component';
import { WhyUsItemComponent } from './components/why-us-item/why-us-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    WhyUsComponent,
    LatestArticlesComponent,
    SiteMapComponent,
    LatestArticleItemComponent,
    WhyUsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
