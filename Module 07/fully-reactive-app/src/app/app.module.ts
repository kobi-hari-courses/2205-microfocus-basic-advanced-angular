import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';
import { CounterWriterComponent } from './components/counter-writer/counter-writer.component';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterReaderComponent,
    CounterWriterComponent,
    CounterContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
