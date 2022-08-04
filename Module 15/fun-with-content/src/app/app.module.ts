import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { IconComponent } from './components/icon/icon.component';
import { ExpanderToggleDirective } from './components/expander/expander-toggle.directive';
import { ToggleContentComponent } from './components/expander/toggle-content/toggle-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpanderComponent,
    IconComponent,
    ExpanderToggleDirective,
    ToggleContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
