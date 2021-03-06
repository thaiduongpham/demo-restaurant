import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './menu/category/category.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackendService } from './shared/backend.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    CategoryComponent,
    MenuDetailComponent,
    NotFoundComponent,
    SidebarComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCx-U5GoHpNAWT_pei4g4mj9z_2wDAHPSc'
    }),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
