import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';

@NgModule({
  declarations: [
    AppComponent, 
    TitleComponent, 
    StringSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
