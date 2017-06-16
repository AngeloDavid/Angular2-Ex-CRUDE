import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ComicService} from '../app/services/comic.service'
import {APP_ROUTING} from './app.router';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    APP_ROUTING
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
