import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';
import { AdditionService } from './services/addition.service';
import { WorngAdditionService } from './services/wrong-addition.service';

@NgModule({
  declarations: [AppComponent, CalcComponent, GroupComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: AdditionService,
      useExisting: WorngAdditionService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
