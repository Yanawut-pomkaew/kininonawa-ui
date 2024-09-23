import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './programs/home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './programs/home/components/header-bar/header-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { BannerComponent } from './programs/home/components/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderBarComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class AppModule { }
