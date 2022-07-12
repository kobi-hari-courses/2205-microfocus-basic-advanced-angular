import { NgModule } from "@angular/core";
import { A_TOKEN } from "../injection-tokens";

@NgModule({
    providers: [
        {
            provide: A_TOKEN, 
            useValue: 1, 
            multi: true
        }
    ]
})
export class YetAnotherSharedModule {

}