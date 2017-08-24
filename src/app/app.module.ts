import { AgmCoreModule } from '@agm/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { CategoryComponent } from './menu/category/category.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuService } from './menu/menu.service';
import { BackendService } from './shared/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    AwardsComponent,
    CategoryComponent,
    MenuDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCx-U5GoHpNAWT_pei4g4mj9z_2wDAHPSc'
    })
  ],
  providers: [MenuService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
