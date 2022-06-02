import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';
import { CounterWriterComponent } from './components/counter-writer/counter-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterReaderComponent,
    CounterWriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
