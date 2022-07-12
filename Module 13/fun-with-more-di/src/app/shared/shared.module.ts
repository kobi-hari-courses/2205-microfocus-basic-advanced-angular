import { NgModule } from "@angular/core";
import { A_TOKEN } from "../injection-tokens";

@NgModule({
    providers: [
        {
            provide: A_TOKEN, 
            useValue: 2, 
            multi: true
        }
    ]
})
export class SharedModule {

}