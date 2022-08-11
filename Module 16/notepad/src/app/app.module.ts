import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { StringSelectorComponent } from './components/string-selector/string-selector.component';
import { ItemDirective } from './components/string-selector/item.directive';

@NgModule({
  declarations: [
    AppComponent, 
    TitleComponent, 
    StringSelectorComponent, ItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
